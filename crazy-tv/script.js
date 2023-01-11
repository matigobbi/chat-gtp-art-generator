let intervalId;

function setup() {
  createCanvas(400, 400);
  noStroke();
  intervalId = setInterval(changeBackground, 1000);
}

function changeBackground(){
  background(random(255), random(255), random(255));
}

function draw() {
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      fill(random(255), random(255), random(255));
      rect(x, y, 20, 20);
    }
  }
}