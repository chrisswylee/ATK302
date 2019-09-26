var myState = 0 ;
var abra ;





function setup() {
  // put setup code here

  abra = loadImage("assets/abra.jpg") ;
   createCanvas(1000, 1000) ;
}


function draw() {
  // put drawing code here

  switch(myState) {
    case 0:
    background(240, 255, 240) ;
    text("A wild Abra appeared!", 300, 500) ;
    textSize(50) ;
    break ;

    case 1:
    background("white") ;
    image(abra, 50, -100) ;
    break ;




  }


}

function mouseReleased() {
  myState++ ;

if (myState > 1) {
  myState = 0 ;

  }
}
