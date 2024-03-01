//array to hold questions
var qs = new Array();

// elements in the array being arrays that hold individual questions
qs[0] = new Array("How is data fetched in the FDE cycle?", "What is the accumulator?", "What is a parallel system?", "What is a multicore system?", "What is a CISC processor?", "What is a register?", "What is the address bus?", "What is the opcode?", "What is the control unit?", "What is flash storage?");
qs[1] = new Array("What is a device driver?", "What is a multi user\noperating system", "What is a multi tasking\noperating system?", "How does the ISR work within the\nFDE cycle?", "What is a linker?", "What is syntax analysis?", "What is optimisation?", "What is an interpreter?", "Why is bespoke software used?", "What is the BIOS?");
qs[2] = new Array("What is a class?", "What is direct addressing?", "What is indexed addressing used for?", "What is an object?", "What is a good algorithm?", "What is the waterfall lifecycle?", "What is extreme programming?", "What is functional programming?", "What is a method?", "What is indirect addressing?");
qs[3] = new Array("What is a deadlock?", "What is timestamp ordering?", "What does I stand for in ACID?", "What is asymmetric encryption?", "What is referential integrity?", "What are some methods of selecting data?", "What is a secondary key?", "What is a flat file?", "What is 1NF?", "What is redundancy?");
qs[4] = new Array("What is HTML", "What is an identifier?", "What is a CSS class?", "What is the Internet layer in the TCP/IP stack?", "What is the TCP/IP stack?", "What is a router?", "What is the star topology?", "How is encryption used in netwrok securty?", "What is a damping factor?", "What is client side processing?");
qs[5] = new Array("What is a circular shift?", "Whar is an overflow error?", "What is a character set?", "What is an arithmetic shift?", "What is unicode?", "Convert 204 from denart to hexadecimal", "What is -3/16 in two's complement notation?", "What is normalisation?", "What is an OR mask?", "What is 00010101+00010101");
qs[6] = new Array("What is a tuple?", "What is a hash table?", "What is a graph?", "What is a tree?", "What is a Stack?", "What is a Record?", "What is an Array?", "What is a circular queue?", "How do you add an item to a queue?", "What is an ajency matrix?");
qs[7] = new Array("What are D type flip flops used for?", "What is the distribution law?", "What is the association law?", "What is a half adder?", "What is the double negation law?", "What is a full adder?", "What are De Morgan's Laws?", "What is the commutation law?", "What is a truth table?", "What is a logic gate diagram?");
qs[8] = new Array("How are colour paradigms used?", "What is censorship?", "What is the Regulation of Investigatory Powers Act?", "What is the Data Protection Act?", "What is the Computer Misuse Act?", "What is the Copyright Designs and Patents Act?", "What are cultural issues?", "What do environmental effects include?", "What are moral issues?", "What law was made in 1990?");
qs[9] = new Array("What is abstraction?", "What is thinking ahead?", "What is thinking concurrently?", "What is pipelining?", "What is divide and conquer?", "What is heuristics?", "What is caching?", "What is visualisation?", "What is performance modelling?", "What is thinking procedurally?");
qs[10] = new Array("What are global variables?", "What is passing by reference?", "What is passing by value?", "What are local variables?", "What is encapsulation?", "What is sequence?", "What is recursion?", "How does an IDE use a step breaker?", "What is a procedure?", "What is a private attribute?");
qs[11]= new Array("What is the A* Algorithm?", "What is the polynomial time complexity?", "What is the bubble sort?", "What is Dijkstra's shortest path algorithm?", "What is breadth-first traversal", "What is post-order traversal?", "What is the merge sort?", "What is in-order traversal?", "What is a stack?", "What is pre-order traversal?");

// array to hold answers
var ans = new Array();

// elements in the array being arrays that hold individual answers
ans[0] = new Array("MAR Address sent on\naddress bus to main \nmemory\nContents in address\nsent on data bus to\nMDR", "A register which\nholds the results of\nall operatons carried\nout in the ALU", "The simultaneous use\nof several processors\nto perform a single\ntask or seperate\ninstructions", "A single chip\ncontaining\ntwo or more\nindependent\nprocessing units", "A complicated and\nexpensive integrated\ncircuit with\nintstructions that\nexecute in a few\nmachine cycles", "Tiny areas of\nextremely fast\nmemory located in the\nCPU where data is\nstored temporarily", "The part of the\nsystem bus\nwhich carried\nidentification about\nwhere data is read\nfrom or written to", "Operation code, which\ndetermines what to do", "Coordinates and\ncontrols\nactivities of the CPU\nby sending signals to\nother components", "A collection of memory\nchips controlled by its\nown software\nand data is stored\nin pages");
ans[1] = new Array("Enables operating systems\nto access hardware\nfunctions\nand provides an\ninterface to that device", "Allows multiple users\nto log in and connect\nfrom different machines\nat the same time", "A system capable of\nrunning more than\none program at once", "Push current contents\nof registers and PC\nonto a stack\nExecute interrupt\nPop the stack", "Allows already\ncompiled object code\nfiles to be combined\nwith the compiled\nprogram", "Language statements\nare checked against\nrules of the\nlanguage", "Attempts to reduce\nthe execution time\nof the object program", "Translates and executes\na program one\nstatement at a\ntime", "Custom-written software\nwhich suits particular\nrequiremnets", "Boot the computer\nat start-up by\ntesting sytem hardware\ncomponents and loading\nthe OS into RAM");
ans[2] = new Array("A blueprint for\ncreating objects by\ndefining attributes and\nmethods", "The operand holds\nthe memory address\nwhere\ndata to be operated on\nis retrieved", "Arrays", "An instance of\na class", "Clear steps that\nproduce the correct\noutput for any valid\ninput\nTerminates at some\npoint\nExecute efficiently", "Each step is\ncompleted and\ndocumented\none at a time\nbefore the next is\nbegun", "An agile software\ndevelopment\nmethodology\nintended to improve\nquality, responsiveness\nand productivity", "Statements are written\nas a series of functions\nwhich accept input\ndata as arguments and\nreturn an output", "Operations on\nattributes which allow\nthe object to\nperform actions", "Uses the address\nfield to hold the adress\nof a location that\ncontains the required\naddress");
ans[3] = new Array("When two users\nare attempting to update\ntwo records and\nneither can proceeed", "Every object in a\ndatabase has a read\nand write timestamp\nThe ealier is applied\nfirst", "Isolation", "Recipient's public key\nencrypts before sending\nDecrypted with recipient's\nprivate key", "Not allowing a record\nto be deleted if\nthere is a related record\nin another table", "In a database\nsuch as with SQL", "A key field which\ncan be used as an index\nfor faster lookups", "A database consisting\nof information about a\nsingle entity", "Contains no\nrepeating attribute", "A field is repeated\nin two or more\ntables");
ans[4] = new Array("A high level\nlanguage used to give\nthe structure of a\nweb page", "A variable given to\na HTML element", "A variable given to\nmultiple HTML elements\nthat identifies them\nas a collective", "Adds the source\nand destination IP\naddresses", "A set of networking\nprotocols that\nhas four layers", "Connect at least two\nnetworks and route\npackets to its\ndestination", "Has a centrol node\nwhich acts as a router\nto transmit messages", "Transforming data from\none form to another\nto prevent\nunautorised parties from\nunderstanding", "Probability of a random\nweb user reaching a\npage", "Operations performed by\nthe application on a\nlocal computer");
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
ans2[1] = new Array("A specialised, limited\nOS fit inside a device", "Software is spread\nover a collection of\nindependent, networked\ncommunicating and\nseparate nodes", "A parallel processing\nsystem which spreads\nthe load over multiple\ncomputers", "The OS sets an\ninterrupting clock to\ngenerate interrupts at\nspecific times\nwhen scheduling", "A collection of pre-\ncompiled routines which\ncan be incorporated\ninto a program", "The standard components\nof each statement are\nreplaced by tokens\nand entered into a\nsymbol table", "Making the best\nalgorithm", "A program that\ntranslates a high-\nlevel langage program\nsource code into\nmachine code at\nonce", "Software that performs\na single specific task\nor set of tasks", "Instructions sent from\nROM to the CPU which\nsends signals to all\nconnected components");
ans2[2] = new Array("The creation of a\nnew object using a\nconstructor", "The operand is the\nactual value to be\noperated on", "Queues", "Operations on data", "Has a base case\nCalls itself\nStopping condition\nreachable in a\nfinite number of\ncalls", "Stages of the systems\nlife cycle are iterated\nto produce prototypes", "An agile\ndevelopment\nmethodology\nwhich uses prototyping\nto produce within a\nstrict time limit the\nproduct which is good\nenough", "The statements are\ngiven to the\nprogramming\nlanguage,\nwhich describes the\nproblem and a\nresult is returned", "Variables which\ndescribe\nthe object", "The address field\nholds an address\nwhich holds the data");
ans2[3] = new Array("A record is locked\nwhenever a user\nretrieves it for\nediting until the\ntransaction is complete", "Transactions are \nordered based on \ndependences on \neachother", "Integrity", "The private key is used to\nencrypt and decrypt data", "There are no non-\nkey dependencies", "Using automated methods such as\nscanners, cameras\nand sensors", "A primary key which\nconsists of more than\none attribute", "A category of object,\nperson, event or thing\nof interest", "All attributes are\ndependent on the key", "There is no\nduplication of data");
ans2[4] = new Array("A high level\nlanguage used to give\ndesign to\nthe structure of a\nweb page", "A variable given to\nmultiple HTML elements", "A variable given to\na HTML element\nthat uniquely\nidentifies it", "Adds the unique\nMAC addresses of the\nsource and destination\ncomputers", "Creates a direct link/nbetween two devices for\nthe duration of\nthe communication", "Used when networks\nhave different protocols\nto move packets to\ntheir destination", "Each node has a\nconnection to every other\nnode by\ntransmitting data\nacross intermediate nodes", "A security checkpoint\ndesigned to prevent\nunauthorised access\nbetween two networks", "The number of outward\nlinks", "Operations performed\nby a remove server");
ans2[5] = new Array("aA61", "aA62", "aA63", "aA64", "aA65", "aA66", "aA67", "aA68", "aA69", "aA610");
ans2[6] = new Array("aA71", "aA72", "aA73", "aA74", "A dynamic data\nstructure\nFirst in First Out", "aA76", "aA77", "aA78", "aA79", "aA710");
ans2[7] = new Array("aA81", "aA82", "aA83", "aA84", "aA85", "aA86", "aA87", "aA88", "aA89", "aA810");
ans2[8] = new Array("aA91", "aA92", "aA93", "aA94", "aA95", "aA96", "aA97", "aA98", "aA99", "aA910");
ans2[9] = new Array("aA101", "aA102", "aA103", "aA104", "aA105", "aA106", "aA107", "aA108", "aA109", "aA1010");
ans2[10] = new Array("aA111", "aA112", "aA113", "aA114", "aA115", "aA116", "aA117", "aA118", "aA119", "aA1110");
ans2[11] = new Array("aA121", "aA122", "aA123", "aA124", "aA125", "aA126", "aA127", "aA128", "aA129", "aA1210");

// array to hold all units of scores
var scores = new Array();

// individual arrays for scores
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

// labels on main menu to select unit
let box_text = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12"];

// individual introduction and unit selection boxes
let intro, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;

// box to return menu
let returnMenu;

// variables to get user choice
let choice, unit, index;

// variable to switch between quiz and menu
let screen = 0;
let count = 0;

// buttons for quiz GUI
let showScore, nextQ, wrongAns, answer, question, aBox, a2Box, qBox, tellAns;
let side = false;

//variable to hold score
let score = 0;
let endQuiz;

let numBox;


// variables to get selection for multiple units in quizzes
var topics = new Array();
var numTopics;



// create a new array that holds each question and answer
var qAndA = [];


// this function automatically runs once at the beginning of run time
function setup(){

    //background and text settings
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

    // creating button to tell the user if their answer is correct
    tellAns = new Sprite(150, 570, 150, 50);

    // this button will display the number of the flashcard the user is on
    numBox = new Sprite(1200, -5500, 300, 50);
}

// this function is continually run throughout run time
function draw(){

    // calling the function to change colours on interactable buttons
    boxHover();

    boxText();

    

    // changing screens when the user clicks any of the boxes
    if (box1.mouse.presses() || box2.mouse.presses() || box3.mouse.presses() || box4.mouse.presses() || box5.mouse.presses() || box6.mouse.presses() || box7.mouse.presses() || box8.mouse.presses() || box9.mouse.presses() || box10.mouse.presses() || box11.mouse.presses() || box12.mouse.presses()) {
        selectQuiz();
    }

    // call the function to validate whether the correct answer has been chosen
    checkAnswer();

    // don't let the score go below 0
    if (score < -1){
        score = -1;
    }
    
    
}

// this function is called from the draw function
// it ensures that text is always on the boxes
function boxText(){
    // putting the text in the intro text box
    if (unit !=null){
        intro.text=("Practice unit " + (unit + 1).toString());
        nextQ.text = "Select an answer\nout of the two";
    }

    // default text to guide the user
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

    // this button displays the score to the user
    showScore.text = "Current Score = " + score;


    // the question box holds the current question
    qBox.text = question;

    // telling the user what index they are within the set of 10 cards
    numBox.text = "Your are on question " + (index + 1).toString() + " of 10";


    
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
    }
    if (box2.mouse.presses()) {
        choice = 2;
        background("#f2d0a9");
    }

    else if (box3.mouse.presses()) {
        choice = 3;
        background("#d88c9a");
    }

    else if (box4.mouse.presses()) {
        choice = 4;
        background("#84a98c");
    }

    else if (box5.mouse.presses()) {
        choice = 5;
        background("#f2d0a9");
    }

    else if (box6.mouse.presses()) {
        choice = 6;
        background("#d88c9a");
    }

    else if (box7.mouse.presses()) {
        choice = 7;
        background("#84a98c");
    }

    else if (box8.mouse.presses()) {
        choice = 8;
        background("#f2d0a9");
    }

    else if (box9.mouse.presses()) {
        choice = 9;
        background("#d88c9a");
    }

    else if (box10.mouse.presses()) {
        choice = 10;
        background("#84a98c");
    }

    else if (box11.mouse.presses()) {
        choice = 11;
        background("#f2d0a9");
    }

    else if (box12.mouse.presses()) {
        choice = 12;
        background("#d88c9a");
    }

    // return choice to display that unit's notes
    displayQuiz(choice);


}


// this function puts the answer boxes on the screen
// it then creates an array to hold all questions and answers using OOP
// this is then put in random order and displayed
function displayQuiz(choice) {
    // using the user's choice to begin the quiz
    unit = choice - 1;
    index = 0;
    side = false;
    aBox.pos = { x: width / 2 + 250, y: height / 2 + 100 };
    a2Box.pos = { x: width / 2 - 250, y: height / 2 + 100 };
    qBox.pos = {x: width / 2, y: height / 2 -100};
    numBox.pos = {x: width/2, y: 120};

    
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
    // randomise the order of the array
    for (let i = qAndA.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [qAndA[i], qAndA[j]] = [qAndA[j], qAndA[i]];
    } 

    // set the question to be the object's question attribute
    question = qAndA[index].ques;

    // set the answer to be the object's answer attribute
    answer = qAndA[index].rightAns;

    // set the wrong answer to be the object's wrong answer attribute
    wrongAns = qAndA[index].incorrect;

    // create an array to hold both answers
    let answersText = [answer, wrongAns];

    // give the first box a random of the two answers
    aBox.text = random(answersText);

    // give the second box the alternative
    if (aBox.text == answer){
        a2Box.text = wrongAns;
        
    }
    else if (aBox.text == wrongAns){
        a2Box.text = answer;
        
    }
    
}

// this function checks whether the answer that the user chose was correct or not
// the score is changed depending on the answer chosen
function checkAnswer(){
    // return back to summary notes when the return button is clicked
    if (returnMenu.mouse.presses()) {
        returnToMenu();
    }


    // Using selection to change the text on boxes each time the user answers a question
    else if (aBox.mouse.presses() || a2Box.mouse.presses() && 0<=index<=9) {
        // if the user answers correctly
        if ((aBox.text == answer && aBox.mouse.presses()) || (a2Box.text == answer && a2Box.mouse.presses())){
            // let them know
            tellAns.text = "correct!";

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
            

            // give the second box the alternative answer
            if (aBox.text == answer) {
                a2Box.text = wrongAns;
            }
            else if (aBox.text == wrongAns) {
                a2Box.text = answer;
            }

            // keep going to the next question until the 9th question is reached
            if (index <=8){
                index = index + 1;
            }
            
        } 

        // if they answer incorrectly, let them have another go, but don't give them a new score
        else{
            // let them know
            tellAns.text = "incorrect, have\nanother go!"; 
            
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

    // at the last question, the user is able to save their score
    if (nextQ.mouse.presses() && index == 9){
        saveScore();
    }
    
    // telling the user to save their score
    if (index == 9) {
        nextQ.textSize = 17;
        nextQ.text = "Final Question -\nClick To Save Score";
        
    }

}




// function to reset the screen when the reset button is clicked
// function to reset the screen through the backround and buttons
function returnToMenu(){
    // reset variables to 0
    screen = 0;
    index = 0;
    unit = null;
    score = 0;

    // move the question and answer boxes off canvas
    aBox.pos = {x: -5500, y: 5500};
    a2Box.pos = {x: 3000, y: -3750};
    qBox.pos = {x: 450, y: -4760};
    tellAns.pos = {x:150, y: 570};
    tellAns.text = "";
    numBox.pos = {x: 1200, y:-1200};


    background("#f2e8cf");
    
    // put the boxes to choose unit back onto canvas
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


// this function is called once the quiz is completed
// it saves the score to local storage either by
// using an empty array and setting this to local storage
// retrieving the array, updating with the new score and setting to local storage
function saveScore() {
    background("#b5838d");
    aBox.pos = {x: -5500, y: 5500};
    a2Box.pos = {x: 3000, y: -3750};
    qBox.pos = {x: 450, y: -4760};
    nextQ.pos = {x: -553, y: 1234};
    tellAns.pos = {x: 5500, y: -5500};

    // converting the integer values for the unit and the score into a string
    if (score < 0){
        score = 0;
    }

    // do not let the score go above 10
    if (score >10){
        score = 10;
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


// this function uses the coordinates of the mouse with the set locations of the boxes
// to change the colour of the box when hovering over it
function boxHover(){
        //box for unit 1
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 125) && (mouseY < 215)) {
        box1.color = "blue";
    }
    // else, keep the colour as purple
    else {
        box1.color = "purple";
    }

    //box for unit 5
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 275) && (mouseY < 365)) {
        box5.color = "blue";
    }
    // else, keep the colour as yellow
    else {
        box5.color = "yellow";
    }

    //box for unit 9
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 450) && (mouseY < 540)) {
        box9.color = "blue";
    }
    // else, keep the colour as pink
    else {
        box9.color = "pink";
    }

    //box for unit 2
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 300) && (mouseX < 450) && (mouseY > 125) && (mouseY < 215)) {
        box2.color = "blue";
    }

    // else, keep the colour as majenta
    else {
        box2.color = "majenta";
    }

    //box for unit 6
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 300) && (mouseX < 450) && (mouseY > 275) && (mouseY < 365)) {
        box6.color = "blue";
    }
    // else, keep the colour as brown
    else {
        box6.color = "brown";
    }

    //box for unit 10
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 300) && (mouseX < 450) && (mouseY > 450) && (mouseY < 540)) {
        box10.color = "blue";
    }
    // else, keep the colour as green
    else {
        box10.color = "green";
    }

    //box for unit 3
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 550) && (mouseX < 700) && (mouseY > 125) && (mouseY < 215)) {
        box3.color = "blue";
    }
    // else, keep the colour as red
    else {
        box3.color = "red";
    }

    //box for unit 7
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 550) && (mouseX < 700) && (mouseY > 275) && (mouseY < 365)) {
        box7.color = "blue";
    }
    // else, keep the colour as blueviolet
    else {
        box7.color = "blueviolet";
    }

    //box for unit 11
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 550) && (mouseX < 700) && (mouseY > 450) && (mouseY < 540)) {
        box11.color = "blue";
    }
    // else, keep the colour as darkcyan
    else {
        box11.color = "darkcyan";
    }

    //box for unit 4
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 125) && (mouseY < 215)) {
        box4.color = "blue";
    }
    // else, keep the colour as darkseagreen
    else {
        box4.color = "darkseagreen";
    }

    //box for unit 8
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 275) && (mouseY < 365)) {
        box8.color = "blue";
    }

    // else, keep the colour as khaki
    else {
        box8.color = "khaki";
    }


    //box for unit 12
    // if the mouse is on the box, change colour to blue
    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 450) && (mouseY < 540)) {
        box12.color = "blue";
    }
    // else, keep the colour as olive
    else {
        box12.color = "olive";
    }

    // if hovering over return to menu, change colour to red
    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 20) && (mouseY < 75)){
        returnMenu.color = "red";
   
    }

    // else, keep the colour as dark orange
    else {
        returnMenu.color = "DarkOrange";
       

    }

    
    // during the quiz, if hovering over the answer box, change the colour to green
    if (unit!=null){
        if ((mouseX > 650) && (mouseX < 850) && (mouseY > 300) && (mouseY < 500)){
            aBox.color = "LightGreen";
        
        }

        // else, keep the colour as blue
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

    // hover button to save the score on the last question
    if (index==9){
        if ((mouseX > 760) && (mouseX < 940) && (mouseY > 540) && (mouseY < 600)){
            nextQ.color = "green";
        }
        else {
            nextQ.color = "DarkKhaki";
    
        }
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

