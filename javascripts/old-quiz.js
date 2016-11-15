"use strict";
/*jshint loopfunc: true */

var CarLot = (function(CarLot) {

function populatePage (inventory) {
		console.log("inventory inside populatePage", inventory);
	  // Loop over the inventory and populate the page
	  	var arrayLength = inventory.length;
	  	var toAppend = "";
		var rowOpen = "";
		var rowClose = "";


	  	for (var i=0; i<arrayLength; i++) {
	  		console.log("inventory length", arrayLength, inventory[i]);

			if (i===0 || i % 3 === 0) {
		  		toAppend += `<div class="row">`;
			}
	//Add all properties inside car variable
	//Need to rewrite this as an array to capture multiple cars, as per find by Casey and Meg

	  		toAppend +=
		  		`<div class="col-sm-3 col-sm-offset-1">
			  		<header class="carTitle">${inventory[i].year}<strong>${inventory[i].make}</strong>: ${inventory[i].model}
					</header>
					<div class="carDescription">
						<p class="carInfo">${inventory[i].description}</p>
					</div>
					<footer class="carFooter">"Price": ${inventory[i].price}</footer>
				</div>`;

			if (i % 3 === 2) {
				toAppend += `</div>`;
			}
			// debugger;



	/* ----Original way I was creating cards and rows, which worked, but only created last card; was replacing card info each time through loop.

	Create card divs to contain each cars information
			var cardDiv;
			cardDiv += document.createElement("div");
			cardDiv.setAttribute("class", "col-md-3 col-md-offset-1");
			cardDiv.innerHTML += car;
			cardDiv.id += i;

	Create row for each set of 3 cards
			if ((i + 1) % 2 === 0) {
				console.log("arrayLength in row loop", i);
				var cardRow = document.createElement("div");
				cardRow.setAttribute("class", "row");
				cardRow.setAttribute("id", "cardRow");
			}

			cardDiv.addEventListener("click", function(event) {
				// change the width of the border to a higher value
				var border = event.currentTarget;
				border.classList.toggle("strongBorder");
				// change the background color to any other color of your choosing
				var backColor = event.currentTarget;
				backColor.classList.toggle("greybcg");
				// clear the value of the text input in the navbar
				document.getElementById("textIn").value = "";
				// put the [cursor in the text input]
				document.getElementById("textIn").focus();
			});
	*/

		}

		document.getElementsByClassName("container")[0].innerHTML = toAppend;





	}


// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

})(CarLot || {});



// IIFE AUGMENTERS ----------------------
//
  // Now that the DOM is loaded, establish all the event listeners needed
// var CarLot = (function() {

// 	activateEvents = function(d) {
// 		for (var i=0; i<)
// 		document.getElementById("")
// 	};
// })();

// var CarLot = (function() {
// 	cardChange = function() {
// 		// change the width of the border to a higher value
// 		var border = event.currentTarget;
// 		border.classList.toggle("strongBorder");
// 		// change the background color to any other color of your choosing
// 		var backColor = event.currentTarget;
// 		backColor.classList.toggle("greybcg");
// 		// clear the value of the text input in the navbar
// 		document.getElementById("textIn").value = "";
// 		// put the [cursor in the text input]
// 		document.getElementById("textIn").focus();
// 	};
// })();
