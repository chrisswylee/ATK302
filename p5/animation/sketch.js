var x = 0 ;
var y = 3 ;
var z = 2 ;

function setup() {
  // put setup code here
createCanvas(300,300);



}

function draw() {
  // put drawing code here
background(255,228,225);
rect(x,150,10,10);
x += 20 ;
if (x > width) {
  x = 0 ;
}
ellipse(width/2,y,15,100);
y += 5 ;
if (y > height) {
  y = 3 ;
}
rect(z,69,20,20,);
z += 15 ;
if (z > width) {
  z = 2 ;
}


}
