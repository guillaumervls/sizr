/*global define*/
var sizr = require('./sizr');
if (typeof define === 'function' && define.amd) {
  define(['jquery'], function ($) {
    window.sizr = sizr(window, $);
    return window.sizr;
  });
} else {
  window.sizr = sizr(window, window.$);
}