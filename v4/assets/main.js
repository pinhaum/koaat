let angle = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  // angleMode(DEGRESS);
  stroke(35);
  strokeWeight(5);
}

function draw() {
  background(35);

  translate(width / 2, height / 2);

  for (let i = 0; i < 100; i++) {
    rect(0, 0, 600, 600);
    scale(0.95);
    rotate(angle);
  }

  angle += 0.001;
}
