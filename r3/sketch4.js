// TO DO / other updates:
//    - change colour codes to RGB (255 range)
//    - comment the rest of the code
//    - auto re-sizing (DONE)


let sketches = [];
let olive = [0.50, 0.7, 0.5, 1];
let white = [1, 1, 1, 1];
let scene;


let aspectRatio = 1 / 1; // Fixed aspect ratio
let minWidth = 600;   // Minimum width
let minHeight = 600;  // Minimum height
let maxWidth = 900;  // Maximum width
let maxHeight = 900;   // Maximum height

function preload() {
  sketches.push(new Sketch("body.csv", [1, 1, 1, 1]));
  sketches.push(new Sketch("Rwing.csv", [1, 1, 1, 1]));
  sketches.push(new Sketch("Lwing.csv", [1, 1, 1, 0.8]));
  sketches.push(new Sketch("eye.csv", [0.6, 0.6, 0.6, 0.5]));
  sketches.push(new Sketch("branch.csv", olive));
  sketches.push(new Sketch("leaf1.csv", olive));
  sketches.push(new Sketch("leaf2.csv", olive));
  sketches.push(new Sketch("leaf3.csv", olive));
  sketches.push(new Sketch("leaf4.csv", olive));
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
  scene = new Scene(width, height);
  
  // load All Sketch Points
  sketches.forEach(sketch => sketch.loadPoints());
}

function draw() {
  // windowResized(); // Call windowResized at the beginning of draw
  scene.displayBackground();

  sketches[0].animateOscillation(0, 50); 
  sketches[3].animateOscillation(0, 50);
  sketches[4].animateOscillation(0, 50);
  sketches[5].animateOscillation(0, 50);
  sketches[6].animateOscillation(0, 50);
  sketches[7].animateOscillation(0, 50);
  sketches[8].animateOscillation(0, 50);

  sketches[1].animateRotation(80, 50, 200, PI / 4, 0.05);
  sketches[2].animateRotation(0, 40, 220, PI / 4, 0.05, -1, -1);
}

function windowResized() {
  // Calculate new dimensions based on aspect ratio
  let newWidth = windowWidth;
  let newHeight = newWidth / aspectRatio;

  // Ensure that the new dimensions respect the aspect ratio and limits
  if (newHeight > maxHeight) {
    newHeight = maxHeight;
    newWidth = newHeight * aspectRatio;
  } else if (newWidth < minWidth) {
    newWidth = minWidth;
    newHeight = newWidth / aspectRatio;
  }

  resizeCanvas(newWidth, newHeight);
  scene = new Scene(newWidth, newHeight); // Create new scene with updated dimensions
  sketches.forEach(sketch => sketch.loadPoints()); // Reload points for all sketches
}






