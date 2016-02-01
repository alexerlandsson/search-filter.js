/***
 *	Name: search-filter.js
 *	Version: 1.1
 * 	GitHub: https://github.com/alexerlandsson/search-filter.js
 *	Author: Alexander Erlandsson (https://alexerlandsson.com)
 *	License: The MIT License (MIT)
 ***/

(function (window, document, undefined) {
	
	/* 
	 *	Settings
	 * 	Note: Change these varaiables to match your HTML markup
	 */

	var inputId 	= 'sf-input'; //Id of the input
	var itemsData 	= 'sf-value'; //Data value name of the items

	/*
	 *	Filter functions
	 */

	var displayArr = [];
	var filterItems = document.querySelectorAll('[' + itemsData + ']');

	function getDisplayType(element) {
		//Get the element's computed style
		var elementStyle = element.currentStyle || window.getComputedStyle(element, "");

		//Return the item's display type
		return elementStyle.display;
	}

	function onLoad() {
		for (var i = 0; i < filterItems.length; i++) {
			//Get the display property value and push it to displayArr
			displayArr.push(getDisplayType(filterItems[i]));

			//Make the item's data value lowercase if not already set this way
			var dataVal = filterItems[i].getAttribute(itemsData);
			if (dataVal !== dataVal.toLowerCase()) {
				filterItems[i].setAttribute(itemsData, dataVal.toLowerCase());
			}
		}
	}

	document.getElementById(inputId).onkeyup = function() {
		//Get search value and filter items
		var searchVal = this.value.toLowerCase();

		//Loop through each filter item
		for (var i = 0; i < filterItems.length; i++) {
			//Hide all items
			filterItems[i].style.display = 'none';

			//Display the items matching the search value
			if (filterItems[i].getAttribute(itemsData).indexOf(searchVal) >= 0) {
				filterItems[i].style.display = displayArr[i];
			}
		}
	};

	window.onload = onLoad();
	
})(window, document);