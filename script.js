let numButtonClicks = 0;

function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}


function setup(){
    createCanvas(800,500);
}

function draw(){
    background('#E0E1DD');
    line(0, 0, width, height);
}
