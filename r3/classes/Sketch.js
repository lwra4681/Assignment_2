// Sketch class for each loaded file
class Sketch {
    constructor(filename, color) {
      this.table = loadTable("assets/" + filename, "csv", "header");
      this.color = color;
      this.points = [];
      this.minX = 0;
      this.maxX = 200;
      this.minY = 0;
      this.maxY = 200; 
    }
  
    loadPoints() {
      this.points = []; // Clear previous points
      for (let i = 0; i < this.table.getRowCount(); i++) {
        let row = this.table.getRow(i);
        let id = row.getNum('Point #');
        let x = row.getNum('X');
        let y = row.getNum('Y');
        let adjustedX = map(x, this.minX, this.maxX, -width / 2 + 100, width / 2 - 100);
        let adjustedY = map(y, this.minY, this.maxY, height / 2 - 100, -height / 2 + 100);
        this.points.push(new Point(id, adjustedX, adjustedY));
      }
    }
  
    animateOscillation(offsetX = 0, oscillationSpeed = 50) {
      push();
      let oscillation = sin(frameCount * 0.05) * oscillationSpeed*height/1000;
      translate(offsetX, oscillation, 200);
      this.connectPoints();
      pop();
    }
  
    animateRotation(x, y, z, rotationAmt, speed, direction = 1, phase = 1) {
      push();
      translate(x, y, z);
      rotateX(direction * sin(frameCount * speed) * rotationAmt - (PI / 2 * phase));
      this.connectPoints();
      pop();
    }
  
    connectPoints() {
      // stroke(60,60,60,0.5)
      fill(this.color[0]*255, this.color[1] * 255, this.color[2] * 255, this.color[3] * 255 || 255);
      
      beginShape();
      for (let i = 0; i < this.points.length; i++) {
        let p = this.points[i].position;
        vertex(p.x, p.y, p.z); // Directly use point coordinates without offsets
      }
      endShape(CLOSE); // Close the last shape
    }
    
  }