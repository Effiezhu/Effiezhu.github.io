let sketch2 = function(p) {
    let fixed = false;
    let fixedMouseX;
    let fixedMouseY;
    let bg;
  
    p.setup = function() {
      let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('sketch-holder-2');
      bg = p.loadImage('assets/weave bg.png', img => {
        console.log("Image loaded");
      }, err => {
        console.error("Error loading image: ", err);
      });
    }
  
    p.draw = function() {
      p.background(129, 181, 172); // Light Cyan
      p.image(bg, 0, 0, p.windowWidth, p.windowHeight);
      let currentMouseX = fixed ? fixedMouseX : p.mouseX;
      let currentMouseY = fixed ? fixedMouseY : p.mouseY;
      for (let i = 0; i < 80; i++) {
        drawLeftThread(0, -100 + i * 15, currentMouseX, 50);
        drawRightThread(p.width - currentMouseX/2, -100 + i * 15, currentMouseX, 50);
      }
    }
  
    function drawLeftThread(x, y, w, h) {
      p.strokeWeight(1);
      p.noFill();
      for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
          p.stroke(192, 74, 67); // Red
        } else {
          p.stroke(0, 18, 56); // Dark Blue
        }
        drawCurve(x + w/8 * i, y, w/2, h);
      }
    }
  
    function drawRightThread(x, y, w, h) {
      p.strokeWeight(1);
      p.noFill();
      for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
          p.stroke(224, 201, 163); // Light Yellow
        } else {
          p.stroke(0, 18, 56); // Dark Blue
        }
        drawCurve(x - w/8 * i, y, w/2, h);
      }
    }
  
    function drawCurve(x, y, w, h) {
      let d = p.dist(p.mouseY, p.mouseY, y, y);
      let newY = y + d/4;
      p.beginShape();
      p.curveVertex(x, y);
      p.curveVertex(x, y);
      p.curveVertex(x + w / 2, newY);  // Use the adjusted y coordinate
      p.curveVertex(x + w, y);
      p.curveVertex(x + w, y);
      p.endShape();
  
      p.beginShape();
      p.curveVertex(x, y + h);
      p.curveVertex(x, y + h);
      p.curveVertex(x + w / 2, newY);  // Use the adjusted y coordinate
      p.curveVertex(x + w, y + h);
      p.curveVertex(x + w, y + h);
      p.endShape(); 
    }
  
    p.mouseClicked = function() {
      if (fixed) {
        fixed = false;
      } else {
        fixed = true;
        fixedMouseX = p.mouseX;
        fixedMouseY = p.mouseY;
      }
    }
  }
  
  new p5(sketch2);
  