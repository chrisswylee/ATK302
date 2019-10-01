var myState = 0 ;
var timer = 0 ;
var pusheen ;
var noway1 ;
var x = 0 ;
function preload() {
  noway1 = loadSound('assets/Megalovania1.mp3') ;

}
function setup() {
  // put setup code here
  createCanvas(1000, 1000) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
  pusheen = loadImage("assets/bubbleboat.png") ;
  noway1.play() ;

}

function draw() {
  // put drawing code here
  background(255, 235, 205) ;

  fill(255, 215, 0) ;
  rect(width/2, height/2, 200, 500) ;

  fill('grey') ;
  ellipse(width/2, height/2, 100, 100) ;

  ellipse(width/2, height/2, -100, 100, 100) ;

  fill('red') ;
  ellipse(500, 361, 100, 100) ;

  fill('grey') ;
  ellipse(500, 636, 100, 100) ;

  image(pusheen, 0, 0) ;
  line(500, 250, 500, 0) ;



//will have to put a timer and cases
//need to copy and paste the fills for the stoplight
//will need to change the x and y values for the grey ellipses since they appeared
//-on top of each other
//also why is the rect yellow
//can i add an image to this or a song?

  switch (myState) {
    case 0:
    fill(255, 215, 0) ;
    rect(width/2, height/2, 200, 500) ;

    fill('red') ;
    ellipse(500, 361, 100, 100) ;

    fill('grey') ;
    ellipse(width/2, height/2, 100, 100) ;

    ellipse(width/2, height/2, -100, 100, 100) ;

    fill('grey') ;
    ellipse(500, 636, 100, 100) ;
    timer++ ;
    if (timer >= 470) {
      myState = 1 ;
      timer = 0 ;
    }
    fill(1) ;
    rect(150, 942, 250, 50) ;
    rect(150, 900, 150, 50) ;

    fill(255) ;
    ellipse(71, 968, 50, 50) ;
    ellipse(235, 968, 50, 50) ;
    rect(257, 923, 10, 10) ;
    rect(120, 900, 50, 30) ;
    rect(180, 900, 50, 30) ;

    fill(1) ;
    ellipse(71, 968, 20, 20) ;
    ellipse(235, 968, 20, 20) ;
    ellipse(185, 904, 30, 30) ;
    break ;

    case 1:
    fill(255, 215, 0) ;
    rect(width/2, height/2, 200, 500) ;

    fill('grey') ;
    ellipse(500, 361, 100, 100) ;

    fill('yellow') ;
    ellipse(width/2, height/2, 100, 100) ;

    ellipse(width/2, height/2, -100, 100, 100) ;

    fill('grey') ;
    ellipse(500, 636, 100, 100) ;
    timer++ ;
    if (timer >= 470) {
      myState = 2 ;
      timer = 0 ;
    }
    push() ;
    translate(x, 0) ;
    x++ ;
    x += 30 ;
    if (x > width) {
      x = 0 ;

    }
    car() ;

    pop() ;
    break ;

    case 2:
    fill(255, 215, 0) ;
    rect(width/2, height/2, 200, 500) ;

    fill('grey') ;
    ellipse(500, 361, 100, 100) ;

    fill('grey') ;
    ellipse(width/2, height/2, 100, 100) ;

    ellipse(width/2, height/2, -100, 100, 100) ;

    fill('green') ;
    ellipse(500, 636, 100, 100) ;
    timer++ ;
    if (timer >= 450) {
      myState = 3 ;
      timer = 0 ;
    }
    push() ;
    translate(x, 0) ;
    x++ ;
    x += 150 ;
    if (x > width) {
      x = 0 ;

    }
    car() ;

    pop() ;
    break ;

    case 3:
    fill(255, 215, 0) ;
    rect(width/2, height/2, 200, 500) ;

    fill('red') ;
    ellipse(500, 361, 100, 100) ;

    fill('grey') ;
    ellipse(width/2, height/2, 100, 100) ;

    ellipse(width/2, height/2, -100, 100, 100) ;

    fill('grey') ;
    ellipse(500, 636, 100, 100) ;
    timer++ ;
    if (timer >= 450) {
      myState = 0;
      timer = 0 ;
    }
    fill(1) ;
    rect(150, 942, 250, 50) ;
    rect(150, 900, 150, 50) ;

    fill(255) ;
    ellipse(71, 968, 50, 50) ;
    ellipse(235, 968, 50, 50) ;
    rect(257, 923, 10, 10) ;
    rect(120, 900, 50, 30) ;
    rect(180, 900, 50, 30) ;

    fill(1) ;
    ellipse(71, 968, 20, 20) ;
    ellipse(235, 968, 20, 20) ;
    ellipse(185, 904, 30, 30) ;
    break ;




  }




}

function mouseReleased() {

  console.log(mouseX + ',' + mouseY);
}

function car() {
  fill(1) ;
  rect(150, 942, 250, 50) ;
  rect(150, 900, 150, 50) ;

  fill(255) ;
  ellipse(71, 968, 50, 50) ;
  ellipse(235, 968, 50, 50) ;
  rect(257, 923, 10, 10) ;
  rect(120, 900, 50, 30) ;
  rect(180, 900, 50, 30) ;

  fill(1) ;
  ellipse(71, 968, 20, 20) ;
  ellipse(235, 968, 20, 20) ;
  ellipse(185, 904, 30, 30) ;

}
