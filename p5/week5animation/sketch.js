var x = 0;
var myFont ;


function preload() {
  myFont = loadfont ('assets/miss_rhinetta.ttf') ;

}
function setup() {
  // put setup code here
  createCanvas(1000, 1000);


}

function draw() {
  // put drawing code here

  background(240, 255, 240);
  fill('#ED225D'); // SETS the color
  textFont(myFont); // SETS the font
  textSize(400); // SETS the size of the font
  text('NI HAO', x, 300); // DISPLAYS TEXT WITH THE FONT
  x = x + 1; // x++

  if (x > width) {
    x = 0
    

  }





  fill(255, 192, 203);
  rect(x, 10, 40, 40);
  x += 100 ;
if (x > width) {
  x = 0 ;


}






}
