# search-filter.js
This is a lightweight filter function to filter items on search with minimal setup. The script handles the show and hide functionality across different display property values (such as block, inline-block, list-item etc.) automatically and there is no need of CSS classes to change this property.

**Demo: [https://github.alexerlandsson.com/search-filter/](https://github.alexerlandsson.com/search-filter/)**

## Quick start
### 1. Create the HTML markup
The default markup looks like this:

```html
<input type="text" id="sf-input" />
<ul>
	<li sf-value="one">One</li>
	<li sf-value="two">Two</li>
	<li sf-value="three">Three</li>
	<li sf-value="four">Four</li>
	<li sf-value="five">Five</li>
</ul>
```

The only things you need to consider is the id of the input (default sf-input) and the data value of the items (default sf-value).
If you want to use you own id and data value, go to *search-filter.js* and change the following variables:

```javascript
var inputId 	= 'sf-input';
var itemsData 	= 'sf-value';
```

When you're done, minify the file if you want to use the minified version in production.

The filter-value should be set to the search term(s) that should be filtered. The script will transform any data values that are not lowercase into lowercase on page load, but **if you set the value dynamically after load, make sure you set this value in lowercase in order to make the filter work**.

### 2. Add the JavaScript to your HTML
Add search-filter.min.js or search-filter.js to your HTML file depending on which one you want to use. I suggest you to use the minified version.

```html
<script src="search-filter.min.js"></script>
```

## Browser Compatibility
This script is working in every modern browser including Google Chrome, Safari, Firefox, Opera and IE8+.

## License
The MIT License (MIT)

Copyright (c) 2016 Alexander Erlandsson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.