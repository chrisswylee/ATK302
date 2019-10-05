var myState = 0 ;
var timer = 0 ;
var song1, song2, song3, song4, song5 ;
var x = 0 ;

function preload() {
  song1 = loadSound('assets/sickomode2.Drake.mp3')
  song2 = loadSound()
  song3 = loadSound()
  song4 = loadSound()
  song5 = loadSound()



}



function setup() {
  // put setup code here

  createCanvas(1500, 1500) ;
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {
  // put drawing code here
  background('white') ;

  switch (myState) {
    case 0:
    //song1.play();
    //myState = 1;
    fill(1) ;
    ellipse(750, 1000, 500, 250) ;
    fill(1) ;
    text('Click to Begin!', 750, 1000) ;





    break ;
    //can you two more extra parameters to an image to alter its size
    //does it work for background images?


    case 1:
    timer++ ;
    if(timer > 200) {
      timer = 0 ;
      myState = 2 ;
      //if using timer you might need to change the function mouseReleased to the notes annotated
    }
    break ;

    case 2:
    timer++ ;
    if(timer > 200) {
      timer = 0 ;
      myState = 2 ;
      //if using timer you might need to change the function mouseReleased to the notes annotated
    }
    break ;

    case 3:
    break ;

    case 4:
    break ;

    case 5:
    break ;





  }

}


function mouseReleased() {
  myState++ ;

if (myState > 5) {
  myState = 0 ;
// if (myState ==) {       == means that it is checking if that statement is true
//myState = 0 ;
//}
  }

}
