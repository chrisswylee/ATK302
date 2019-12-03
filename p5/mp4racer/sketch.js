// Landscape Example
// Coding for Artists - 2019
// Instructor: Urban Reininger
var myState = 0;
var tree1, tree2; //Chris
var sign1, sign2; //Chris
var retroracer; //Chris
var song1; //Chris
var daysunpos = 200;
var nightsunpos = 200;
var cars = [];
var timer = 0;
var carPos;



function preload() {
  song1 = loadSound("assets/lazerhawk.mp3"); //Chris song1

}

function setup() {


  tree1 = loadImage("assets/tree.png");
  tree2 = loadImage("assets/treesmall.png");
  sign1 = loadImage("assets/sign.png");
  sign2 = loadImage("assets/signsmall.png");
  retroracer = loadImage("assets/retroracer.png");

  imageMode(CENTER);


  createCanvas(windowWidth, windowHeight);

  // for (var i = 0; i < 5; i++) {
  //
  //   cars.push(new Car());
  //
  // }



  carPos = createVector(709, 600);


} // end setup


function draw() {




  switch (myState) {
    case 0:


      break;

    case 1:
      push();

      nighttime();

      pop();

      timer++;
      if (timer > 100) {
        cars.push(new Car());
        timer = 0;
      }
      for (var i = 0; i < cars.length; i++) { // Chris DRIVE

        cars[i].display();
        cars[i].drive();

        if (cars[i].pos.y > height) {

          cars.splice(i, 1);


        }
      }
      image(retroracer, carPos.x, carPos.y, 500 * carPos.y / 600, 500 * carPos.y / 560);
      checkForKeys();
      break;

    case 2:
      daylight();

      break;

    case 3:

      break;

    case 4:

      break;


  }
}



function mouseReleased() {
  myState++;
  daysunpos = 200;
  nightsunpos = 200;
  if (myState > 2) myState = 0;
}

function mouseLocation() {
  fill(255);
  text(("x: " + mouseX), 20, 10);
  text(("y: " + mouseY), 20, 20);
} // end mouseLocation

function Car() {
  //attribute

  if (random(2) > 1) {
    this.pos = createVector(random(700, 800), 235);
    this.velocity = createVector(random(-1, -1), random(1, 1));
  } else {
    this.pos = createVector(random(1400, 1300), 235);
    this.velocity = createVector(random(5, 5), random(1, 1));

  }
  //   if (this.pos.x < 640) {
  //
  // } else {
  //
  //   this.velocity = createVector(random(1, 5), random(1, 5)) ;
  // }



  //methods
  this.display = function() {

    //
    // fill(this.r, this.g, this.b) ;
    // rect(this.pos.x, this.pos.y, 100, 100) ;
    image(tree1, this.pos.x, this.pos.y, 300 * this.pos.y / 80, 800 * this.pos.y / 250);




  }

  this.drive = function() {
    this.pos.add(this.velocity);
    // if (this.pos.x > width) this.pos.x = 0 ;
    // if (this.pos.x < 0) this.pos.x = width ;
    //if (this.pos.y > height) this.pos.y = 350;

  }

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) carPos.x = carPos.x - 15;
  if (keyIsDown(RIGHT_ARROW)) carPos.x = carPos.x + 15;


  if ((keyIsDown(UP_ARROW)) && (carPos.y > 325)) {
    carPos.y = carPos.y - 15;
  }

  if ((keyIsDown(DOWN_ARROW)) && (carPos.y < height - 30)) {
    carPos.y = carPos.y + 15;

  }






}
