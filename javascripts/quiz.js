"use strict";
/*jshint loopfunc: true */

function populatePage (inventory) {
	console.log("inventory inside populatePage", inventory);
  // Loop over the inventory and populate the page
  	var arrayLength = inventory.length;

  	for (var i=0; i<arrayLength; i++) {
  		console.log("inventory length", arrayLength);

//Add all properties inside car variable
  		var car =
	  		`<header class="carTitle">${inventory[i].year}<strong>${inventory[i].make}</strong>: ${inventory[i].model}
			</header>
			<div class="carDescription">
				<p class="carInfo">${inventory[i].description}</p>
			</div>
			<footer class="carFooter">"Price": ${inventory[i].price}</footer>
			</div>`;

// Create card divs to contain each cars information
		var cardDiv = document.createElement("div");
		cardDiv.setAttribute("class", "col-md-3 col-md-offset-1");
		cardDiv.innerHTML = car;

// Create row for each set of 3 cards
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


	}

	document.getElementById("container").appendChild(cardRow);
	document.getElementById("cardRow").append(cardDiv);



  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

