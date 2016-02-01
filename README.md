# filter-search.js
This is a lightweight filter function to filter items on search with minimal setup

<h2>How to use?</h2>
<ul>
	<li>Create the html markup. The default markup looks like this:</li>
</ul>

```html
	<input type="text" id="filter-search" />
	<ul>
		<li filter-value="one">One</li>
		<li filter-value="two">Two</li>
		<li filter-value="three">Three</li>
		<li filter-value="four">Four</li>
		<li filter-value="five">Five</li>
	</ul>
```

The only thing you need to consider is the id of the input (default filter-search) and the data value of the items (default filter-value).
If you want to use you own id and data value, go to search-filter.js and change the following variables:

```javascript
	var inputId 	= 'filter-search'; //Id of the input
	var itemsData 	= 'filter-value'; //Data value name of the items
```

When you're done, minify the file if you want to use the minified version in production.

<ul>
	<li>Add search-filter.min.js or search-filter.js to your html file depending on which one you want to use. I suggest you to use the minified version.</li>
</ul>

```html
	<script src="search-filter.min.js"></script>
```

<h2>When to use?</h2>
Use filter-search.js when you need a simple, lightweight filter function on your web page or application.