var square1 = document.querySelector(".square1");
var square2 = document.getElementsByClassName("square2");
var square3 = document.getElementsByClassName("square3");
var square4 = document.getElementsByClassName("square4");
var square5 = document.getElementsByClassName("square5");

addEventListener("click", colorize);

function colorize() {
  var randomColor = getRandomColor();

  for (var i = 0; i < square5.length; i++) {
    square5[i].style.backgroundColor = square4[0].style.backgroundColor;
  }

  for (var i = 0; i < square4.length; i++) {
    square4[i].style.backgroundColor = square3[0].style.backgroundColor;
  }

  for (var i = 0; i < square3.length; i++) {
    square3[i].style.backgroundColor = square2[0].style.backgroundColor;
  }

  for (var i = 0; i < square2.length; i++) {
    square2[i].style.backgroundColor = square1.style.backgroundColor;
  }

  square1.style.backgroundColor = randomColor;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
