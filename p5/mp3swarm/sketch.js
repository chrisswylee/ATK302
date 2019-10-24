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
var song1, song2, song3 ;
var home;
var galaxy ;

function preload() {
  song1 = loadSound("assets/masked1.mp3") ;
  song2 = loadSound("assets/stageclear.mp3");
  song3 = loadSound("assets/death.mp3") ;
}


function setup() {

  yodaLeft = loadImage("assets/kirbystarleft.png") ;
  yodaRight = loadImage("assets/kirbystarright.png") ;
  yoda = yodaLeft ;
  bird1 = loadImage("assets/dddmemearray.png") ;
  birds[0] =loadImage("assets/dddwhack2.png") ;
  birds[1] =loadImage("assets/dededesaiyanarray.png") ;
  birds[2] =loadImage("assets/dddmemearray.png") ;
  birds[3] =loadImage("assets/derpydarray.png") ;
  home = loadImage("assets/kirbyhome.jpg") ;
  galaxy = loadImage("assets/kirbygalaxy.jpg") ;

  frogpos = createVector(width / 2, height / 2);
  rip = loadImage("assets/dddmeme2.jpg");
  mission = loadImage("assets/kirbywinstate.jpg");


  createCanvas(1680, 850);
  //spawn cars
  rectMode(CENTER);
  imageMode(CENTER) ;
  for (var i = 0; i < 200; i++) {

    cars.push(new Car());

  }


}


function draw() {

  switch (myState) {

    case 0: // splash screen
      background(255, 255, 224);
      image(home, width/2, height/2, 1680, 850) ;
      image(rip, width/2, height/2, 200, 200) ;
      fill(1) ;
      textSize(150);
      text("Kirby needs your help!", width / 2 - 720, height / 2 -100);
      textSize(100);
      text("Run King DeDeDe over to win.", width/2 - 710, height/2 + 150);
      text("Click to Start ;)", x, height / 2 + 300);

      x++ ;
      if (x > width) {
        x = 0 ; 
      }

      break;

    case 1: // the game state

      game();
      timer++;
      if (timer > 3100) {

        myState = 3;
        timer = 0
      }

      break;

    case 2: // the win state
      background(255);

      image(mission, width/2, height/2, 1680, 850);


      break;

    case 3: // the lose state

      image(rip, width/2, height/2, 1680, 850);
      textSize(300) ;
      fill(1) ;
      text("LOSER!!!", width/2 -680, height/2 ) ;
      textSize(159) ;
      text("Try Again...Click.", width/2 - 680, height/2 + 200)

      break;

  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
    song1.play();
      myState = 1;
      break;

    case 2:
      resetTheGame();
      song1.pause() ;
      song2.play() ;
      myState = 0;
      break;

    case 3:
      resetTheGame();
      song1.pause() ;
      song3.play() ;
      myState = 0;
      break;



  }

}

function touchStarted() {
    getAudioContext().resume();
}

function Car() {
  //attribute
  this.pos = createVector(random(width), random(height));
  this.velocity = createVector(random(10, -20), random(50, -75));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = 0 ;
  //can put floor(random(birds.length-1)) ; instead of this birdNum = 0 ;
  this.timer = 0 ;
  this.maxTimer = random(5, 55, 100, 1000) ; //this timer is random for the bird speed

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

      image(birds[this.birdNum], this.pos.x, this.pos.y, 500, 500) ;

      this.timer++ ;
      if (this.timer > 75) {
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
  if (keyCode === LEFT_ARROW) yoda = yodaRight ;
  if (keyCode === RIGHT_ARROW) yoda = yodaLeft ;
  if (keyCode === UP_ARROW) yoda = yodaRight ;
  if (keyCode === DOWN_ARROW) yoda = yodaLeft ;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogpos.x = frogpos.x - 15;
  if (keyIsDown(RIGHT_ARROW)) frogpos.x = frogpos.x + 15;
  if (keyIsDown(UP_ARROW)) frogpos.y = frogpos.y - 15;
  if (keyIsDown(DOWN_ARROW)) frogpos.y = frogpos.y + 15;




}

function resetTheGame() {
  cars = [];
  for (var i = 0; i < 200; i++) {

    cars.push(new Car());


  }
  timer = 0;
  //reset frog.pos
  //reset songs
}

function game() {
  background(255, 20, 147);
  image(galaxy, width/2, height/2, 1680, 850) ;

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
  image(yoda, frogpos.x, frogpos.y, 900, 500) ;

  checkForKeys();

}
