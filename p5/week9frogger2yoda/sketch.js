//var myCar1 ;
//var myCar2 ;
//var myCar3 ;
var x = 0;
var velocity = 10;
var cars = [];
var frogpos;
var myState = 0;
var rip;
var mission;
var timer = 0;
var yoda, yodaLeft, yodaRight ;
var bird1;
var birds = [] ;
var song ;

function preload() {
  song = loadSound("assets/duel.mp3") ;

}


function setup() {

  createCanvas(1680, 850);
  //spawn cars
  rectMode(CENTER);
  imageMode(CENTER) ;
  for (var i = 0; i < 10; i++) {

    cars.push(new Car());

  }
  yodaLeft = loadImage("assets/yodaLeft.gif") ;
  yodaRight = loadImage("assets/yodaRight.gif") ;
  yoda = yodaLeft ;
  bird1 = loadImage("assets/bird1.png") ;
  birds[0] =loadImage("assets/bird1.png") ;
  birds[1] =loadImage("assets/bird2.png") ;
  birds[2] =loadImage("assets/bird3.png") ;
  birds[3] =loadImage("assets/tyler1meat.jpg") ;



  frogpos = createVector(width / 2, height / 2);
  rip = loadImage("assets/rip.jpg");
  mission = loadImage("assets/missionpassed.jpg");

  song.play() ;
}


function draw() {

  switch (myState) {

    case 0: // splash screen
      background(255, 255, 224);
      textSize(100);
      text("Welcome to my Game!", width / 2 - 500, height / 2);
      textSize(50);
      text("Click to Start", width / 2 -200, height / 2 + 200);
      break;

    case 1: // the game state
      game();
      timer++;
      if (timer > 10000) {

        myState = 3;
        timer = 0
      }

      break;

    case 2: // the win state
      background(255);
      textSize(300);
      image(mission, width/2, height/2, 1680, 850);


      break;

    case 3: // the lose state

      image(rip, width/2, height/2, 1680, 850);

      break;

  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;



  }

}

function Car() { //can copy and paste this into a class of car that you don't want to collect
  //EX: function EvilCar() {}
  //attribute
  this.pos = createVector(random(width), random(height));
  this.velocity = createVector(random(20, -20), random(30, -50));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = 0 ;
  //can put floor(random(birds.length-1)) ; instead of this birdNum = 0 ;
  this.timer = 0 ;
  this.maxTimer = random(10, 30) ; //this timer is random for the bird speed

  //methods
  this.display = function() {

    // noStroke();
    // fill(this.r, this.g, this.b);
    // rect(this.pos.x, this.pos.y, 160, 40);
    // rect(this.pos.x, this.pos.y - 30, 100, 50);
    // ellipse(this.pos.x - 50, this.pos.y + 20, 40, 40);
    // ellipse(this.pos.x + 50, this.pos.y + 20, 40, 40);
    // fill('white');
    // rect(this.pos.x - 22, this.pos.y - 30, 35, 27);
    // rect(this.pos.x + 22, this.pos.y - 30, 35, 27);
    // ellipse(this.pos.x - 50, this.pos.y + 20, 20, 20);
    // ellipse(this.pos.x + 50, this.pos.y + 20, 20, 20);
    // fill(1);
    // ellipse(this.pos.x - 50, this.pos.y + 20, 5, 5);
    // ellipse(this.pos.x + 50, this.pos.y + 20, 5, 5);




    // textSize(100);
    // text("VROOOOM", this.pos.x, this.pos.y + 100);

    // image(bird1, this.pos.x, this.pos.y, 100, 100) ;

      image(birds[this.birdNum], this.pos.x, this.pos.y, 300, 300) ;

      this.timer++ ;
      if (this.timer > 20) {
        this.birdNum = this.birdNum + 1 ;
        this.timer = 0 ;
      }
      //don't go past array number
      if (this.birdNum > birds.length - 1) {
        this.birdNum = 0 ;

      }



  }


  this.drive = function() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft ;
  if (keyCode === RIGHT_ARROW) yoda = yodaLeft ;
  if (keyCode === UP_ARROW) yoda = yodaRight ;
  if (keyCode === DOWN_ARROW) yoda = yodaRight ;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogpos.x = frogpos.x - 15;
  if (keyIsDown(RIGHT_ARROW)) frogpos.x = frogpos.x + 15;
  if (keyIsDown(UP_ARROW)) frogpos.y = frogpos.y - 15;
  if (keyIsDown(DOWN_ARROW)) frogpos.y = frogpos.y + 15;




}

function resetTheGame() {
  cars = [];
  for (var i = 0; i < 2; i++) {

    cars.push(new Car());


  }
  timer = 0;
  //reset frog.pos
  //reset songs
}

function game() {
  background(255, 20, 147);

  for (var i = 0; i < cars.length; i++) {

    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogpos) < 50) {
      cars.splice(i, 1);

      //death state for function EvilCar () {} myState = 3 after the game function after you copy and paste the new function


    }
  }



  if (cars.length == 0) {
    myState = 2;
  }
  //draw frog
  fill(0, 255, 0);
  image(yoda, frogpos.x, frogpos.y, 700, 700) ;

  checkForKeys();

}
