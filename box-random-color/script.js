
let colors = [  "#ff0000",  "#00ff00",  "#0000ff",  "#ffff00",  "#00ffff",  "#ff00ff"];

function setup() {
  createCanvas(1800, 900);
}

function draw() {
  background(255);
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(i * (width / colors.length), 0, width / colors.length, height);
  }
}

function mouseMoved() {
  for (let i = 0; i < colors.length; i++) {
    if (mouseX > i * (width / colors.length) && mouseX < i * (width / colors.length) + (width / colors.length)) {
      colors[i] = "#" + Math.floor(random(16777215)).toString(16);
    }
  }
}

