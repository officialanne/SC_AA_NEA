// copy of arrays from flashcards
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
ans[11] = new Array("a121", "a122", "a123", "a124", "a125", "a126", "a127", "a128", "a129", "a1210");

// additional arrays to store other answer and score
var ans2 = new Array();
ans2[0] = new Array("aA1", "aA2", "aA3", "aA4", "aA5", "aA6", "aA7", "aA8", "aA9", "aA10");
ans2[1] = new Array("aA21", "aA22", "aA23", "aA24", "aA25", "aA26", "aA27", "aA28", "aA29", "aA210");
ans2[2] = new Array("aA31", "aA32", "aA33", "aA34", "aA35", "aA36", "aA37", "aA38", "aA39", "aA310");
ans2[3] = new Array("aA41", "aA42", "aA43", "aA44", "aA45", "aA46", "aA47", "aA48", "aA49", "aA410");
ans2[4] = new Array("aA51", "aA52", "aA53", "aA54", "aA55", "aA56", "aA57", "aA58", "aA59", "aA510");
ans2[5] = new Array("aA61", "aA62", "aA63", "aA64", "aA65", "a66", "aA67", "aA68", "aA69", "aA610");
ans2[6] = new Array("aA71", "aA72", "aA73", "aA74", "aA75", "a76", "aA77", "aA78", "aA79", "aA710");
ans2[7] = new Array("aA81", "aA82", "aA83", "aA84", "aA85", "a86", "aA87", "aA88", "aA89", "aA810");
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
let unit, index;
let choice, choices;
let screen = 0;
let count = 0;

let showScore, nextQ, wrongAns, answer, question, aBox, a2Box, qBox, saveQuiz;
let side = false;
let score = 0;
let endQuiz;

var topics = new Array();
var numTopics;


choices = localStorage.getItem("topic choices: ");
choice = JSON.parse(choices);
var bothQs = qs[(choice[0]-1)].concat(qs[(choice[1]-1)]);
var bothAns = ans[(choice[0]-1)].concat(ans[(choice[1]-1)]);
var both2Ans = ans2[(choice[0]-1)].concat(ans2[(choice[1]-1)]);

class userChoice {
    constructor(name, ques, rightAns, incorrect){
        this.name = name;
        this.ques = ques;
        this.rightAns = rightAns;
        this.incorrect = incorrect;
    }

    getName(){
        return this.name;
    }

    getQ(){
        return this.ques;
    }

    getAns(){
        return this.rightAns;
    }

    getwAns(){
        return this.incorrect;
    }

}

var qAndA = new Array();
for (k = 0; k<=19; k++){
    qAndA[k] = new userChoice((k+1), bothQs[k], bothAns[k], both2Ans[k]);
}

var randomSelection = random(qAndA);

// create  a new array, with each index creating a new object
// each object consists of its both answers
// after adding all, randomise the order into another new array
// each object with have a name, which is a number from 1 to 20
// then use the get methods to see whether correct
// save the averages in both units


function multChoice() {
    var units = document.forms[0];
    var i;
    for (i = 0; i < units.length; i++) {
        if (units[i].checked) {
            topics[topics.length] = i+1;
        }
    }
    numTopics = topics.length;
    if (numTopics < 2){
        alert("please choose at least 2 units!");
        event.preventDefault();
        someBug();
        return false;
    }
    else{
        localStorage.setItem("number of units: ", numTopics.toString());
        localStorage.setItem("topic choices: ", JSON.stringify(topics));
        alert("units = " + JSON.stringify(numTopics));
    }
    
}




function setup(){
    textAlign(CENTER);
    createCanvas(1000, 600);
    background("purple");

    // creating intro text box
    intro = new Sprite(width/2, 50, 500, 55);

    // creating button to return to summary notes menu
    returnMenu = new Sprite(150, 50, 150, 50);

    // button to change sides
    showScore = new Sprite (850, 50, 150, 50);
    nextQ = new Sprite(850, 575, 150, 30);

    // button to end quiz
    endQuiz = new Sprite(-6000, 6000, 150, 30);
    

    // creating buttons for answer box selection
    aBox = new Sprite(-5500, 5500, 200, 200);
    a2Box = new Sprite(5500, -5500, 200, 200);

    // creating button to display question
    qBox = new Sprite(-450, 4500, 500, 55);

    // creating button to save score
    saveQuiz = new Sprite(150, 575, 150, 30);
    
}

function draw(){


    
    // putting the text in the intro text box
    intro.text=("Put your knowledge to the test!");


    returnMenu.text = "Return to \n menu";

    showScore.text = "Current Score = " + score;

    nextQ.text = "Click here to begin the quiz";

    qBox.text = question;


    // return back to summary notes when the return button is clicked
    if (returnMenu.mouse.presses()) {
        returnToMenu();
    }


    // Using selection to change the text on boxes each time the user answers a question
    else if (aBox.mouse.presses() || a2Box.mouse.presses() && 0<=index<=19) {
        // if the user answers correctly
        if ((aBox.text == answer && aBox.mouse.presses()) || (a2Box.text == answer && a2Box.mouse.presses())){
            // let them know
            saveQuiz.text = "correct!";

            // increment the score
            score+=1;
            
            // go to next question with new random allocation of text
            question = bothQs[index+1];
            answer = bothAns[index+1];
            wrongAns = both2Ans[index+1];

            let answersText = [answer, wrongAns];
            aBox.text = random(answersText);


            if (aBox.text == answer) {
                a2Box.text = wrongAns;
            }
            else if (aBox.text == wrongAns) {
                a2Box.text = answer;
            }


            if (index <=18){
                index = index + 1;
            }
            
        } 

        // if they answer incorrectly, let them have another go, but don't give them a new score
        else{
            // let them know
            saveQuiz.text = "incorrect, have another go!"; 
            
            // same question but randomly switch text
            question = bothQs[index];
            answer = bothAns[index];
            wrongAns = both2Ans[index];

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
    else if (nextQ.mouse.presses() && index == 19) {
        saveScore();
    }
    
    if (index == 19) {
        nextQ.text = "Save Score";
    }

    // don't let the score go below 0
    if (score < -1){
        score = -1;
    }

    if (nextQ.mouse.presses() && screen == 0){
        selectQuiz();
    }
    
    
}

function selectQuiz(){
    choices = localStorage.getItem("topic choices: ");
    choice = JSON.parse(choices);
    displayQuiz(choice);

}


function displayQuiz(choice) {
    unit = (parseInt(choice[0])) - 1;
    index = 0;
    side = false;
    aBox.pos = { x: width / 2 + 250, y: height / 2 + 100 };
    a2Box.pos = { x: width / 2 - 250, y: height / 2 + 100 };
    qBox.pos = {x: width / 2, y: height / 2 -100};

    question = bothQs[index];
    answer = bothAns[index];
    wrongAns = both2Ans[index];

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
    unit = 0;
    score = 0;
    aBox.pos = {x: -5500, y: 5500};
    a2Box.pos = {x: 3000, y: -3750};
    qBox.pos = {x: 450, y: -4760};
    saveQuiz.pos = {x:150, y: 575};

    background("#f2e8cf");

}

function saveScore() {
    background("#b5838d");
    aBox.pos = {x: -5500, y: 5500};
    a2Box.pos = {x: 3000, y: -3750};
    qBox.pos = {x: 450, y: -4760};
    nextQ.pos = {x: -553, y: 1234};

    // converting the integer values for the unit and the score into a string
    if (score < 0){
        score = 0;
    }
    let newUnit = (unit+1).toString();
    let newScore = (score/2).toString();

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

function screenFour(){
    background("#d4a373");

}


