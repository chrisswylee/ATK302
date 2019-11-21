
function setup() {
  createCanvas(windowWidth, windowHeight);
} // end setup

function draw() {
  background(159, 189, 237);// rgb  0-255

  // pretty sky
  for(var i=0; i<=500; i+=5){
    strokeWeight(5);
    stroke(215-i,128-i,64);
    line(0,350-i,width,350-i); // x,y,x,y
  }

  // sun
  noStroke();
  fill(250,186, 3);
  ellipse(700,(100+frameCount/10),70,70); 1
  //text(frameCount,200,150);

  // mountains

  // cloud
  fill(255,255,255,50);
  ellipse(frameCount/4,150,40,20);
//cloud 2
  fill(255,255,255,50);
  ellipse(frameCount/6,95,40,20);

  // Green Ground
  noStroke();
  fill(0,100,0);// rgb
  rect(0,350,width,1000);
  //street
  fill('#6E6C6C');
 quad(660,350, 740, 350, 1175, 1000, 275, 1000);

  // left tree 1
  fill(67, 51, 8); // tree brown
  rect(420,350,10,20); // trunk
  fill(23, 69, 29);
  ellipse(426,372,20,20);// tree top
  ellipse(424,392,30,20);
  ellipse(430,382,20,20);
  //right tree1
  fill(67, 51, 8); // tree brown
  rect(920,194,10,20); // trunk
  fill(23, 69, 29);
  ellipse(926,172,20,20);// tree top
  ellipse(924,192,30,20);
  ellipse(930,182,20,20);

  // tree 2
  push();
    translate(-40,-40);
    scale(1.5);
    fill(67, 51, 8); // tree brown
    rect(320,394,10,20); // trunk
    fill(23, 69, 29);
    ellipse(326,392,20,20);// tree top
    ellipse(324,372,30,20);
    ellipse(330,382,20,20);
    pop();

push();
    translate(-40,-40);
    scale(1.5);
    fill(67, 51, 8); // tree brown
    rect(720,194,10,20); // trunk
    fill(23, 69, 29);
    ellipse(726,192,20,20);// tree top
    ellipse(724,172,30,20);
    ellipse(730,182,20,20);

  pop();

  //left tree 2




  mouseLocation();
} // end draw

function mouseLocation(){
  fill(255);
  text(("x: " + mouseX),20,10);
  text(("y: " + mouseY),20,20);
} // end mouseLocation
