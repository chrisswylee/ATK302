var myState = 0;
var timer = 200;
var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background(127,255,212);
  fill('#F7FF3C');
  rect(width / 2, height / 2, 150, 400);



  switch (myState) {
    case 0: // green state
      fill('grey');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle
      ellipse(width / 2, height / 2, 100, 100); // middle

      fill('green');
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom

      newtimer(1, 200) ;

      push() ;
      translate(x, 0) ;
      x++ ;
      x += 20 ;
      if (x > width) {
        x = 0 ;

      }
      car() ;

      pop() ;

      break;

    case 1: // yellow state      fill('grey');

      fill('grey');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom

      fill('yellow');
      ellipse(width / 2, height / 2, 100, 100); // middle

      newtimer(2, 100) ;

      push() ;
      translate(x, 0) ;
      x++ ;
      x += 5 ;
      if (x > width) {
        x = 0 ;

      }
      car() ;

      pop() ;

      break;

    case 2: // red state
      fill('red');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle

      fill('grey');
      ellipse(width / 2, height / 2, 100, 100); // middle
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom



      newtimer(0, 100) ;
      push() ;
      translate(x, 0) ;
      x++ ;
      x += -1 ;
      if (x > width) {
        x = 0 ;

      }
      car() ;

      pop() ;
      //if you put the car coordinate to -1 then it stops. What happens if you set it -200?
      break ;



      }

  }




function newtimer(variableState, variableTimer) {
  timer-- ;
  if (timer <= 0) {
    myState = variableState ;
    timer = variableTimer ;
  }

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
