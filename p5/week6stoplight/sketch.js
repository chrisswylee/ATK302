var myState = 0 ;


function setup() {
  // put setup code here
  createCanvas(1000, 1000) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;


}

function draw() {
  // put drawing code here
  background(255, 235, 205) ;
  fill(255, 215, 0) ;
  rect(width/2, height/2, 200, 500) ;

  fill('grey') ;
  ellipse(width/2, height/2, 100, 100) ;

  ellipse(width/2, height/2, -100, 100, 100) ;

//will have to put a timer and cases
//need to copy and paste the fills for the stoplight
//will need to change the x and y values for the grey ellipses since they appeared
//-on top of each other
//also why is the rect yellow
//can i add an image to this or a song?






}
