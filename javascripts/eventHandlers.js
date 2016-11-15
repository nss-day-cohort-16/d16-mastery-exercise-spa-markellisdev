"use strict";
/*jshint loopfunc: true */

var CarLot = (function (Carlot) {


  Carlot.activateEvents = function(inventory) {
  // var activateEvents; //Will be function to hold everything
    let cardDivNum = inventory.length;
    let cardDiv = document.getElementsByClassName("col-sm-3");
    let input = document.getElementById("textIn");

    //Event listener for input
    input.addEventListener("keyup", Carlot.clickToType);

    for (var i=0; i<cardDivNum; i++) {
      console.log("Anyone here in activate Events for loop?");

      cardDiv[i].id = i+1;
      cardDiv[i].addEventListener("click", Carlot.borderBG);
      cardDiv[i].addEventListener("click", Carlot.clickToType);




    }
  };


  return CarLot;
})(CarLot || {});
