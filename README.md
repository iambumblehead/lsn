lsn
===
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

Add and remove listener events on elements in the document.

 - lsn( _elem_, _event_, _fn_ );
 - lsn.rm( _elem_, _event_, _fn_ );

---------------------------------------------------------------------
### Caveats:

Research reveals problems with all listener-wrapper scripts available on the internet. None of them are perfect. [The script demonstrated on msdn here][1] is the best one I've seen. The 'terms and conditions' around msdn's sample code, however, are prohibitive and the author has not released a public version of the samples.

[David Mark][4] owns [the best host method][2] checking techniques. This is his: `/^(?:function|object|unknown)$/.test(typeof object[methodname])`. I don't want to steal from David Mark so I don't feel OK using that to find if `addEventListener` is a method on a `document.documentElement`.

One might consider using DOM0 'onclick'-style event listeners exclusively but not when seeing that it is **dramtically slow** [compared to addEventListener][2]. Who wants slow response times for click events? not me.

Due to the above considerations, this script only provides a primitive wrapper around `addEventListener` and `attachEvent`. You may want a more comprehensive solution. 'onclick'-style event listeners are not supported. If `addEventListener` or `attachEvent` are not supported by the host environment this script *will not handle* the event for you -prepare your application to degrade nicely.

Additionally:

 1. no support for 'capturing phase' in IE (capturing an event: when an event is bubbling up, elements queued to 'capture' the event will not fire once the event has been captured.)
 2. order of handler execution is inconsistent. most browsers will FIFO (first in first out), but mshtml will LIFO.
 3. error handling for events passed to certain objects is not anticipated. It may be OK to send these methods a window object or it may not be -no error handling for this.
 4. the `this` is not normailized in any way.
 5. no attempt is made to solve _your_ memory leak issues.

Because this script does not handle edge cases, it is small. It also memoizes the supported listener method which often makes it faster.


[0]: http://www.bumblehead.com                            "bumblehead"
[1]: http://msdn.microsoft.com/en-us/magazine/ff728624.aspx     "msdn"
[2]: https://groups.google.com/forum/#!topic/comp.lang.javascript/NlgKScqVbiU
[3]: http://jsperf.com/onclick-vs-addeventlistener/2    "onclick slow"
[4]: http://www.cinsoft.net/host.html                     "david mark"


---------------------------------------------------------
#### <a id="install"></a>Install:

lsn may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install lsn
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/lsn.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

Tests are not automated and are performed by loading a document in the browser and using the browser console.

- load `test/index.html` in your browser and run tests from the console.


---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](http://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
