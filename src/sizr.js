var $, win;

module.exports = function (windowArg, jqueryArg) {
  win = windowArg;
  $ = jqueryArg;
  if (!win) {
    throw new Error('Unable to get window object');
  }
  if (!$) {
    throw new Error('Unable to resolve JQuery');
  }
  $(win).on('load', module.exports.refresh);
  $(win).on('resize', module.exports.refresh);
  return module.exports;
};

module.exports.VERSION = '0.0.1'; // Don't change it here, but in package.json

module.exports._groupBy = function (objArray, signatureFunc) {
  var result = [];
  var indexes = {};
  objArray.forEach(function (obj) {
    var signature = signatureFunc(obj).toString();
    if (indexes[signature] !== undefined) { // Existing group
      result[indexes[signature]].group.push(obj);
    } else { // New group
      indexes[signature] = result.length;
      result.push({
        signature: signature,
        group: [obj]
      });
    }
  });
  return result;
};

function process(widthOrHeight) {
  $('[data-sizr-' + widthOrHeight + '-group]')[widthOrHeight]('');
  var groups = module.exports._groupBy(Array.prototype.slice.call($('[data-sizr-' + widthOrHeight + '-group]')), function (e) {
    return e.getAttribute('data-sizr-' + widthOrHeight + '-group');
  });
  groups.forEach(function (group) {
    var max = Math.max.apply(null, group.group.map(function (e) {
      return $(e)[widthOrHeight]();
    }));
    $('[data-sizr-' + widthOrHeight + '-group="' + group.signature + '"]')[widthOrHeight](max);
  });
}

module.exports.refresh = function () {
  process('width');
  process('height');
};