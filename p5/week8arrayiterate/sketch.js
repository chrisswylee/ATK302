

function setup() {
  createCanvas(1000, 1000) ;


  var names = []; // declaring an array
    names[0] = "Joseph"; // putting chewie in the first space (which is space 0)
    names[1] = "Kakyoin";
    names[2] = "Polnareff";
    names[3] = "Jotaro";
    names[4] = "Avdol";
    names[5] = "Iggy";


  for (var i = 0; i < names.length; i++) { // you can just copy this or memorize it
    console.log(names[i]);

  }
  var dwarves = [] ;  // creating (declaring) a new array with 7 Strings in it
    dwarves[0] = "dopey" ;
    dwarves[1] = "doc" ;
    dwarves[2] = "grumpy" ;
    dwarves[3] = "happy" ;
    dwarves[4] = "sleepy" ;
    dwarves[5] = "sneezy" ;
    dwarves[6] = "bashful" ;

    for (var i = 0; i < dwarves.length; i++) { // you can just copy this or memorize it
      console.log(dwarves[i]);
    }

  var randomNumbers = new Array(100) ;
  for (var i = 0; i < 100; i++) {
    randomNumbers[i] = random(100) ; // put a random number in the array
    //console.log(randomNumbers[i]) ;  // print out these array elements
    console.log("the temperature tomorrow will be" + i + " = " + randomNumbers[i]) ;


  }






}
function draw() {

}
