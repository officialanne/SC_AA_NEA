var questions = new Array(10);
questions[0] = new Array("qOne", "qTwo", "qThree");
questions[1] = new Array("qOneTwo", "qTwoTwo", "qTwoThree");
questions[2] = new Array("qOneThree", "qTwoThree", "qThreeThree");

var answers = new Array(10);
answers[0] = new Array("aOne", "aTwo", "aThree");
answers[1] = new Array("aOneTwo", "aTwoTwo", "aThreeTwo");
answers[2] = new Array("aThreeOne", "aThreeTwo", "aThreeThree");

let box_text = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12"];
let intro, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12; 
let returnMenu;
let choice;
let screen = 0;

let flip, question, answer, nextQ, side, aBox;


function setup(){
    textAlign(CENTER);
    createCanvas(1000, 600);
    background("purple");

    // creating intro text box
    intro = new Sprite(width/2, 50, 500, 55);

    // creating button to return to summary notes menu
    returnMenu = new Sprite(150, 50, 150, 50);

    // button to change sides
    flip = new Sprite (850, 50, 150, 50);
    nextQ = new Sprite (850, 575, 150, 30);

    

    // creating buttons to click to select menu as objects called sprites
    boxes = new Group();

    box1 = new boxes.Sprite(150, 175, 150, 75);
    box2 = new boxes.Sprite(375, 175, 150, 75);
    box3 = new boxes.Sprite(625, 175, 150, 75);
    box4 = new boxes.Sprite(850, 175, 150, 75);
    box5 = new boxes.Sprite(150, 325, 150, 75);
    box6 = new boxes.Sprite(375, 325, 150, 75);
    box7 = new boxes.Sprite(625, 325, 150, 75);
    box8 = new boxes.Sprite(850, 325, 150, 75);
    box9 = new boxes.Sprite(150, 500, 150, 75);
    box10 = new boxes.Sprite(375, 500, 150, 75);
    box11 = new boxes.Sprite(625, 500, 150, 75);
    box12 = new boxes.Sprite(850, 500, 150, 75);
    aBox = new Sprite(-5500, 5500, 200, 200);
    
}

function draw(){
    // putting the text in the intro text box
    intro.text=("Put your knowledge to the test!");

    // adding labels to the boxes
    box1.text = box_text[0];
    box2.text = box_text[1];
    box3.text = box_text[2];
    box4.text = box_text[3];
    box5.text = box_text[4];
    box6.text = box_text[5];
    box7.text = box_text[6];
    box8.text = box_text[7];
    box9.text = box_text[8];
    box10.text = box_text[9];
    box11.text = box_text[10];
    box12.text = box_text[11];
    returnMenu.text = "Return to \n menu";
    flip.text = "Flip Sides";
    nextQ.text = "Go to next question";

    // changing screens when the user clicks any of the boxes
    if (box1.mouse.presses() || box2.mouse.presses() || box3.mouse.presses()) {
        selectCards();
    }

    // return back to summary notes when the return button is clicked
    if (returnMenu.mouse.presses()) {
        returnToMenu();
    }

    if (flip.mouse.presses()) {
        if (side == false) {
            text(question, width / 2, height / 2 + 100);
            side = true;

        }
        else if (side == true) {
            text(answer, width / 2, height / 2 + 200);
            side = false;
        }
    }

    
}

function selectCards(){
    //reposition buttons
    box1.pos = { x: 3000, y: 3000 };
    box2.pos = { x: 3500, y: 3500 };
    box3.pos = { x: 4000, y: 4000 };
    box4.pos = { x: 4500, y: 4500 };
    box5.pos = { x: 5000, y: 5000 };
    box6.pos = { x: 5500, y: 5500 };
    box7.pos = { x: 6000, y: 6000 };
    box8.pos = { x: 6500, y: 6500 };
    box9.pos = { x: 2000, y: 2000 };
    box10.pos = { x: 2500, y: 2500 };
    box11.pos = { x: -3000, y: -3000 };
    box12.pos = { x: -3500, y: -3500 };

    

    // when the button is pressed, return the choice in order to display its notes
    if (box1.mouse.presses()) {
        choice = 1;
        background("#84a98c");
        text("Here are the notes for unit 1", width/2, height/2);
    }
    if (box2.mouse.presses()) {
        choice = 2;
        background("#f2d0a9");
        text("Here are the notes for unit 2", width/2, height/2);
    }

    else if (box3.mouse.presses()) {
        choice = 3;
        background("#d88c9a");
        text("Here are the notes for unit 3", width/2, height/2);
    }

    else if (box4.mouse.presses()) {
        choice = 4;
        box4.text = "Here are the notes for unit 4";
    }

    else if (box5.mouse.presses()) {
        choice = 5;
        box5.text = "Here are the notes for unit 5";
    }

    else if (box6.mouse.presses()) {
        choice = 6;
        box6.text = "Here are the notes for unit 6";
    }

    else if (box7.mouse.presses()) {
        choice = 7;
        box7.text = "Here are the notes for unit 7";

    }

    else if (box8.mouse.presses()) {
        choice = 8;
        box8.text = "Here are the notes for unit 8";
    }

    else if (box9.mouse.presses()) {
        choice = 9;
        box9.text = "Here are the notes for unit 9";
    }

    else if (box10.mouse.presses()) {
        choice = 10;
        box10.text = "Here are the notes for unit 10";
    }

    else if (box11.mouse.presses()) {
        choice = 11;
        box11.text = "Here are the notes for unit 11";
    }

    else if (box12.mouse.presses()) { 
        choice = 12;
        box12.text = "Here are the notes for unit 12";
    }

    // return choice to display that unit's notes
    displayCards(choice);

}


function displayCards(choice) {
    let unit = choice - 1;
    let index = 0;
    side = false;
    let question = questions[unit][index];
    let answer = answers[unit[index]];
    aBox.pos = {x: width/2, y: height/2 + 100};

    for (index = 0; index <= 2; index++) {
        aBox.text = question;
        if (flip.mouse.presses()){
            if (side==false){
                aBox.text = answer;
            }
        }
        
        
    }
    

    /*
    while (index <= 2){
        text(question, width/2, height/2 + 100);
        if (flip_sides.mouse.presses()){
            if (side == false){
                text(answer, width/2, height/2 + 100);
                side = true;
            }
            else if (side == true){
                text(question, width/2, height/2 + 100);
                side = false;
            }
        }

        if (index == 2) {
            nextQ.pos = {x: -1100, y: 1100};
        }

        if (nextQ.mouse.presses()){
            index = index + 1;
        }

    }
    */


}


// function to reset the screen when the reset button is clicked
function returnToMenu(){
    screenZero();
}

// function to reset the screen through the backround and buttons
function screenZero() {
    screen = 0;
    aBox.pos = {x: -5500, y: 5500};
    background("#f2e8cf");
    
    box1.pos = { x: 150, y: 175 };
    box2.pos = { x: 375, y: 175 };
    box3.pos = { x: 625, y: 175 };
    box4.pos = { x: 850, y: 175 };
    box5.pos = { x: 150, y: 325 };
    box6.pos = { x: 375, y: 325 };
    box7.pos = { x: 625, y: 325 };
    box8.pos = { x: 850, y: 325 };
    box9.pos = { x: 150, y: 500 };
    box10.pos = { x: 375, y: 500 };
    box11.pos = { x: 625, y: 500 };
    box12.pos = { x: 850, y: 500 };

}
