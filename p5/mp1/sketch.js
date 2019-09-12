var lalala;
function preload() {
  lalala = loadSound('assets/Lalala.mp3');

}


function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(800, 1000); // always in the setup

  background(255, 0, 0);
  lalala.play();  // this is what starts the sound


}

function draw() {
  background(255,240,245);
  noStroke()

if (mouseIsPressed) {

background(240,255,240);

fill(253,246,227);
quad(400,445,418,482,522,287,478,246);
fill(253,246,227);
quad(340,449,317,488,219,278,266,249);
//press arms
  fill(253,246,227);
  ellipse(370, 340, 175, 175);
  //head
  fill('brown');
  rect(0,750,1000,800);
  fill('orange');
  ellipse(0,0,300,300);
  fill(147,161,161);
  rect(275,230,190,130);
  //helmet
  fill(253,246,227);

  rect(298,322,40,40);
  fill(253,246,227);

  rect(400,322,40,40);
  fill(10);
  ellipse(420,340,10,10);
  fill(181,137,0);

  fill(255,221,3);
  triangle(275,675,365,572,465,675);
  fill(147,161,161);
  rect(318,427,100,200);
  //body armor


  fill(253,246,227);
  rect(321,675,40,90);
  fill(253,246,227);
  rect(377,675,40,90);
  fill(103,51,0);
  rect(377,765,45,40);
  fill(103,51,0);
  rect(318,766,45,40);
//arms and legs

  fill(244,164,96);
  rect(275,88,185,20);
  fill(245,222,179);
  rect(292,79,150,32);


//hotdog

fill(random(255),random(255),random(255));
triangle(800,0,460,94,800,56);
fill(random(255),random(255),random(255));
triangle(449,0,407,76,522,0);
fill(random(255),random(255),random(255));
triangle(321,78,303,0,227,0);
fill(random(255),random(255),random(255));
triangle(4,0,0,46,273,92);


fill(147,161,161);
rect(495,498,70,20);
fill(147,161,161);
rect(527,450,10,60);
fill(230,230,230);
rect(505,518,50,230);
fill(230,230,230);
triangle(505,748,531,784,556,748);
  //sword

  fill(103,51,0);
  ellipse(188,722,150,150);
  fill(230,230,230);
  ellipse(188,722,115,115);
  fill(1);
  ellipse(188,722,10,10);
  fill(1);
  ellipse(238,722,5,5);
  fill(1);
  ellipse(137,722,5,5);
  fill(1);
  ellipse(188,774,5,5);
  fill(1);
  ellipse(188,671,5,5);

  fill(255,221,3);
  triangle(340,230,374,170,402,230);
  //helmet
  fill(10);
  ellipse(318,340,10,10);
  //left eye



  fill(1);
  ellipse(368,394,50,50);
  //smile
  stroke(10);
  line(329,471,359,471);
  line(359,442,359,471);
  line(376,471,376,442);
  line(376,471,406,471);
  fill(1);
  ellipse(384,466,2,2);
  fill(1);
  ellipse(352,466,2,2);
  fill(250,128,114);
  arc(369,410,20,20,0,PI + QUARTER_PI, OPEN);
  line(308,318,336,328);
  line(402,328,428,318);
  //eyebrows
  line(25,168,43,271);
  line(124,126,200,202);
  line(168,48,275,64);
  //lines with stroke. end with this so that other shapes do have outline


} else {


fill(253,246,227);
ellipse(370, 340, 175, 175);
//head
fill('brown');
rect(0,750,1000,800);
fill('orange');
ellipse(0,0,300,300);
fill(147,161,161);
rect(275,230,190,130);
//helmet
fill(253,246,227);

rect(298,322,40,40);
fill(253,246,227);

rect(400,322,40,40);
fill(10);
ellipse(420,340,10,10);
fill(181,137,0);

fill(255,221,3);
triangle(275,675,365,572,465,675);
fill(147,161,161);
rect(318,427,100,200);
//body armor

fill(253,246,227);
rect(420,452,110,45);
fill(253,246,227);
rect(279,452,50,50);
fill(253,246,227);
rect(321,675,40,90);
fill(253,246,227);
rect(377,675,40,90);
fill(103,51,0);
rect(377,765,45,40);
fill(103,51,0);
rect(318,766,45,40);

//arms and legs

fill(147,161,161);
rect(495,498,70,20);
fill(147,161,161);
rect(527,450,10,60);
fill(230,230,230);
rect(505,518,50,230);
fill(230,230,230);
triangle(505,748,531,784,556,748);
//sword

fill(103,51,0);
ellipse(188,722,150,150);
fill(230,230,230);
ellipse(188,722,115,115);
fill(1);
ellipse(188,722,10,10);
fill(1);
ellipse(238,722,5,5);
fill(1);
ellipse(137,722,5,5);
fill(1);
ellipse(188,774,5,5);
fill(1);
ellipse(188,671,5,5);

fill(255,221,3);
triangle(340,230,374,170,402,230);
//helmet
fill(10);
ellipse(318,340,10,10);
//left eye


stroke(10);
line(336,394,405,394);
//smile
stroke(10);

line(329,471,359,471);
line(359,442,359,471);
line(376,471,376,442);
line(376,471,406,471);
fill(1);
ellipse(384,466,2,2);
fill(1);
ellipse(352,466,2,2);
//nips

line(308,328,336,328);
line(402,328,428,328);
//eyebrows
fill(253,246,227);
rect(286,457,10,10);
line(25,168,43,271);
line(124,126,200,202);
line(168,48,275,64);
//lines with stroke. end with this so that other shapes do have outline

//Knave. He etherealizes hot dogs in between battles to fuel his lust for battle!!
}
  fill(10);
  text(mouseX + ',' + mouseY, 20,20);
}


function mouseReleased() {

  console.log(mouseX + ',' + mouseY);
}

function mycharacter() {
  //add shapes. type mycharacter to replciate code with ()
}
