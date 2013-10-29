require('chai').should();

var sizr = require('../src/sizr');

describe('Sizr', function () {
  it('groupBy should group', function () {
    sizr._groupBy([{
      a: 1,
      b: 3
    }, {
      a: 2,
      b: 3
    }, {
      a: 2,
      b: 2
    }, {
      a: 4,
      b: 1
    }, {
      a: 0,
      b: 2
    }, {
      a: 3,
      b: 1
    }], function (obj) {
      return obj.a + obj.b;
    }).should.deep.equal([{
      signature: '4',
      group: [{
        a: 1,
        b: 3
      }, {
        a: 2,
        b: 2
      }, {
        a: 3,
        b: 1
      }]
    }, {
      signature: '5',
      group: [{
        a: 2,
        b: 3
      }, {
        a: 4,
        b: 1
      }]
    }, {
      signature: '2',
      group: [{
        a: 0,
        b: 2
      }]
    }]);
  });
});