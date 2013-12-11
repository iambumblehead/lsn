// Filename: listenertest.js  
// Timestamp: 2013.12.10-23:26:33 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: lsn.js

var listenertest = {
  init : function () {
    var elem = document.getElementById('Bttn1');
    
    lsn(elem, 'click', function (e) {
      console.log('click', e);
    });

    //listener.rm(elem, 'click', function (e) {
    //  console.log('click', e);
    //});
  }
};
