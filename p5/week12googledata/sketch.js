var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1UUTdXhMsfC9qoktTjVEfgCPNMSfAklLuKUeQ2p6Ogtc'; // this is KEY of the URL from the sheet
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM' ;
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1000, 1000);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].Naruto));

  }

}


function draw() {
  background(255, 218, 185);

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();
  }
  fill(1);
  textSize(80);
  text("MR. WORLDWIDE", width / 2, height / 2);


}


// my circle class
function Circle(myName, myNaruto) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.anime = myNaruto;
  this.velocity = createVector(random(10, -20), random(50, -75));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  this.display = function() {

    // put an ellipse here
    fill(this.r, this.g, this.b);
    if (this.anime == "Naruto") {
      ellipse(this.pos.x, this.pos.y, 200, 200);
    } else {
      rect(this.pos.x, this.pos.y, 200, 200);

    }


    fill(1);
    textSize(30);
    text(this.name, this.pos.x, this.pos.y);

  }
  this.drive = function() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
