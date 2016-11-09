"use strict";
/*jshint loopfunc: true */

function populatePage (inventory) {
	console.log("inventory", inventory);
  // Loop over the inventory and populate the page

  for (var i=0; i<inventory.length; i++) {
  	var car =
		`<header class="carHeader">
			<div class="carTitle">${inventory[i].year}<strong>${inventory[i].make}</strong>: ${inventory[i].model}
			</div>
		</header>
		<div class="carDescription">
			<p class="carInfo">${inventory[i].description}</p>
		</div>
		<footer class="carFooter">"Price": ${inventory[i].price}</footer>
		`;

  }

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
console.log("car", car);
