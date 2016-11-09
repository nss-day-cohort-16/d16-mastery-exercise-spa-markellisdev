"use strict";
/*jshint loopfunc: true */
var CarLot = (function () {
  var inventory = [];


  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "data/inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
      	inventory = JSON.parse(this.responseText).cars;
      	console.log("inventory", inventory);
	  	callback(inventory);
      });
    },
    getInventory: function () {
    	return inventory;
    }
  };
})();
