var myState = 0;
var timer = 200;
var x = 0 ;
var velocity = 5 ;


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

      velocity = 100 ;

      break;

    case 1: // yellow state      fill('grey');

      fill('grey');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom

      fill('yellow');
      ellipse(width / 2, height / 2, 100, 100); // middle

      newtimer(2, 100) ;

      velocity = 20 ;

      break;

    case 2: // red state
      fill('red');
      ellipse(width / 2, height / 2 - 125, 100, 100); // top circle

      fill('grey');
      ellipse(width / 2, height / 2, 100, 100); // middle
      ellipse(width / 2, height / 2 + 125, 100, 100); // bottom

      velocity = 0 ;

      newtimer(0, 100) ;
      //if you put the car coordinate to -1 then it stops. What happens if you set it -200?
      break ;



      }

      fill('purple') ;
      rect(x, height -100, 300, 100) ;
      text("FUCKKK", x, height -100) ;
      x = x + velocity ;
      if (x > width) {
          x = 0 ;

      }

  }




function newtimer(variableState, variableTimer) {
  timer-- ;
  if (timer <= 0) {
    myState = variableState ;
    timer = variableTimer ;
  }

}
