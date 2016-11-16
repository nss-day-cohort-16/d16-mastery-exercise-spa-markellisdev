"use strict";
/*jshint loopfunc: true */
var CarLot = (function (CarLot) {


  CarLot.activateEvents = function(inventory) {
  // var activateEvents; //Will be function to hold everything
    let cardDivNum = inventory.length;
    let cardDiv = document.getElementsByClassName("col-sm-3");
    let input = document.getElementById("textIn");
  // for loop to add event listeners
    for (var i=0; i<cardDivNum; i++) {
      cardDiv[i].id = i+1;
      cardDiv[i].addEventListener("click", function(event) {
        CarLot.borderBG(event);
        CarLot.clickToType(event);
      });
    }
    //Event listener for input
    CarLot.clickToType = function (event) {
      let typeArea = event.currentTarget.querySelector("p");
      input.addEventListener("keydown", function(event) {
      typeArea.innerHTML = document.getElementById("textIn").value;
      });
    };
  };


  return CarLot;
})(CarLot || {});
