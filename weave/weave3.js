new p5((p) => {
    let fixed = false;
    let fixedMouseX, fixedMouseY;
  
    p.setup = function() {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };
  
    p.draw = function() {
      let currentMouseX = fixed ? fixedMouseX : p.mouseX;
      let currentMouseY = fixed ? fixedMouseY : p.mouseY;
      p.background(129, 181, 172);
  
      for (let i = 0; i < 100; i++) {
        drawLeftThread(0, -1 + i * 10, currentMouseX + 40, currentMouseY/2);
        drawRightThread(p.width - currentMouseX/4 - 10,-1 + i * 10, currentMouseX + 40, currentMouseY/2);
      }
    }
  
    function drawLeftThread(x, y, w, h) {
      p.stroke(192, 74, 67);
      p.strokeWeight(1);
      p.noFill();
      drawCurve(x, y, w/4, h);
      p.stroke(0, 18, 56);
      drawCurve(x + w/8, y, w/4, h);
      p.stroke(192, 74, 67);
      drawCurve(x + w/4, y, w/4, h);
      drawCurve(x + w/8*3, y, w/4, h);
      p.stroke(0, 18, 56);
      drawCurve(x + w/2, y, w/4, h);
      p.stroke(192, 74, 67);
      drawCurve(x + w/8*5, y, w/4, h);
      drawCurve(x + w/8*6, y, w/4, h);
      p.stroke(0, 18, 56);
      drawCurve(x + w/8*7, y, w/4, h);
      p.stroke(192, 74, 67);
      drawCurve(x + w, y, w/4, h);
    }
  
    function drawRightThread(x, y, w, h) {
      p.stroke(224, 201, 163);
      p.strokeWeight(1);
      p.noFill();
      drawCurve(x, y, w/4, h);
      p.stroke(0, 18, 56);
      drawCurve(x - w/8, y, w/4, h);
      p.stroke(224, 201, 163);
      drawCurve(x - w/4, y, w/4, h);
      drawCurve(x - w/8*3, y, w/4, h);
      p.stroke(0, 18, 56);
      drawCurve(x - w/2, y, w/4, h);
      p.stroke(224, 201, 163);
      drawCurve(x - w/8*5, y, w/4, h);
      drawCurve(x - w/8*6, y, w/4, h);
      p.stroke(0, 18, 56);
      drawCurve(x - w/8*7, y, w/4, h);
      p.stroke(224, 201, 163);
      drawCurve(x - w, y, w/4, h);
    }
  
    function drawCurve(x, y, w, h) {
      p.beginShape();
      p.curveVertex(x, y);
      p.curveVertex(x, y);
      p.curveVertex(x + w / 2, y + h / 2);
      p.curveVertex(x + w, y);
      p.curveVertex(x + w, y);
      p.endShape();
  
      p.beginShape();
      p.curveVertex(x, y + h);
      p.curveVertex(x, y + h);
      p.curveVertex(x + w / 2, y + h / 2);
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
  }, 'sketch-holder-3');
  