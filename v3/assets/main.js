var interval = 0;
var square1 = document.querySelector(".square1");
var square2 = document.getElementsByClassName("square2");
var square3 = document.getElementsByClassName("square3");
var square4 = document.getElementsByClassName("square4");
var square5 = document.getElementsByClassName("square5");

var colors = [
  "#ff0000",
  "#ff9800",
  "#f6ff00",
  "#90ff00",
  "#00ff7e",
  "#00b6ff",
  "#0024ff",
  "#8500ff",
  "#ff00db",
  "#4e4e4e",
];

setInterval(() => {
  colorize(interval);
  interval++;
  if (interval >= colors.length) interval = 0;
}, 500);

function colorize(interval) {
  setTimeout(() => {
    for (var i = 0; i < square5.length; i++) {
      square5[i].style.backgroundColor = square4[0].style.backgroundColor;
    }
  }, 250);

  setTimeout(() => {
    for (var i = 0; i < square4.length; i++) {
      square4[i].style.backgroundColor = square3[0].style.backgroundColor;
    }
  }, 250);

  setTimeout(() => {
    for (var i = 0; i < square3.length; i++) {
      square3[i].style.backgroundColor = square2[0].style.backgroundColor;
    }
  }, 250);

  setTimeout(() => {
    for (var i = 0; i < square2.length; i++) {
      square2[i].style.backgroundColor = square1.style.backgroundColor;
    }
  }, 250);

  square1.style.backgroundColor = colors[interval];
}
