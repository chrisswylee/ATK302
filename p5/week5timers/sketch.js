var timer = 200 ;  // declare in the global area






function setup() {
  // put setup code here
  createCanvas(1000, 1000) ;
  background('white') ;


}

function draw() {
  // put drawing code here
  // put this block of code at the end of a “timer” case, before the break ;
timer-- ;
//timer is set so that every tick subtracts a tick
  if (timer <= 0) {
    //less than or equal to 0
    background(random(255), random(255), random(255)) ;
    timer = 200 ;
    //timer must be reset and equal to the number set by the variable
  }







}
