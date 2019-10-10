//var myCar1 ;
//var myCar2 ;
//var myCar3 ;
var x = 0 ;
var velocity = 10 ;
var cars = [] ;
var frogpos ;


function setup() {

  createCanvas(2000, 1000) ;
  rectMode(CENTER);
    for (var i = 0; i < 30; i++) {

  cars.push(new Car()) ;
  cars.push(new Car()) ;
  cars.push(new Car()) ;

  }
  frogpos = createVector(width/2, height/2) ;

}


function draw() {
  background(255,20,147) ;

    for (var i = 0; i < cars.length; i++) {

  cars[i].display() ;
  cars[i].drive() ;
  if (cars[i].pos.dist(frogpos) < 50) {
    cars.splice(i, 1) ;


  }

}
  //draw frog
  fill(0, 255, 0) ;
  ellipse(frogpos.x, frogpos.y, 50, 40) ;
  ellipse(frogpos.x -20, frogpos.y + 10, 10, 10) ;
  ellipse(frogpos.x + 20, frogpos.y + 10, 10, 10) ;
  fill(1) ;
  ellipse(frogpos.x -20, frogpos.y - 10, 10, 10) ;
  ellipse(frogpos.x + 20, frogpos.y - 10, 10, 10) ;
  ellipse(frogpos.x, frogpos.y, 25, 8) ;
  rect(frogpos.x, frogpos.y  - 80, 30, 100) ;
  rect(frogpos.x, frogpos.y - 25, 50, 10) ;

  checkForKeys() ;
}

function Car() {
  //attribute
  this.pos = createVector(random(width), random(height)) ;
  this.velocity = createVector(random(20, -20), random(30, -50)) ;
  this.r = random(255) ;
  this.g = random(255) ;
  this.b = random(255) ;

  //methods
  this.display = function() {


    fill(this.r, this.g, this.b) ;
    rect(this.pos.x, this.pos.y, 100, 100) ;

    ellipse(this.pos.x, this.pos.y, 20, 20) ;
    ellipse(this.pos.x, this.pos.y, 20, 200) ;
    ellipse(this.pos.x, this.pos.y, 100, 20) ;
    textSize(100) ;
    text("loltyler1", this.pos.x, this.pos.y) ;

  }

  this.drive = function() {
    this.pos.add(this.velocity) ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y < 0) this.y = height;
    }

  }

  function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) frogpos.x = frogpos.x - 15;
    if (keyIsDown(RIGHT_ARROW)) frogpos.x = frogpos.x + 15;
    if (keyIsDown(UP_ARROW)) frogpos.y = frogpos.y - 15;
    if (keyIsDown(DOWN_ARROW)) frogpos.y = frogpos.y + 15;




  }
