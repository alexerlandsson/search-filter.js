/***
 *	Name: search-filter.js
 * 	GitHub: https://github.com/alexerlandsson/search-filter.js
 * 	Description: This is a lightweight filter function to filter items on search with minimal setup
 *	Date: 2016-02-01
 *	Author: Alexander Erlandsson
 *	Author URL: https://alexerlandsson.com
 ***/

/* 
 *	Settings
 * 	Note: Change these varaiables to match your HTML markup
 */

var inputId 	= 'sf-input'; //Id of the input
var itemsData 	= 'sf-value'; //Data value name of the items

/*
 *	Filter functions
 */

//Variables to handle the default display value of items
var displaySet = false;
var displayArr = [];

function getDisplayType(element) {
	//Get the element's computed style
	var elementStyle = element.currentStyle || window.getComputedStyle(element, "");

	//Return the item's display type
	return elementStyle.display;
}

document.getElementById(inputId).onkeyup = function() {
	//Get search value and filter items
	var searchVal = this.value.toLowerCase();
	var filterItems = document.querySelectorAll('[' + itemsData + ']');

	//Loop through each filter item
	for(var i = 0; i < filterItems.length; i++) {
		//Get the display type and push it to displayArr
		if (!displaySet) {
			displayArr.push(getDisplayType(filterItems[i]));
		}

		//Hide all items
		filterItems[i].style.display = 'none';

		//Display the items matching the search value
		if(filterItems[i].getAttribute(itemsData).indexOf(searchVal) >= 0) {
			filterItems[i].style.display = displayArr[i];
		}
	}

	//Only get display type the first time
	displaySet = true;
}