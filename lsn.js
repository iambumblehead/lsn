// Filename: lsn.js
// Timestamp: 2013.12.09-22:56:11 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)

var lsn = (function (de, deffn) {

  de = document.documentElement;
  deffn = function () {};

  return {
    add : (function (fn) {
      if (typeof de.addEventListener === 'function') {
        fn = function (el, e, fn) {
          el.addEventListener(e, fn, false);
        };
      } else if (typeof de.attachEvent === 'function') {
        fn = function (el, e, fn) {
          el.attachEvent('on'+e, function (e) {
            fn(e || window.event);
          });
        };
      }
      return fn || deffn;
    }()),

    rm : (function (fn) {
      if (typeof de.removeEventListener === 'function') {
        fn = function (el, e, fn) {
          el.removeEventListener(e, fn, false);
        };
      } else if (typeof de.detachEvent === 'function') {
        fn = function (el, e, fn) {
          el.detachEvent('on'+e, fn);
        };
      }
      return fn || deffn;
    }())
  };
}());


