var x = 0 ;
var velocity = 15 ;
var myCar1 ;
var myCar3 ;
var myCar2 ;


function setup() {
   createCanvas(1000, 1000) ;

   myCar1 = new Car() ; // spawn 1 car
   myCar2 = new Car() ;
}

function draw() {
  background(255,250,205) ;

  myCar1.display() ;
  myCar1.drive() ;
  myCar2.display() ;
  myCar2.drive() ;



  fill(255,20,147) ;
  rect(x, height -100, 500, 200) ;
  textSize(100) ;
  text("LOVE FUCK", x, height -100) ;
  x = x + velocity ;
  if (x > width) {
      x = 0 ;

    }
}


function Car() {
  //attributes
  this.x = random(width) ;
  this.y = random(height) ;
  this.r = random(255) ;
  this.g = random(255) ;
  this.b = random(255) ;
  this.velocity = random(5,  100) ;
  //methods
  this.display = function() {
    fill(this.r, this.g, this.b) ;
    rect(this.x, 100, 100, 50) ;
    rect(this.x, this.y, 500, 10) ;
    text("GOOSE", this.x, this.y) ;


  }
  this.drive = function() {
    this.x = this.x + this.velocity ;
    if (this.x > width) {
      this.x = 0 ;
    }
  }

}
