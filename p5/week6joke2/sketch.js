var myState = 0 ;
var mcplayer ;
var timer = 0 ;








function setup() {
  // put setup code here
  createCanvas(1000, 1000) ;
  mcplayer = loadImage("assets/mcplayer.jpg") ;

}

function draw() {
  // put drawing code here

  switch(myState) {
    case 0:
    background(240, 255, 240) ;
    text("What is 8x8?", 100, 500) ;
    textSize(100) ;
    timer++ ;
    if (timer >= 300) {
      myState = 1 ;
      timer = 0 ;
    }
    break ;

    case 1:
    background("white") ;
    image(mcplayer, 0, 0) ;
    timer++ ;
    if (timer >= 300) {
      myState = 0 ;
      timer = 0 ;
    }








  }





}
