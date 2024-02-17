// copy of arrays from flashcards
var qs = new Array();
qs[0] = new Array("How is data fetched in the FDE cycle?", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10");
qs[1] = new Array("q21", "2", "q23", "q24", "q25", "q26", "q27", "q28", "q29", "q210");
qs[2] = new Array("q31", "q32", "q33", "q34", "q35", "q36", "q37", "q38", "q39", "q310");
qs[3] = new Array("q41", "What is timestamp ordering?", "What does I stand for in ACID?", "q44", "q45", "q46", "q47", "q48", "q49", "q410");
qs[4] = new Array("q51", "q52", "q53", "q54", "q55", "q56", "q57", "q58", "q59", "q510");
qs[5] = new Array("q61", "q62", "q63", "q64", "q65", "q66", "q67", "q68", "q69", "q610");
qs[6] = new Array("q71", "q72", "q73", "q74", "What is a Stack?", "q76", "q77", "q78", "q79", "q710");
qs[7] = new Array("q81", "q82", "q83", "q84", "q85", "q86", "q87", "q88", "q89", "q810");
qs[8] = new Array("q91", "q92", "q93", "q94", "q95", "q96", "q97", "q98", "q99", "q910");
qs[9] = new Array("q101", "q102", "q103", "q104", "q105", "q106", "q107", "q108", "q109", "q1010");
qs[10] = new Array("q111", "q112", "q113", "q114", "q115", "q116", "q117", "q118", "q119", "q1110");
qs[11]= new Array("q121", "q122", "q123", "q124", "q125", "q126", "q127", "q128", "q129", "q1210");

var ans = new Array();
ans[0] = new Array("MAR Address sent on\naddress bus to main \nmemory\nContents in address\nsent on data bus to\nMDR", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10");
ans[1] = new Array("a21", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a29", "a210");
ans[2] = new Array("a31", "a32", "a33", "a34", "a35", "a36", "a37", "a38", "a39", "a310");
ans[3] = new Array("a41", "Eevry object in a\ndatabase has a read\nand write timestamp\nThe ealier is applied\nfirst", "Isolation", "a44", "a45", "a46", "a47", "a48", "a49", "a410");
ans[4] = new Array("a51", "a52", "a53", "a54", "a55", "a56", "a57", "a58", "a59", "a510");
ans[5] = new Array("a61", "a62", "a63", "a64", "a65", "a66", "a67", "a68", "a69", "a610");
ans[6] = new Array("a71", "a72", "a73", "a74", "A dynamic data\nstructure\nFirst in Last Out", "a76", "a77", "a78", "a79", "a710");
ans[7] = new Array("a81", "a82", "a83", "a84", "a85", "a86", "a87", "a88", "a89", "a810");
ans[8] = new Array("a91", "a92", "a93", "a94", "a95", "a96", "a97", "a98", "a99", "a910");
ans[9] = new Array("a101", "a102", "a103", "a104", "a105", "a106", "a107", "a108", "a109", "a1010");
ans[10]= new Array("a111", "a112", "a113", "a114", "a115", "a116", "a117", "a118", "a119", "a1110");
ans[11] = new Array("a121", "a122", "a123", "a124", "a125", "a126", "a127", "a128", "a129", "a1210");

// additional arrays to store other answer and score
var ans2 = new Array();
ans2[0] = new Array("Memory requests\naddress from MAR\nMDR requests data\non data bus", "aA2", "aA3", "aA4", "aA5", "aA6", "aA7", "aA8", "aA9", "aA10");
ans2[1] = new Array("aA21", "aA22", "aA23", "aA24", "aA25", "aA26", "aA27", "aA28", "aA29", "aA210");
ans2[2] = new Array("aA31", "aA32", "aA33", "aA34", "aA35", "aA36", "aA37", "aA38", "aA39", "aA310");
ans2[3] = new Array("aA41", "Transactions are \nordered based on \ndependences on \neachother", "Integrity", "aA44", "aA45", "aA46", "aA47", "aA48", "aA49", "aA410");
ans2[4] = new Array("aA51", "aA52", "aA53", "aA54", "aA55", "aA56", "aA57", "aA58", "aA59", "aA510");
ans2[5] = new Array("aA61", "aA62", "aA63", "aA64", "aA65", "aA66", "aA67", "aA68", "aA69", "aA610");
ans2[6] = new Array("aA71", "aA72", "aA73", "aA74", "A dynamic data\nstructure\nFirst in First Out", "aA76", "aA77", "aA78", "aA79", "aA710");
ans2[7] = new Array("aA81", "aA82", "aA83", "aA84", "aA85", "aA86", "aA87", "aA88", "aA89", "aA810");
ans2[8] = new Array("aA91", "aA92", "aA93", "aA94", "aA95", "aA96", "aA97", "aA98", "aA99", "aA910");
ans2[9] = new Array("aA101", "aA102", "aA103", "aA104", "aA105", "aA106", "aA107", "aA108", "aA109", "aA1010");
ans2[10] = new Array("aA111", "aA112", "aA113", "aA114", "aA115", "aA116", "aA117", "aA118", "aA119", "aA1110");
ans2[11] = new Array("aA121", "aA122", "aA123", "aA124", "aA125", "aA126", "aA127", "aA128", "aA129", "aA1210");

// score array
var scores = new Array();
scores[0] = [];
scores[1] = [];
scores[2] = [];
scores[3] = [];
scores[4] = [];
scores[5] = [];
scores[6] = [];
scores[7] = [];
scores[8] = [];
scores[9] = [];
scores[10] = [];
scores[11] = [];


let box_text = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12"];
let intro, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12; 
let returnMenu;
let choice, unit, index;
let screen = 0;
let count = 0;

let showScore, nextQ, wrongAns, answer, question, aBox, a2Box, qBox, saveQuiz;
let side = false;
let score = 0;
let endQuiz;

var topics = new Array();
var numTopics;



// create a new array that holds each question and answer
var qAndA = [];




function multChoice() {
    var units = document.forms[0];
    var i;
    for (i = 0; i < units.length; i++) {
        if (units[i].checked) {
            topics[topics.length] = (i+1).toString();
        }
    }
    numTopics = topics.length;
    if (numTopics <2 || numTopics >3){
        topics.length = 0;
        alert("please choose 2 or 3 units!");
        event.preventDefault();
        someBug();
        return false;
    }
    else{
        localStorage.setItem("number of units: ", numTopics.toString());
        localStorage.setItem("topic choices: ", JSON.stringify(topics));
        alert("units = " + JSON.stringify(numTopics) + ", selection = " + JSON.stringify(topics));
    }
    
}




function setup(){
    textAlign(CENTER);
    createCanvas(1000, 600);
    background("purple");
    textSize(20);

    // creating intro text box
    intro = new Sprite(width/2, 50, 500, 55);

    // creating button to return to summary notes menu
    returnMenu = new Sprite(150, 50, 150, 50);

    // button to change sides
    showScore = new Sprite (850, 50, 175, 50);
    nextQ = new Sprite(850, 570, 175, 50);

    // button to end quiz
    endQuiz = new Sprite(-6000, 6000, 150, 30);

    

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
    

    // creating buttons for answer box selection
    aBox = new Sprite(-5500, 5500, 200, 200);
    a2Box = new Sprite(5500, -5500, 200, 200);

    // creating button to display question
    qBox = new Sprite(-450, 4500, 500, 55);

    // creating button to save score
    saveQuiz = new Sprite(150, 570, 150, 50);
}

function draw(){


    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 125) && (mouseY < 215)){
        box1.color = "blue";
    }
    else {
        box1.color = "purple";
    }
    

    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 275) && (mouseY < 365)){
        box5.color = "blue";
    }
    else {
        box5.color = "yellow";
    }
    

    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 450) && (mouseY < 540)){
        box9.color = "blue";
    }
    else {
        box9.color = "pink";
    }

    
    if ((mouseX > 300) && (mouseX < 450) && (mouseY > 125) && (mouseY < 215)){
        box2.color = "blue";
    }
    else {
        box2.color = "majenta";
    }
    

    if ((mouseX > 300) && (mouseX < 450) && (mouseY > 275) && (mouseY < 365)){
        box6.color = "blue";
    }
    else {
        box6.color = "brown";
    }
    

    if ((mouseX > 300) && (mouseX < 450) && (mouseY > 450) && (mouseY < 540)){
        box10.color = "blue";
    }
    else {
        box10.color = "green";
    }

    if ((mouseX > 550) && (mouseX < 700) && (mouseY > 125) && (mouseY < 215)){
        box3.color = "blue";
    }
    else {
        box3.color = "red";
    }
    

    if ((mouseX > 550) && (mouseX < 700) && (mouseY > 275) && (mouseY < 365)){
        box7.color = "blue";
    }
    else {
        box7.color = "blueviolet";
    }
    

    if ((mouseX > 550) && (mouseX < 700) && (mouseY > 450) && (mouseY < 540)){
        box11.color = "blue";
    }
    else {
        box11.color = "darkcyan";
    }

    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 125) && (mouseY < 215)){
        box4.color = "blue";
    }
    else {
        box4.color = "darkseagreen";
    }
    

    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 275) && (mouseY < 365)){
        box8.color = "blue";
    }
    else {
        box8.color = "khaki";
    }
    

    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 450) && (mouseY < 540)){
        box12.color = "blue";
    }
    else {
        box12.color = "olive";
    }

    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 20) && (mouseY < 75)){
        returnMenu.color = "red";
        //cursor(HAND);
    }
    else {
        returnMenu.color = "DarkOrange";
        //cursor(ARROW);

    }

    
    if (unit!=null){
        if ((mouseX > 625) && (mouseX < 875) && (mouseY > 300) && (mouseY < 500)){
        aBox.color = "LightGreen";
        //cursor(HAND);
    }

    else{
        aBox.color = "SlateBlue";

    }
    if ((mouseX > 150) && (mouseX < 350) && (mouseY > 300) && (mouseY < 500)){
        a2Box.color = "LimeGreen";
        //cursor(HAND);
    }

    else {
        a2Box.color = "cyan";
        //cursor(ARROW);

    }
    }
    
    

    // putting the text in the intro text box
    if (unit !=null){
        intro.text=("Practice unit " + (unit + 1).toString());
        nextQ.text = "Select an answer\nout of the two";
    }

    
    else{
        intro.text=("Put your knowledge to the test!"); 
        nextQ.text = "Choose a unit";
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

    returnMenu.text = "Return to \nmenu";

    showScore.text = "Current Score = " + score;

    

    qBox.text = question;


    // changing screens when the user clicks any of the boxes
    if (box1.mouse.presses() || box2.mouse.presses() || box3.mouse.presses() || box4.mouse.presses() || box5.mouse.presses() || box6.mouse.presses() || box7.mouse.presses() || box8.mouse.presses() || box9.mouse.presses() || box10.mouse.presses() || box11.mouse.presses() || box12.mouse.presses()) {
        selectQuiz();
    }

    // return back to summary notes when the return button is clicked
    if (returnMenu.mouse.presses()) {
        returnToMenu();
    }


    // Using selection to change the text on boxes each time the user answers a question
    else if (aBox.mouse.presses() || a2Box.mouse.presses() && 0<=index<=9) {
        // if the user answers correctly
        if ((aBox.text == answer && aBox.mouse.presses()) || (a2Box.text == answer && a2Box.mouse.presses())){
            // let them know
            saveQuiz.text = "correct!";

            // increment the score
            score+=1;
            
            if (index <=8){
                // go to next question with new random allocation of text
                question = qAndA[index+1].ques;

                answer = qAndA[index+1].rightAns;
                wrongAns = qAndA[index+1].incorrect;

                let answersText = [answer, wrongAns];
                aBox.text = random(answersText);
            }
            


            if (aBox.text == answer) {
                a2Box.text = wrongAns;
            }
            else if (aBox.text == wrongAns) {
                a2Box.text = answer;
            }


            if (index <=8){
                index = index + 1;
            }
            
        } 

        // if they answer incorrectly, let them have another go, but don't give them a new score
        else{
            // let them know
            saveQuiz.text = "incorrect, have\nanother go!"; 
            
            // same question but randomly switch text
            question = qAndA[index].ques;

            answer = qAndA[index].rightAns;
            wrongAns = qAndA[index].incorrect;

            let answersText = [answer, wrongAns];
            aBox.text = random(answersText);


            if (aBox.text == answer) {
                a2Box.text = wrongAns;
                
            }
            else if (aBox.text == wrongAns) {
                a2Box.text = answer;
                
            }

            // cancel out the later addition of a point by subtracting now
            score = score - 1;
        }

    }
    

    // last question
    else if (nextQ.mouse.presses() && index == 9) {
        saveScore();
    }
    
    if (index == 9) {
        nextQ.text = "Final Question -\nAfter, Save Score";
        if ((mouseX > 750) && (mouseX < 950) && (mouseY > 550) && (mouseY < 600)){
            nextQ.color = "green";
            //cursor(HAND);
        }
        else {
            nextQ.color = "DarkKhaki";
            //cursor(ARROW);
    
        }
    }

    // don't let the score go below 0
    if (score < -1){
        score = -1;
    }
    
    
}

function selectQuiz(){
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
    nextQ.pos = { x: 850, y: 570};

    

    // when the button is pressed, return the choice in order to display its notes
    if (box1.mouse.presses()) {
        choice = 1;
        background("#84a98c");
        text("Practice Unit 1", width / 2-30, 125);
    }
    if (box2.mouse.presses()) {
        choice = 2;
        background("#f2d0a9");
        text("Practice Unit 2", width / 2-30, 125);
    }

    else if (box3.mouse.presses()) {
        choice = 3;
        background("#d88c9a");
        text("Practice Unit 3", width / 2-30, 125);
    }

    else if (box4.mouse.presses()) {
        choice = 4;
        background("#84a98c");
        text("Practice Unit 4", width / 2-30, 125);
    }

    else if (box5.mouse.presses()) {
        choice = 5;
        background("#f2d0a9");
        text("Practice Unit 5", width / 2-30, 125);
    }

    else if (box6.mouse.presses()) {
        choice = 6;
        background("#d88c9a");
        text("Practice Unit 6", width / 2-30, 125);
    }

    else if (box7.mouse.presses()) {
        choice = 7;
        background("#84a98c");
        text("Practice Unit 7", width / 2-30, 125);
    }

    else if (box8.mouse.presses()) {
        choice = 8;
        background("#f2d0a9");
        text("Practice Unit 8", width / 2-30, 125);
    }

    else if (box9.mouse.presses()) {
        choice = 9;
        background("#d88c9a");
        text("Practice Unit 9", width / 2-30, 125);
    }

    else if (box10.mouse.presses()) {
        choice = 10;
        background("#84a98c");
        text("Practice Unit 10", width / 2-30, 125);
    }

    else if (box11.mouse.presses()) {
        choice = 11;
        background("#f2d0a9");
        text("Practice Unit 11", width / 2-30, 125);
    }

    else if (box12.mouse.presses()) {
        choice = 12;
        background("#d88c9a");
        text("Practice Unit 12", width / 2-30, 125);
    }

    // return choice to display that unit's notes
    displayQuiz(choice);


}


function displayQuiz(choice) {
    
    unit = choice - 1;
    index = 0;
    side = false;
    aBox.pos = { x: width / 2 + 250, y: height / 2 + 100 };
    a2Box.pos = { x: width / 2 - 250, y: height / 2 + 100 };
    qBox.pos = {x: width / 2, y: height / 2 -100};

    
    // use a loop to create objects for each question and answer
    for (var i = 0; i < 10; i++) {
        qAndA[i] = {
            name: "name" + (i + 1),
            ques: qs[unit][i],
            rightAns: ans[unit][i],
            incorrect: ans2[unit][i]
        };
    }


    // Fisher-Yates Sorting algorithm
    for (let i = qAndA.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [qAndA[i], qAndA[j]] = [qAndA[j], qAndA[i]];
    } 


    question = qAndA[index].ques;
    answer = qAndA[index].rightAns;
    wrongAns = qAndA[index].incorrect;

    let answersText = [answer, wrongAns];
    aBox.text = random(answersText);

    
    if (aBox.text == answer){
        a2Box.text = wrongAns;
        
    }
    else if (aBox.text == wrongAns){
        a2Box.text = answer;
        
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
    unit = null;
    score = 0;
    aBox.pos = {x: -5500, y: 5500};
    a2Box.pos = {x: 3000, y: -3750};
    qBox.pos = {x: 450, y: -4760};
    saveQuiz.pos = {x:150, y: 570};
    saveQuiz.text = "";

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

function saveScore() {
    background("#b5838d");
    aBox.pos = {x: -5500, y: 5500};
    a2Box.pos = {x: 3000, y: -3750};
    qBox.pos = {x: 450, y: -4760};
    nextQ.pos = {x: -553, y: 1234};
    saveQuiz.pos = {x: 5500, y: -5500};

    // converting the integer values for the unit and the score into a string
    if (score < 0){
        score = 0;
    }
    let newUnit = (unit+1).toString();
    let newScore = (score).toString();

    // initially getting the array for the scores from local storage
    let setScores = localStorage.getItem(newUnit + " Scores: ");

    // checking whether the array that has been retrieved exists or not
    // if it doesn't exist, the value will be null so create a new one
    if (setScores == null){
        let length = scores[unit].length;
        scores[unit][length] = newScore;
        

        let newScores = JSON.stringify(scores[unit]);

        // save the array to local storage
        localStorage.setItem(newUnit + " Scores: ", newScores);
    }

    // if it does exist, update it and set it back into local storage
    else {
        let retScores = JSON.parse(setScores);
        let length = retScores.length;
        retScores[length] = newScore;

        let newScores = JSON.stringify(retScores);

        // save to local storage
        localStorage.setItem(newUnit + " Scores: ", newScores);
    }
    


    // save the score to local storage
    localStorage.setItem("unit: " + newUnit, "Score: " + newScore);

    text("Your final score was: " + newScore + "\nYour scores for unit " + newUnit + " are: " + localStorage.getItem(newUnit + " Scores: ") + "\n This has been saved and\nyou can return to menu", width/2, height/2);
        
}



