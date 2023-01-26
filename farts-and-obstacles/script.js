// Character class
class Character {
  constructor() {
    this.x = width/2;
    this.y = height - 50;
    this.size = 50;
    this.speed = 5;
    this.farting = false;
  }
  // Method to move the character
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
  }
  // Method to make the character fart
  fart() {
    if (!this.farting && keyIsDown(32)) {
      this.farting = true;
      setTimeout(() => {
        this.farting = false;
      }, 2000);
    }
  }
  // Method to display the character
  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.size, this.size);
    if (this.farting) {
      fill(255, 255, 0);
      ellipse(this.x + this.size/2, this.y, 50, 50);
    }
  }
}

// Obstacle class
class Obstacle {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = 50;
    this.speed = 5;
  }
  // Method to move the obstacle
  move() {
    this.y += this.speed;
  }
  // Method to check if the obstacle hits the character
  hits(character) {
    let d = dist(this.x, this.y, character.x, character.y,this.size);
    if (d < this.size + character.size ) {
      return true;
    } else {
      return false;
    }
  }
  // Method to display the obstacle
  show() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.size, this.size);
  }
}

// Bonus class
class Bonus {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = 25;
    this.speed = 5;
  }
  // Method to move the bonus
  move() {
    this.y += this.speed;
  }
  // Method to check if the bonus is collected by the character
  collected(character) {
    let d = dist(this.x, this.y, character.x, character.y);
    if (d < this.size + character.size) {
      return true;
    } else {
      return false;
    }
  }
  // Method to display the bonus
  show() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

// Global variables
let character;
let obstacles = [];
let bonuses = [];
let score = 0;

function setup() {
  createCanvas(600, 600);
  character = new Character();
}

function draw() {
  background(255);
  // Move and display the character
  character.move();
  character.fart();
  character.show();
  // Move and display the obstacles
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].move();
    obstacles[i].show();
    if (obstacles[i].hits(character)) {
      console.log("Game over!");
    }
  }
  // Move and display the bonuses
  for (let i = 0; i < bonuses.length; i++) {
    bonuses[i].move();
    bonuses[i].show();
    if (bonuses[i].collected(character)) {
      score++;
      bonuses.splice(i, 1);
    }
  }
  // Display the score
  fill(0);
  text("Score: " + score, 10, 20);
  // Create new obstacles and bonuses
  if (frameCount % 60 === 0) {
    obstacles.push(new Obstacle());
  }
  if (frameCount % 120 === 0) {
    bonuses.push(new Bonus());
  }
}

