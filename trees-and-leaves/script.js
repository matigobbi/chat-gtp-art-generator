

function setup() {
    createCanvas(1000, 600);
    tree1 = new Tree(width/4, height/2, 100, 150);
    tree2 = new Tree(width/4*3, height/2, 100, 150);
}

function draw() {
    background(200);
    push();
    translate(tree1.x, tree1.y);
    tree1.show();
 
    pop();

    push();
    translate(tree2.x, tree2.y);
  
    pop();
}

function mouseMoved(){
    shake1 = map(mouseX, 0, width, -0.9, 0.1);
    shake2 = map(mouseY, 0, height, -0.1, 0.1);
    for(let i = 0; i < leaves1.length; i++){
        leaves1[i].update();
    }
    for(let i = 0; i < leaves2.length; i++){
        leaves2[i].update();
    }
}

class Tree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.leaves = [];
  }

  show() {
    // Draw the trunk
    fill(139, 69, 19);
    rect(this.x, this.y, 20, 100);

    // Draw the leaves
    fill(34,139,34);
    ellipse(this.x+10, this.y-50, 100, 100);

    // Draw shining effect
    for (let i = 0; i < 5; i++) {
      fill(255, 255, 255, 50);
      ellipse(this.x + 10 + random(-30, 30), this.y - 50 + random(-30, 30), 10, 10);
    }

    // Draw falling leaves
    for (let leaf of this.leaves) {
      leaf.show();
      leaf.fall();
    }
    if (random(1) < 0.1) {
      this.leaves.push(new Leaf(this.x+10, this.y-50));
    }
  }
}



class Leaf {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.xspeed = random(-1, 1);
      this.yspeed = random(1, 3);
  }

  fall() {
      this.y += this.yspeed;
      this.x += this.xspeed;
  }

  update() {
      this.xspeed = random(-1, 1);
      this.yspeed = random(1, 3);
      this.x = tree1.x + random(-tree1.w / 2, tree1.w / 2);
      this.y = tree1.y - random(0, tree1.h);
  }

  show() {
      noStroke();
      fill(255, 0, 0);
      ellipse(this.x, this.y, 10, 10);
  }
}

