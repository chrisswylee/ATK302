let mic;

function setup() {
  createCanvas(710, 1000);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background('pink');

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(240, 255, 240);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);
  let c = map(vol, 0, .5, 0, 1);
fill(c) ;

}

function touchStarted() {
    getAudioContext().resume();
}
