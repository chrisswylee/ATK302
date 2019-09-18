var sickomode;


function preload() {
  sickomode = loadSound('assets/sickomode.Drake.mp3');





}





function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here





}

function mouseReleased() {
sickomode.play();

  if (sickomode.IsPlaying()) {
    sickomode.pause();
  } else {
    sickomode.play();
  }
}
// .pause() song1.IsPlaying()
