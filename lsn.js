// Filename: lsn.js
// Timestamp: 2014.04.05-17:03:14 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)

var lsn = module.exports = (function (de, deffn, o, p) {

  function isMethod (o) {
    return /^(?:function|object|unknown)$/.test(typeof o) ? true : false;
  }

  de = typeof document === 'undefined' || document.documentElement;
  deffn = function () {};

  o = {
    add : (function (fn) {
      if (isMethod(de.addEventListener)) {
        fn = function (el, e, fn) {
          el.addEventListener(e, fn, false);
        };
      } else if (isMethod(de.attachEvent)) {
        fn = function (el, e, fn) {
          el.attachEvent('on'+e, function (e) {
            fn(e || window.event);
          });
        };
      }
      return fn || deffn;
    }()),

    rm : (function (fn) {
      if (isMethod(de.removeEventListener)) {      
        fn = function (el, e, fn) {
          el.removeEventListener(e, fn, false);
        };
      } else if (isMethod(de.detachEvent)) {      
        fn = function (el, e, fn) {
          el.detachEvent('on'+e, fn);
        };
      }
      return fn || deffn;
    }())
  };

  p = o.add;
  p.rm = o.rm;

  return p;
}());


