## Comments for simple-weather-app

### c001

The source for this reset is largely inspired by those listed below although we have made some minor modifications to it.

- [Eric Meyer](http://meyerweb.com)
- [HTML5 Boilerplate](http://html5boilerplate.com)
- [HTML5 Doctor](http://html5doctor.com)

### c002

This is [non-standard](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color) behavior as of August 2017.

### c003

Our heartfelt thanks go out to Nicholas Gallagher for the [Clearfix Hack](http://nicolasgallagher.com/micro-clearfix-hack/).

### c004

This standardizes monospaced elements.

### c005

For those among us who like trivia:

- `white-space: pre;` for CSS2
- `white-space: pre-wrap;` for CSS 2.1
- `white-space: pre-line;` for CSS 3 (works also in 2.1)
- `word-wrap: break-word;` for our beloved Internet Explorer

### c006

This scales images in IE7 in a more pleasant manner– because we all long for the days of IE7.

### c007

The reset for `<img>` gives priority to images whose width is greater than their height. All `<img>` elements should be contained within a parent element to better control their ratio and size.

### c008

Webkit browsers add a 2px margin outside the chrome of form elements.

### c009

Make buttons play nice in _Internet Explorer_.

### c010

Mozilla does not style placeholders by default.

### c011

Here we remove any [text shadows](http://twitter.com/miketaylr/status/12228805301) and give a background color to selections in the browser.

### c012

Using `sup` and `sub` can result in [unexpected behavior](https://gist.github.com/unruthless/413930) when also using `line-height`.

### c013

Keep in mind that the `<table>` element still needs _cellspacing="0"_ in the markup.
