"use strict";
/*jshint loopfunc: true */

var CarLot = (function (Carlot) {


  Carlot.activateEvents = function(inventory) {
  // var activateEvents; //Will be function to hold everything
    console.log("event handlers", inventory);
    let cardDivNum = inventory.length;
    let cardDiv = document.getElementsByClassName("col-sm-3");

    for (var i=0; i<cardDivNum; i++) {

    console.log("event handlers", cardDivNum);
    console.log("cardDiv i", cardDiv[i]);

      let elementChange = event.currentTarget;

      let elementReset = event.currentTarget;

      let clickToType = event.currentTarget.querySelector("p");

      cardDiv[i].id = i+1;
      cardDiv[i].addEventListener("click", borderBG);

      cardDiv[i].addEventListener("keyup", clickToType.innerHTML)

    }
  }

  CarLot.borderBG();

  Carlot.borderReset();

  return CarLot;
})(CarLot || {});
