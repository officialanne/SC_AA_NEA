var qs = new Array();
qs[0] = new Array("qOne", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10");
qs[1] = new Array("q21", "2", "q23", "q24", "q25", "q26", "q27", "q28", "q29", "q210");
qs[2] = new Array("q31", "q32", "q33", "q34", "q35", "q36", "q37", "q38", "q39", "q310");
qs[3] = new Array("q41", "q42", "q43", "q44", "q45", "q46", "q47", "q48", "q49", "q410");
qs[4] = new Array("q51", "q52", "q53", "q54", "q55", "q56", "q57", "q58", "q59", "q510");
qs[5] = new Array("q61", "q62", "q63", "q64", "q65", "q66", "q67", "q68", "q69", "q610");
qs[6] = new Array("q71", "q72", "q73", "q74", "q75", "q76", "q77", "q78", "q79", "q710");
qs[7] = new Array("q81", "q82", "q83", "q84", "q85", "q86", "q87", "q88", "q89", "q810");
qs[8] = new Array("q91", "q92", "q93", "q94", "q95", "q96", "q97", "q98", "q99", "q910");
qs[9] = new Array("q101", "q102", "q103", "q104", "q105", "q106", "q107", "q108", "q109", "q1010");
qs[10] = new Array("q111", "q112", "q113", "q114", "q115", "q116", "q117", "q118", "q119", "q1110");
qs[11]= new Array("q121", "q122", "q123", "q124", "q125", "q126", "q127", "q128", "q129", "q1210");

var ans = new Array();
ans[0] = new Array("a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10");
ans[1] = new Array("a21", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a29", "a210");
ans[2] = new Array("a31", "a32", "a33", "a34", "a35", "a36", "a37", "a38", "a39", "a310");
ans[3] = new Array("a41", "a42", "a43", "a44", "a45", "a46", "a47", "a48", "a49", "a410");
ans[4] = new Array("a51", "a52", "a53", "a54", "a55", "a56", "a57", "a58", "a59", "a510");
ans[5] = new Array("a61", "a62", "a63", "a64", "a65", "a66", "a67", "a68", "a69", "a610");
ans[6] = new Array("a71", "a72", "a73", "a74", "a75", "a76", "a77", "a78", "a79", "a710");
ans[7] = new Array("a81", "a82", "a83", "a84", "a85", "a86", "a87", "a88", "a89", "a810");
ans[8] = new Array("a91", "a92", "a93", "a94", "a95", "a96", "a97", "a98", "a99", "a910");
ans[9] = new Array("a101", "a102", "a103", "a104", "a105", "a106", "a107", "a108", "a109", "a1010");
ans[10]= new Array("a111", "a112", "a113", "a114", "a115", "a116", "a117", "a118", "a119", "a1110");
ans[11]= new Array("a121", "a122", "a123", "a124", "a125", "a126", "a127", "a128", "a129", "a1210");



let box_text = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12"];
let intro, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12; 
let returnMenu;
let choice, unit, index;
let screen = 0;

let flip, nextQ, answer, question,aBox;
let side = false;




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
    if (unit !=null){
        intro.text=("Short form notes to catch up on unit " + (unit + 1).toString());
    }

    else {
        intro.text=("Short form notes to catch up"); 
    }

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
    if (box1.mouse.presses() || box2.mouse.presses() || box3.mouse.presses() || box4.mouse.presses() || box5.mouse.presses() || box6.mouse.presses() || box7.mouse.presses() || box8.mouse.presses() || box9.mouse.presses() || box10.mouse.presses() || box11.mouse.presses() || box12.mouse.presses()) {
        selectCards();
    }

    // return back to summary notes when the return button is clicked
    if (returnMenu.mouse.presses()) {
        returnToMenu();
    }


    

    if (flip.mouse.presses() && side == false) {
        aBox.text = question;
        side = true;
    }

    else if (flip.mouse.presses() && side == true) {
        aBox.text = answer;
        side = false;
    }

    else if (nextQ.mouse.presses() && index == 0) {
        question = qs[unit][1];
        answer = ans[unit][1];
        index = index + 1;

    }

    else if (nextQ.mouse.presses() && index == 1) {
        question = qs[unit][2];
        answer = ans[unit][2];
        index = index + 1;

    }

    else if (nextQ.mouse.presses() && index == 2) {
        question = qs[unit][3];
        answer = ans[unit][3];
        index = index + 1;

    }

    else if (nextQ.mouse.presses() && index == 3) {
        question = qs[unit][4];
        answer = ans[unit][4];
        index = index + 1;

    }

    else if (nextQ.mouse.presses() && index == 4) {
        question = qs[unit][5];
        answer = ans[unit][5];
        index = index + 1;

    }

    else if (nextQ.mouse.presses() && index == 5) {
        question = qs[unit][6];
        answer = ans[unit][6];
        index = index + 1;

    }

    else if (nextQ.mouse.presses() && index == 6) {
        question = qs[unit][7];
        answer = ans[unit][7];
        index = index + 1;

    }

    else if (nextQ.mouse.presses() && index == 7) {
        question = qs[unit][8];
        answer = ans[unit][8];
        index = index + 1;

    }

    else if (nextQ.mouse.presses() && index == 8) {
        question = qs[unit][9];
        answer = ans[unit][9];
        index = index + 1;

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
        text("Here are the cards unit for 1", width / 2, height / 2 - 175);
    }
    if (box2.mouse.presses()) {
        choice = 2;
        background("#f2d0a9");
        text("Here are the cards for unit 2", width/2, height/2);
    }

    else if (box3.mouse.presses()) {
        choice = 3;
        background("#d88c9a");
        text("Here are the cards for unit 3", width/2, height/2);
    }

    else if (box4.mouse.presses()) {
        choice = 4;
        background("#84a98c");
        text("Here are the cards for unit 4", width / 2, height / 2);
    }

    else if (box5.mouse.presses()) {
        choice = 5;
        background("#f2d0a9");
        text("Here are the cards for unit 5", width / 2, height / 2);
    }

    else if (box6.mouse.presses()) {
        choice = 6;
        background("#d88c9a");
        text("Here are the cards for unit 6", width / 2, height / 2);
    }

    else if (box7.mouse.presses()) {
        choice = 7;
        background("#84a98c");
        text("Here are the cards for unit 7", width / 2, height / 2);
    }

    else if (box8.mouse.presses()) {
        choice = 8;
        background("#f2d0a9");
        text("Here are the cards for unit 8", width / 2, height / 2);
    }

    else if (box9.mouse.presses()) {
        choice = 9;
        background("#d88c9a");
        text("Here are the cards for unit 9", width / 2, height / 2);
    }

    else if (box10.mouse.presses()) {
        choice = 10;
        background("#84a98c");
        text("Here are the cards for unit 10", width / 2, height / 2);
    }

    else if (box11.mouse.presses()) {
        choice = 11;
        background("#f2d0a9");
        text("Here are the cards for unit 11", width / 2, height / 2);
    }

    else if (box12.mouse.presses()) {
        choice = 12;
        background("#d88c9a");
        text("Here are the cards for unit 12", width / 2, height / 2);
    }

    // return choice to display that unit's notes
    displayCards(choice);


}


function displayCards(choice) {
    unit = choice - 1;
    index = 0;
    side = false;
    aBox.pos = { x: width / 2, y: height / 2 + 100 };
    question = qs[unit][index];
    answer = ans[unit][index];

    if (index == 9){
        aBox.pos = {x: -5500, y: 5500};
    }
    
}




// function to reset the screen when the reset button is clicked
function returnToMenu(){
    screenZero();
}

// function to reset the screen through the backround and buttons
function screenZero() {
    screen = 0;
    index = 0;
    unit = 0;
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
