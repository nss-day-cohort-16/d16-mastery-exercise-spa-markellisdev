"use strict";
/*jshint loopfunc: true */

var CarLot = (function(CarLot) {

	function populatePage (inventory) {
			console.log("inventory inside populatePage", inventory);

	  	var arrayLength = inventory.length;
	  	var toAppend = "";
		var rowOpen = "";
		var rowClose = "";

// For loop over inventory to create rows and cards and then populate page

	  	for (var i=0; i<arrayLength; i++) {

  		// Open row

			if (i===0 || i % 3 === 0) {
		  		toAppend += `<div class="row">`;
			}

		// Add all inventory properties inside toAppend variable

	  		toAppend +=
		  		`<div class="col-sm-3 col-sm-offset-1">
			  		<header class="carTitle">${inventory[i].year}<strong>${inventory[i].make}</strong>: ${inventory[i].model}
					</header>
					<div class="carDescription">
						<p id="info" class="carInfo">${inventory[i].description}</p>
					</div>
					<footer class="carFooter">"Price": ${inventory[i].price}</footer>
				</div>`;

		// Close row

			if (i % 3 === 2) {
				toAppend += `</div>`;
			}

		}

		document.getElementsByClassName("container")[0].innerHTML = toAppend;
		CarLot.activateEvents(inventory);
	}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

})(CarLot || {});
