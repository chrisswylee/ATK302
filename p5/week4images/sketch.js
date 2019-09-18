var myFont;
var x = 0;

function preload() {
  myFont = loadFont('assets/ChineseDragon.ttf'); // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800);
}

function draw() {

  background(255, 240, 245);
  fill('#ED225D'); // SETS the color
  textFont(myFont); // SETS the font
  textSize(400); // SETS the size of the font
  text('NI HAO', x, 300); // DISPLAYS TEXT WITH THE FONT
  x = x + 1; // x++

  if (x > width) {
    x = 0
    myfont();

  }

}

function myfont() {}
