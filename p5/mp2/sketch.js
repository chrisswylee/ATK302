var myState = 0 ;
var timer = 0 ;
var song1, song2, song3, song4, song5 ;

function preload() {
  song1 = loadSound()
  song2 = loadSound()
  song3 = loadSound()
  song4 = loadSound()
  song5 = loadSound()



}



function setup() {
  // put setup code here

  createCanvas(1500, 1500) ;


}

function draw() {
  // put drawing code here
  background(240, 255, 240) ;

  switch(myState) {
    case 0:
    //song1.play();
    //myState = 1;
    break ;

    case 1:
    timer++ ;
    if(timer > 200) {
      timer = 0 ;
      myState = 0 ;
      //if using timer you might need to change the function mouseReleased to the notes annotated
    }
    break ;

    case 2:
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
