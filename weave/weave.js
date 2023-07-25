/*
Put all of these compositions on a website
condider when mouse out, show another composition
consider add a subtle image behind the teal, maybe a close shot of wave?

andreas gursky
*/

let fixed = false;
let fixedMouseX;
let fixedMouseY;
let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //bg = loadImage('assets/weave bg.png'); 
  bg = loadImage('assets/weave bg.png', img => {
    console.log("Image loaded");
  }, err => {
    console.error("Error loading image: ", err);
  });
  
}

function draw() {
  background(129, 181, 172); // Light Cyan
  image(bg, 0, 0, windowWidth, windowHeight);
  let currentMouseX = fixed ? fixedMouseX : mouseX;
  let currentMouseY = fixed ? fixedMouseY : mouseY;
  for (let i = 0; i < 110; i++) {
    drawLeftThread(0, -100 + i * 15, currentMouseX, 50);
    drawRightThread(width - currentMouseX/2, -100 + i * 15, currentMouseX, 50);
  }
}

function drawLeftThread(x, y, w, h) {
  strokeWeight(1);
  noFill();
  for (let i = 0; i < 12; i++) {
    if (i % 2 == 0) {
      stroke(192, 74, 67); // Red
    }
    else {
      stroke(0, 18, 56); // Dark Blue
    }
    drawCurve(x + w/8 * i, y, w/2, h);
  }
}

  
function drawRightThread(x, y, w, h) {
  strokeWeight(1);
  noFill();
  for (let i = 0; i < 12; i++) {
    if (i % 2 == 0) {
      stroke(224, 201, 163); // Light Yellow
    }
    else {
      stroke(0, 18, 56); // Dark Blue
    }
    drawCurve(x - w/8 * i, y, w/2, h);
  }
}

function drawCurve(x, y, w, h) {
  // Calculate the distance between the cursor and the top point of the curve
  let d = dist(mouseX, mouseY, x, y);

  // Use the distance to affect the y coordinate of the top point of the curve
  let newY = y + d/4;
  beginShape();
  curveVertex(x, y);
  curveVertex(x, y);
  curveVertex(x + w / 2, newY);  // Use the adjusted y coordinate
  curveVertex(x + w, y);
  curveVertex(x + w, y);
  endShape();

  beginShape();
  curveVertex(x, y + h);
  curveVertex(x, y + h);
  curveVertex(x + w / 2, newY);  // Use the adjusted y coordinate
  curveVertex(x + w, y + h);
  curveVertex(x + w, y + h);
  endShape(); 
}


function mouseClicked() {
  if (fixed) {
    fixed = false;
  } else {
    fixed = true;
    fixedMouseX = mouseX;
    fixedMouseY = mouseY;
  }
}