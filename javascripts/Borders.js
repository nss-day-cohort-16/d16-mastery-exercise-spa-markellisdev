"use strict";
/*jshint loopfunc: true */
var CarLot = (function (CarLot) {
  var inventory = [];


  CarLot.borderBG = function (event, color) {
    console.log("anything in border function?");

      let i = event.currentTarget.id;
      console.log("current target id", i);

      let cars = document.getElementsByClassName("col-sm-3");
      for(var x = 0; x < cars.length; x ++) {

        if ((x + 1) == i) {

        // change the width of the border to a higher value
        var border = event.currentTarget;
        border.classList.add("strongBorder");
        // change the background color to any other color of your choosing
        var backColor = event.currentTarget;
        backColor.classList.add("greybcg");

        var clicked = event.currentTarget.querySelector(".bio");
        // clear the value of the text input in the navbar
        document.getElementById("textIn").value = "";
        // put the [cursor in the text input]
        document.getElementById("textIn").focus();


        } else {

        cars[x].classList.remove("strongBorder");


        cars[x].classList.remove("greybcg");


        }
        }

    CarLot.clickToType = function (event) {



      let typeArea = event.currentTarget.querySelector("p");
      console.log("are you there", typeArea);
      console.log(document.getElementById("textIn") );
      typeArea.innerHTML = document.getElementById("textIn").value;

      };

  };
  return CarLot;

})(CarLot || {});
