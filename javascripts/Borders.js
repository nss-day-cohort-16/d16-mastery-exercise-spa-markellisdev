"use strict";
/*jshint loopfunc: true */
var CarLot = (function (Carlot) {
  var inventory = [];


  function borderBG (event, color) {
      // change the width of the border to a higher value
      var border = event.currentTarget;
      border.classList.toggle("strongBorder");
      // change the background color to any other color of your choosing
      var backColor = event.currentTarget;
      backColor.classList.toggle("greybcg");

      var clicked = event.currentTarget.querySelector(".bio")
      // clear the value of the text input in the navbar
      document.getElementById("textIn").value = "";
      // put the [cursor in the text input]
      document.getElementById("textIn").focus();


    }

    function borderReset (event) {

      var border = event.currentTarget;
      border.classList.toggle("strongBorder");

      var backColor =event.currentTarget;
      backColor.classList.toggle("greybcg");

    }
  return CarLot;

})(CarLot || {});