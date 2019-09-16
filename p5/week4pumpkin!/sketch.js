var rockstarpusheen;
var x = 0;


function setup() {
  // put setup code here
  createCanvas(1200, 1200);
  rockstarpusheen = loadImage("pics/rockstarpusheen.jpg");

}

function draw() {
  // put drawing code here
background (255,182,193) ;
  image(rockstarpusheen,50,50);

push();
translate(x,10);
x++ ;
x += 100;
if (x > width) {
x = 0;

}
bat ();

pop();
}

function mouseReleased() {
  console.log(mouseX + ", " + mouseY);
}

function bat() {
  // bat
  fill(0);
  triangle(372, 108, 358, 76, 352, 114);
  triangle(329, 115, 310, 88, 315, 126);
  ellipse(346, 138, 70, 70);
  quad(356, 120, 397, 75, 435, 103, 359, 132);
  quad(330, 134, 258, 114, 267, 167, 338, 141);
  fill('red');
  ellipse(334, 128, 10, 10);
  ellipse(357, 126, 10, 10);
}
