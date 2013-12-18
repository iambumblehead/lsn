// Filename: lsn.js
// Timestamp: 2013.12.18-10:52:52 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)

var lsn = (function (de, deffn, o, p) {

  de = document.documentElement;
  deffn = function () {};

  function isMethod (o) {
    return /^(?:function|object|unknown)$/.test(typeof o) ? true : false;
  }

  o = {
    add : (function (fn) {
      if (isMethod(de.addEventListener)) {
        fn = function (el, e, fn) {
          el.addEventListener(e, fn, false);
        };
      } else if (isMethod(de.addatchEvent)) {
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


