// Scene class to handle background drawing
class Scene {
    constructor(w, h) {
      this.buffer = createGraphics(w, h);
      this.drawGradient();
    }
  
    drawGradient() {
      let c1 = color(255);
      let c2 = color(100, 160, 255);
      this.buffer.noFill();
      for (let y = 0; y < this.buffer.height; y++) {
        let inter = map(y, 0, this.buffer.height, 0, 1);
        this.buffer.stroke(lerpColor(c1, c2, inter));
        this.buffer.line(0, y, this.buffer.width, y);
      }
    }
  
    displayBackground() {
      push();
      texture(this.buffer);
      plane(width, height);
      pop();
    }
  }