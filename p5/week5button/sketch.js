function setup() {
  // put setup code here
createCanvas (500, 500) ;



}

function draw() {
  // put drawing code here
  fill(240, 255, 240) ;
  rect(100, 100, 100, 100);


}


function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {




  console.log("HOLYSHIT STOP CLICKING ME") ;
  }

}
