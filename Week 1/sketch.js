function setup() {
  createCanvas(800, 400);
  background(208);
}

function draw() {

fill(0, 204, 0);
ellipse(400, 115, 170, 100);
//this is the head
fill(255);
ellipse(375, 67, 30, 30);
//this is the left eye
fill(255);
ellipse(425, 67, 30, 30);
//this is the right eye
fill(0);
ellipse(375, 67, 10, 10);
//this is the left pupil
ellipse(425, 67, 10, 10);
//this is the right pupil
fill(255, 0, 102);
ellipse(400, 120, 100, 34);
//this is the mouth
}
