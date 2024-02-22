//array to hold questions
var qs = new Array();

// elements in the array being arrays that hold individual questions
qs[0] = new Array("How is data fetched in the FDE cycle?", "What is the accumulator?", "What is a parallel system?", "What is a multicore system?", "What is a CISC processor?", "What is a register?", "What is the address bus?", "What is the opcode?", "What is the control unit?", "What is flash storage?");
qs[1] = new Array("What is a device driver?", "What is a multi user\noperating system", "What is a multi tasking\noperating system?", "How does the ISR work within the\nFDE cycle?", "What is a linker?", "What is syntax analysis?", "What is optimisation?", "What is an interpreter?", "Why is bespoke software used?", "What is the BIOS?");
qs[2] = new Array("What is a class?", "What is direct addressing?", "What is indexed addressing used for?", "What is an object?", "What is a good algorithm?", "What is the waterfall lifecycle?", "What is extreme programming?", "What is functional programming?", "What is a method?", "What is indirect addressing?");
qs[3] = new Array("What is a deadlock?", "What is timestamp ordering?", "What does I stand for in ACID?", "What is asymmetric encryption?", "What is referential integrity?", "What are some methods of selecting data?", "What is a secondary key?", "What is a flat file?", "What is 1NF?", "What is redundancy?");
qs[4] = new Array("What is HTML", "What is an identifier?", "What is a CSS class?", "What is the Internet layer in the TCP/IP stack?", "What is the Link layer in the TCP/IP stack?", "What is a switch?", "What is the star topology?", "How is encryption used in netwrok securty?", "What is a damper?", "What are disadvantages of a client-server network?");
qs[5] = new Array("What is a circular shift?", "Whar is an overflow error?", "What is a character set?", "What is an arithmetic shift?", "What is unicode?", "How do you convert from hexadecimal to binary?", "How do you use two's complement?", "What is normalisation?", "What is an OR mask?", "What is sign and magnitude?");
qs[6] = new Array("What is a tuple?", "What is a hash table?", "What is a graph?", "What is a tree?", "What is a Stack?", "What is a Record?", "What is an Array?", "What is a circular queue?", "How do you add an item to a queue?", "What is an adjency matrix?");
qs[7] = new Array("What are D type flip flops used for?", "What is the distribution law?", "What is the association law?", "What is a half adder?", "What is the double negation law?", "What is a full adder?", "What are De Morgan's Laws?", "What is the commutation law?", "What is a truth table?", "What is a logic gate diagram?");
qs[8] = new Array("How are colour paradigms used?", "What is censorship?", "What is the Regulation of Investigatory Powers Act?", "What is the Data Protection Act?", "What is the Computer Misuse Act?", "What is the Copyright Designs and Patents Act?", "What are cultural issues?", "What do environmental effects include?", "What are moral issues?", "What law was made in 1990?");
qs[9] = new Array("What is abstraction?", "What is thinking ahead?", "What is thinking concurrently?", "What is pipelining?", "What is divide and conquer?", "What is heuristics?", "What is caching?", "What is visualisation?", "What is performance modelling?", "What is thinking procedurally?");
qs[10] = new Array("What are global variables?", "What is passing by reference?", "What is passing by value?", "What are local variables?", "What is encapsulation?", "What is sequence?", "What is recursion?", "How does an IDE use a step breaker?", "What is a procedure?", "What is a private attribute?");
qs[11]= new Array("What is the A* Algorithm?", "What is the polynomial time complexity?", "What is the bubble sort?", "What is Dijkstra's shortest path algorithm?", "What is breadth-first traversal", "What is post-order traversal?", "What is the merge sort?", "What is in-order traversal?", "What is a stack?", "What is pre-order traversal?");

// array to hold answers
var ans = new Array();

// elements in the array being arrays that hold individual answers
ans[0] = new Array("MAR Address sent on\naddress bus to main \nmemory\nContents in address\nsent on data bus to\nMDR", "A register which\nholds the results of\nall operatons carried\nout in the ALU", "The simultaneous use\nof several processors\nto perform a single\ntask or seperate\ninstructions", "A single chip\ncontaining\ntwo or more\nindependent\nprocessing units", "A complicated and\nexpensive integrated\ncircuit with\nintstructions that\nexecute in a few\nmachine cycles", "Tiny areas of\nextremely fast\nmemory located in the\nCPU where data is\nstored temporarily", "The part of the\nsystem bus\nwhich carried\nidentification about\nwhere data is read\nfrom or written to", "Operation code, which\ndetermines what to do", "Coordinates and\ncontrols\nactivities of the CPU\nby sending signals to\nother components", "A collection of memory\nchips controlled by its\nown software\nand data is stored\nin pages");
ans[1] = new Array("a21", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a29", "a210");
ans[2] = new Array("a31", "a32", "a33", "a34", "a35", "a36", "a37", "a38", "a39", "a310");
ans[3] = new Array("a41", "Every object in a\ndatabase has a read\nand write timestamp\nThe ealier is applied\nfirst", "Isolation", "a44", "a45", "a46", "a47", "a48", "a49", "a410");
ans[4] = new Array("a51", "a52", "a53", "a54", "a55", "a56", "a57", "a58", "a59", "a510");
ans[5] = new Array("a61", "a62", "a63", "a64", "a65", "a66", "a67", "a68", "a69", "a610");
ans[6] = new Array("a71", "a72", "a73", "a74", "A dynamic data\nstructure\nFirst in Last Out", "a76", "a77", "a78", "a79", "a710");
ans[7] = new Array("a81", "a82", "a83", "a84", "a85", "a86", "a87", "a88", "a89", "a810");
ans[8] = new Array("a91", "a92", "a93", "a94", "a95", "a96", "a97", "a98", "a99", "a910");
ans[9] = new Array("a101", "a102", "a103", "a104", "a105", "a106", "a107", "a108", "a109", "a1010");
ans[10]= new Array("a111", "a112", "a113", "a114", "a115", "a116", "a117", "a118", "a119", "a1110");
ans[11] = new Array("a121", "a122", "a123", "a124", "a125", "a126", "a127", "a128", "a129", "a1210");

// additional arrays to store incorrect answers
var ans2 = new Array();

// elements in the array being arrays that hold individual incorrect answers
ans2[0] = new Array("Memory requests\naddress from MAR\nMDR requests data\non data bus", "A register\nwhich data to be read\nfrom or written to\nmemory", "When more than one\nprocess is in progress\nfrom one processor", "An additional\nprocessor to support\nthe functions\nof the CPU", "A simple, cheap\nintegrated\ncircuit with instructions\ntaking one clock\ncycle", "A small amount of\nexpensive, very fast\nmemory near the CPU\nproviding fast access\nto frequently used data", "The part of the system\nbus which carries data\nread from or being\nwritten to memory", "Determines what the\ninstruction sould\nbe executed on", "Carries command and\ncontrol signals to and\nfrom other components\nusing control lines", "Data is stored on\nplastic discs as\npatterns on the\nsurface in\npits and lans");
ans2[1] = new Array("aA21", "aA22", "aA23", "aA24", "aA25", "aA26", "Making the best algorithm", "aA28", "aA29", "aA210");
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
let index, unit;
let choice, choices;
let screen = 0;
let count = 0;

let showScore, nextQ, wrongAns, answer, question, aBox, a2Box, qBox, saveQuiz;
let side = false;
let score = 0;
let endQuiz;
let prevQ;
let numBox;

var topics = new Array();
var numTopics;


// get the results from the form into an array
choices = localStorage.getItem("topic choices: ");
choice = JSON.parse(choices);

// get the number of topcis from the form and convert to integer
numTopics = localStorage.getItem("number of units: ");
numTopics = parseInt(numTopics, 10);

// if the number of topics chosen is two
if (numTopics == 2){
    //concatenate all the arrays into a singular array
    var allQs = qs[(choice[0]-1)].concat(qs[(choice[1]-1)]);
    var allAns = ans[(choice[0]-1)].concat(ans[(choice[1]-1)]);
    var all2Ans = ans2[(choice[0]-1)].concat(ans2[(choice[1]-1)]);
}

// if the number of topics chosen is three
else if (numTopics ==3){
    //concatenate all the arrays into a singular array
    var allQs = qs[(choice[0]-1)].concat(qs[(choice[1]-1)]);
    allQs = allQs.concat(qs[choice[2]-1]);

    var allAns = ans[(choice[0]-1)].concat(ans[(choice[1]-1)]);
    allAns = allAns.concat(ans[choice[2]-1]);

    var all2Ans = ans2[(choice[0]-1)].concat(ans2[(choice[1]-1)]);
    all2Ans = all2Ans.concat(ans2[choice[2]-1]);
}


// create a new array that holds each question and answer
var qAndA = [];

// use a loop to create objects for each question and answer
for (var i = 0; i < (numTopics*10); i++) {
    qAndA[i] = {
        name: "name" + (i + 1),
        ques: allQs[i],
        rightAns: allAns[i],
        incorrect: all2Ans[i]
    };
}


// Fisher-Yates Sorting algorithm
for (let i = qAndA.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qAndA[i], qAndA[j]] = [qAndA[j], qAndA[i]];
} 



// this function automatically runs once from run time
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
    showScore = new Sprite (850, 50, 150, 50);
    nextQ = new Sprite(850, 575, 175, 30);

    // button to end quiz
    endQuiz = new Sprite(-6000, 6000, 150, 30);
    

    // creating buttons for answer box selection
    aBox = new Sprite(-5500, 5500, 200, 200);
    a2Box = new Sprite(5500, -5500, 200, 200);

    // creating button to display question
    qBox = new Sprite(-450, 4500, 500, 55);

    // creating button to save score
    saveQuiz = new Sprite(150, 570, 150, 50);

    // this button will display the number of the flashcard the user is on
    numBox = new Sprite(1200, -5500, 300, 50);
    
}

// this function continually runs throughout run time
function draw(){

    boxHover();

    boxText(); 

    checkAnswer();

    // don't let the score go below 0
    if (score < -1){
        score = 0;
    }

    // don't let score go above (the number of quizzes x 10)
    // this is the total number of questions for any given selection
    if (score > ((localStorage.getItem("number of units: "))*10)){
        score = ((localStorage.getItem("number of units: "))*10);
    }

    // at the beginning, allow the user to begin quiz by pressing a button
    if (nextQ.mouse.presses() && screen == 0) {
        displayQuiz();
    }


    // end of quiz screen
    if (screen == 4){
        aBox.pos = {x: -1100, y: 1100};
        a2Box.pos = {x: 3000, y: -3750};
        qBox.pos = {x: 450, y: -4760};
        nextQ.pos = {x: -553, y: 1234};
        saveQuiz.pos = {x: 900, y: -900};
    
    }

    
}

function boxText(){
    // putting the text in the relevant boxes to help guide the user
    intro.text=("Put your knowledge to the test with " + ((localStorage.getItem("number of units: "))*10).toString() + " Questions");


    returnMenu.text = "Return to \n menu";


    qBox.text = question;

    // telling the user what index they are within the set of 10 cards
    numBox.text = "Your are on question " + (index + 1).toString() + " of " + ((localStorage.getItem("number of units: "))*10).toString();

    if (screen == 0){
        nextQ.text = "Begin";
        if ((mouseX > 750) && (mouseX < 950) && (mouseY > 560) && (mouseY < 590)){
            nextQ.color = "green";
        }
        else {
            nextQ.color = "DarkKhaki";
    
        }
    }
    if (unit ==0){
        nextQ.text = "Choose your answer";
        nextQ.color = "DarkKhaki";
    }

    // indicate saving score to the user
    if (index == ((numTopics*10)-1)) {
        nextQ.text = "Save Score";
    }

    if (screen == 4){
        showScore.text = "Average Score =\n" + score;
    }

    else{
        showScore.text = "Score = " + score;
    }
}



// function to display the quiz to the user
function displayQuiz() {

    // set the index to 0
    index = 0;
    screen = 3;
    side = false;
    unit = 0;

    // reposition the question and answer boxes
    aBox.pos = { x: width / 2 + 250, y: height / 2 + 100 };
    a2Box.pos = { x: width / 2 - 250, y: height / 2 + 100 };
    qBox.pos = { x: width / 2, y: height / 2 - 100 };
    numBox.pos = {x: width/2, y: 120};

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

    
    
}

function checkAnswer(){
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
            if (index <=((numTopics*10)-2)){

                // let the boxes contain the next questions and answers
                question = qAndA[index+1].ques;
                answer = qAndA[index+1].rightAns;
                wrongAns = qAndA[index+1].incorrect;

                // array holding the correct and incorrect answer
                let answersText = [answer, wrongAns];

                // let one of the boxes hold a random of either the right or wrong answer
                aBox.text = random(answersText);
            }
            

            // if one box contains the right answer, let the other box have the incorrect answer
            if (aBox.text == answer) {
                a2Box.text = wrongAns;
            }

            //vice versa
            else if (aBox.text == wrongAns) {
                a2Box.text = answer;
            }

            // from the first to second to last question, allow the index to increase
            if (index <=((numTopics*10)-2)){
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

            // let one of the boxes hold a random of either the right or wrong answer
            let answersText = [answer, wrongAns];
            aBox.text = random(answersText);

            // if one box contains the right answer, let the other box have the incorrect answer
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
    

    // at the last question, the user is able to save their score
    else if (nextQ.mouse.presses() && index == ((numTopics*10)-1)) {
        saveScore();
    }

}




// function to reset the screen when the reset button is clicked
// function to reset the screen through the backround and buttons

function returnToMenu(){
    screen = 0;
    index = 0;
    unit = null;
    score = 0;
    aBox.pos = {x: -5500, y: 5500};
    a2Box.pos = {x: 3000, y: -3750};
    qBox.pos = {x: 450, y: -4760};
    saveQuiz.pos = {x:150, y: 575};
    nextQ.pos = {x: 850, y: 575};
    numBox.pos = {x: 1200, y:-1200};


    background("#f2e8cf");

}

function saveScore() {
    screen = 4;
    background("#b5838d");
    aBox.pos = {x: -1100, y: 1100};
    a2Box.pos = {x: 3000, y: -3750};
    qBox.pos = {x: 450, y: -4760};
    nextQ.pos = {x: -553, y: 1234};


    // creating new scores to save based on user scores
    if (score < 0){
        score = 0;
    }

    else if (score > 0) {
        score = score / numTopics;
        score = Math.trunc(score);
    }

    text("Your average score was: " + (score).toString() + "\n This has been saved and\nyou can return to menu", width/2, 400);


    // using a for loop that goes up to the number of topics the user chose
    // each time the loop is executed, the next index in the array of choices is reached
    // for this choice, the average score is saved
    for (var count = 0; count < numTopics; count ++){
        let newUnit = (choice[count]).toString();
        let newScore = (score).toString();

        // initially getting the array for the scores from local storage
        let setScores = localStorage.getItem(newUnit + " Scores: ");

        // checking whether the array that has been retrieved exists or not
        // if it doesn't exist, the value will be null so create a new one
        if (setScores == null){
            let length = scores[choice[count]-1].length;
            scores[choice[count]-1][length] = newScore;
            

            let newScores = JSON.stringify(scores[choice[count]-1]);

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

        text("Your scores for unit " + newUnit + " are: " + localStorage.getItem(newUnit + " Scores: "), width/2, (height/2 + ((count + 5) * 10)));

    }  
  

        
}

function boxHover(){
    if (unit!=null){
        if ((mouseX > 625) && (mouseX < 875) && (mouseY > 300) && (mouseY < 500)){
            aBox.color = "LightGreen";
        }

        else{
            aBox.color = "SlateBlue";

        }
        if ((mouseX > 150) && (mouseX < 350) && (mouseY > 300) && (mouseY < 500)){
            a2Box.color = "LimeGreen";
        }

        else {
            a2Box.color = "cyan";

        }
    }

    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 20) && (mouseY < 75)){
        returnMenu.color = "red";
    }
    else {
        returnMenu.color = "DarkOrange";

    }
}

// this function is run when the form is submitted
// it checks what units have been selected and the number of units
function multChoice() {
    // get all the selected units
    var units = document.forms[0];

    // variable for index
    var i;

    // getting each topic that has been selected and adding to an array
    for (i = 0; i < units.length; i++) {
        if (units[i].checked) {
            topics[topics.length] = (i+1).toString();
        }
    }

    // getting the number of topics
    numTopics = topics.length;

    //If the number of topics is greater than 3 or less than 2
    if (numTopics <2 || numTopics >3){

        //reset the topics
        topics.length = 0;

        // tell the user they need to choose 2-3 units
        alert("please choose 2 or 3 units!");

        //prevent the form from submission
        event.preventDefault();
        someBug();
        return false;
    }

    // the user has chosen 2 - 3 units
    else{

        //set the number of topics and the units to local storage
        localStorage.setItem("number of units: ", numTopics.toString());
        localStorage.setItem("topic choices: ", JSON.stringify(topics));

        //tell the user what topics they chose
        alert("units = " + JSON.stringify(numTopics) + ", selection = " + JSON.stringify(topics));
    }
    
}



