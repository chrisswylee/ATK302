var myState = 0 ;
var timer = 0 ;
var song1, song2 ;
var x = 0 ;
var pusheen ;
var dream ;
var t1 ;
var y = 0 ;
function preload() {
  song1 = loadSound('assets/Osoku.mp3') ;
  song2 = loadSound('assets/masked.mp3') ;

}



function setup() {
  // put setup code here

  createCanvas(1750, 1000) ;
  rectMode(CENTER);
  ellipseMode(CENTER);

  pusheen = loadImage('assets/kirby.jpg') ;
  dream = loadImage('assets/dream.png') ;
  t1 = loadImage('assets/kerbs.jpg') ;
}

function draw() {
  // put drawing code here
  background(255) ;






  switch (myState) {

    case 0:
    //song1.play();
    //myState = 1;
    image(t1, 0, 0, 1500, 1000) ;
    fill(1) ;
    ellipse(width/2, height/2, 750, 500) ;
    fill(255) ;
    textSize(75) ;
    text("Click to Begin!!", width/2 - 250, height/2) ;
    timer++ ;
    if (timer >= 450) {
      song2.play()
      myState = 1 ;
      timer = 0 ;
    }
    push() ;
    translate(x, 0) ;
    x++ ;
    x += -1 ;
    if (x > width) {
      x = 0 ;

    }
    car() ;

    pop() ;

          //if using timer you might need to change the function mouseReleased to the notes annotated


    break ;
    //can you two more extra parameters to an image to alter its size
    //does it work for background images?


    case 1:
    image(pusheen, 0, 0, 1750, 1000) ;






    timer++ ;
    if (timer >= 450) {
      myState = 2 ;
      timer = 0 ;
    }
    push() ;
    translate(x, 0) ;
    x++ ;
    x += 100 ;
    if (x > width) {
      x = 0 ;

    }
    car() ;

    pop() ;
    break ;

    case 2:
    image(pusheen, 0, 0, 1750, 1000) ;


    timer++ ;
    if (timer >= 450) {
      myState = 3 ;
      timer = 0 ;
    }
    push() ;
    translate(0, y) ;
    y++ ;
    y += 50 ;
    if (y > height) {
      y = 0 ;

    }
    car() ;

    pop() ;
    break ;

    case 3:
    image(pusheen, 0, 0, 1750, 1000) ;


    timer++ ;
    if (timer >= 450) {
      myState = 4 ;
      timer = 0 ;
    }
    push() ;
    translate(x, 0) ;
    x++ ;
    x += 400 ;
    if (x > width) {
      x = 0 ;

    }
    car() ;

    pop() ;
    break ;




    case 4:
    image(pusheen, 0, 0, 1750, 1000) ;

    timer++ ;
    timer++ ;
    if (timer >= 450) {
      myState = 5 ;
      timer = 0 ;
    }
    push() ;
    translate(x, 0) ;
    x++ ;
    x += 100 ;
    if (x > width) {
      x = 0 ;

    }
    car() ;

    pop() ;

    case 5:
 image(dream, 0, 0, 1750, 1000) ;


 timer++ ;
 if (timer >= 450) {
   myState = 0 ;
   timer = 0 ;
 }
 push() ;
 translate(0, y) ;
 y++ ;
 y += 20 ;
 if (y > height) {
   y = 0 ;

 }
 car() ;

 pop() ;
    break ;





  }

}


function mouseReleased() {
  myState++ ;

  song1.pause();
  song2.pause();

  if (myState > 5) {
  myState = 0 ;
// if (myState ==) {       == means that it is checking if that statement is true
//myState = 0 ;
//}

}


console.log(mouseX + ',' + mouseY);
}

function car() {
  noStroke() ;
  fill('yellow') ;
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
  ellipse(187, 832, 10, 25);
  ellipse(206, 832, 10, 25) ;
  fill(220,20,60);
    ellipse(185, 872, 30, 10) ;
  ellipse(200, 872, 30, 10) ;

  fill('pink') ;
  ellipse(185, 840, 75, 75) ;
  fill(1);
  ellipse(187, 832, 10, 25);
  ellipse(206, 832, 10, 25) ;


  fill('white') ;
  ellipse(196, 857, 20, 20) ;
  fill(255) ;
  ellipse(184, 830, 7, 15) ;
  ellipse(203, 830, 7, 15) ;
  fill(220,20,60) ;
  ellipse(177, 872, 30, 10) ;
  fill('black');
  ellipse(190, 700, 250, 150) ;
  triangle(181, 764, 208, 765, 197, 790) ;
  fill('white') ;
  textSize(40);
  text("OH SHITTT", 80, 700) ;


}
