var myState = 0 ;





function setup() {
  // put setup code here

  createCanvas (1000, 1000) ;

}

function draw() {
  // put drawing code here

  switch(myState) {
    case 0:
    background(240, 255, 240) ;
    text("case 0", 100, 100) ;
    break ;

    case 1:
    background('pink') ;
    text("case 1", 400, 400) ;
    break ;

    case 2:
    background(210, 250, 187) ;
    text("case 2", 50, 50) ;
    break ;



  }


}



function mouseReleased() {
  //add one to myState
  //if myState got past 2, reset it to 0
  myState++ ;

if (myState > 2) {
  myState = 0 ;

  }
// or
  //myState = (myState + 1) % 3 ;

}
