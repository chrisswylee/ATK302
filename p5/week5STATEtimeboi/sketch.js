var myState = 0 ;
var timer = 0 ;
//var myBcolor ;

function setup() {
  // put setup code here
  createCanvas(1500, 1500) ;
//myBcolor = color(random(255), random(255), random(255)) ;
//you can set your state background color to myBcolor
//this will give your background color a preset code or in this case a random rgb!!!

}

function draw() {

  switch(myState) {
    case 0:
    background(240, 255, 240)
    text("FUCKKKKK", 300, 500) ;
    textSize(175, 175) ;
    timer++ ;
    if (timer >= 200) {
      myState = 1 ;
      timer = 0 ;
    }

    break ;

    case 1:
    background(255, 239, 213) ;
    text("JOJO JOJO JOJO", 20, 500) ;
    timer++ ;
    if (timer >= 200) {
      myState = 2 ;
      timer = 0 ;


    }



    break ;

    case 2:
    background('pink') ;
    text("please give me A+", 10, 600) ;
    timer++ ;
    if (timer >= 200) {
      myState = 0 ;
      timer = 0 ;

      break ;



    }

  }


}
