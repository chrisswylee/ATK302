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

function setup() {

  createCanvas(1680, 850);
  //spawn cars
  rectMode(CENTER);
  for (var i = 0; i < 2; i++) {

    cars.push(new Car());

  }

  frogpos = createVector(width / 2, height / 2);
  rip = loadImage("assets/rip.jpg");
  mission = loadImage("assets/missionpassed.jpg");
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
      if (timer > 2000) {
        myState = 3;
        timer = 0
      }

      break;

    case 2: // the win state
      background(255);
      textSize(300);
      image(mission, 0, 0, 1680, 850);


      break;

    case 3: // the lose state

      image(rip, 0, 0, 1680, 850);

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

function Car() {
  //attribute
  this.pos = createVector(random(width), random(height));
  this.velocity = createVector(random(20, -20), random(30, -50));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {

    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 160, 40);
    rect(this.pos.x, this.pos.y - 30, 100, 50);
    ellipse(this.pos.x - 50, this.pos.y + 20, 40, 40);
    ellipse(this.pos.x + 50, this.pos.y + 20, 40, 40);
    fill('white');
    rect(this.pos.x - 22, this.pos.y - 30, 35, 27);
    rect(this.pos.x + 22, this.pos.y - 30, 35, 27);
    ellipse(this.pos.x - 50, this.pos.y + 20, 20, 20);
    ellipse(this.pos.x + 50, this.pos.y + 20, 20, 20);
    fill(1);
    ellipse(this.pos.x - 50, this.pos.y + 20, 5, 5);
    ellipse(this.pos.x + 50, this.pos.y + 20, 5, 5);




    textSize(100);
    text("VROOOOM", this.pos.x, this.pos.y + 100);

  }

  this.drive = function() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

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


    }
  }



  if (cars.length == 0) {
    myState = 2;
  }
  //draw frog
  fill(0, 255, 0);
  ellipse(frogpos.x, frogpos.y, 50, 40);
  ellipse(frogpos.x - 20, frogpos.y + 10, 10, 10);
  ellipse(frogpos.x + 20, frogpos.y + 10, 10, 10);
  fill(1);
  ellipse(frogpos.x - 20, frogpos.y - 10, 10, 10);
  ellipse(frogpos.x + 20, frogpos.y - 10, 10, 10);
  ellipse(frogpos.x, frogpos.y, 25, 8);
  rect(frogpos.x, frogpos.y - 80, 30, 100);
  rect(frogpos.x, frogpos.y - 25, 50, 10);

  checkForKeys();

}
