let numButtonClicks = 0;


function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}




function setup(){
    createCanvas(600,400);
}

function draw(){
    background(20,20,255);
    line(0, 0, width, height);
}
