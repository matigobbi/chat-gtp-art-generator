/* You can create a gradient effect on the bubbles by using the lerpColor() function to interpolate between two colors based on a parameter that goes from 0 to 1. You can use the dist() function to calculate the distance from the center of the canvas to the center of the bubble, and map this value to the range 0 to 1, this way you get a gradient effect that goes from black to white as you get closer to the corners of the canvas.

Here's an example that demonstrates how you can create an art with lines that move according to the movement of the mouse, change to random color when the mouse is clicked, have a background color that changes every second to random color, bubbles and crowns with random size and position also with random color that goes from black to white close to the corners, and crowns that are randomly placed on the canvas and the canvas size is bigger:

 */


/* In this example, the randomBubbles() function uses the dist() function to calculate the distance from the center of the canvas to the center of the bubble. This distance is mapped to the range 0 to 1, then the lerpColor() function is used to interpolate between the color black and white based on this value.
This way you get a gradient effect that goes from black to white as you get closer to the corners of the canvas. Also, bubbles positions, sizes and colors are random.
The crowns keep the random color effect.
You can experiment with

 */

let previousX, previousY;
let intervalId;
let bubbleX, bubbleY;

function setup() {
  createCanvas(800, 600);
  intervalId = setInterval(changeBackground, 1000);
  strokeWeight(2);
  noStroke();
  bubbleX = mouseX;
  bubbleY = mouseY;
}

function changeBackground(){
  background(random(255), random(255), random(255));
}

function draw() {
  if (mouseIsPressed) {
    stroke(random(255), random(255), random(255));
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  movingBubbles();
  randomCrowns();
}


  function movingBubbles(){
    let d = dist(width/2, height/2, bubbleX, bubbleY);
    let colorRatio = map(d, 0, dist(0, 0, width/2, height/2), 0, 1);
    let c1 = color(0, 0, 0);
    let c2 = color(255, 255, 255);
    let c = lerpColor(c1, c2, colorRatio);
    fill(c);
    ellipse(bubbleX, bubbleY, random(30, 80));
    
    bubbleX = lerp(bubbleX, mouseX, 0.1);
    bubbleY = lerp(bubbleY, mouseY, 0.1);
  }
  
  function randomCrowns(){
    fill(random(255),random(255),random(255));
    for (let i = 0; i < random(10); i++) {
      arc(random(width), random(height), random(50, 100), random(50, 100), QUARTER_PI, TWO_PI - QUARTER_PI, OPEN);
    }
  }