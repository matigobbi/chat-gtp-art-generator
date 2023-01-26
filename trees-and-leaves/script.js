class Cloud {
  constructor() {
    this.x = random(width);
    this.y = random(height/2);
    this.size = random(50, 150);
  }

  show() {
    noStroke();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.size);
    ellipse(this.x + this.size/4, this.y - this.size/8, this.size/2);
    ellipse(this.x - this.size/4, this.y - this.size/8, this.size/2);
  }
}

let clouds = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    clouds.push(new Cloud());
  }
}

function draw() {
  background(135,206,235);
  for (let cloud of clouds) {
    cloud.show();
  }
}
