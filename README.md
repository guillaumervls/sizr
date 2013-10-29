Sizr
====

**[Pronounce](http://en.wikipedia.org/wiki/Julius_Caesar)**

JS plugin to link sizes of DOM elements.

# Setup

The "ready to use" [script file](https://raw.github.com/guillaumervls/sizr/master/dist/sizr.min.js)
is in the `dist` folder.

*Depends on [JQuery](http://jquery.com/)*

### Classic :

```html
<script src='sizr.min.js'></script>
```

### [Browserify](https://github.com/substack/node-browserify) :
̀
Install : `npm install sizr`

Then :
```javascript
require('sizr')(window, $);
```

### Also works with AMD (e.g [RequireJS](http://requirejs.org))

In this case, it will depend on `jquery`.


# Use

Link the width/height of elements by giving them a group ID of your choice.
Do this with `data-` attributes in your HTML :

- `data-sizr-width-group` : ID of the group of elements you want to be the same width
- `data-sizr-height-group` : ID of the group of elements you want to be the same height

Example :
```html
<div id="el1" data-sizr-width-group="sampleGroupA"></div>
<div id="el2" data-sizr-width-group="sampleGroupA" data-sizr-height-group="sampleGroupB"></div>
<div id="el3" data-sizr-height-group="sampleGroupB"></div>

<!-- el1 and el2 will have the same width -->
<!-- el2 and el3 will have the same height -->
```

The sizing will be done automatically on page load and on page resize.
If you want to trigger it manually, just call `sizr.refresh()`.

## (Re)build

```
npm install
grunt dist
```

## Test

```
npm install
grunt lint
grunt test
```

### Licence

**The MIT License (MIT)**

*Copyright (c) 2013 guillaumervls*

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
