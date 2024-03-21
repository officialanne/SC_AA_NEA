
// this variable stores the number of times the button has been pressed
let numButtonClicks = 0;

// this function is called whenever the button is pressed in HTML
function buttonClicked() {
    // increment by 1 and display the new number
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
     
}


// this function runs once at the beginning of the program
// it puts the canvas on the web page
function setup(){
    createCanvas(600,400);
}

// this function continually runs whilst the program is running
// it changes the design of the canvas
function draw(){
    background('#A3B18A');
}


