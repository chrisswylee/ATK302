var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
//var d
var x = 0;
var windspeed = 0 ;
var temp = 0 ;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!
  d = loadImage("assets/dddmeme3.jpg") ;
  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=1491ddb5f95bf7f183b8fbfd54ee29eb'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed ;
  temp = weather.main.temp ;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(127,255,212) ;
    textSize(75) ;
    image(d, x, 600, 300, 300) ;
    fill(1) ;
    text("we have fucking weather (^・ω・^ )", width/2 - 700, height/2 - 100) ;
// parse the weather object and put some text for some at least 3 different weather data!
    text("temperature = " + weather.main.temp, 500, 500) ;
    text("wind speed = " + weather.wind.speed, 500, 600) ;
    text("humidity = " + weather.main.humidity, 500, 700) ;

    //cloud
    fill("white");
    noStroke() ;
    ellipse(x, 100, 500, 300) ;
    x = x + windspeed/2 ;
    if (x > width)
     x = 0 ;

     fill("red") ;
     var mappedTemp = 0 ;
     mappedTemp = map(temp, -10, 100, 0, height) ;
     rect(width-30, height-70, 20, mappedTemp) ;


      break;



  }
}
