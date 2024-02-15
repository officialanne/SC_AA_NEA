let boxes;
let choice;
let screen = 0;
let returnMenu;
let intro_text = "Study these notes to help catch up on content";
let unitNotes = ["Components of a Computer", "Systems Software", "Software Development", "Exchanging Data", "Networks and Web Technologies", "Data Types", "Data Structures", "Boolean Algebra", "Legal, Moral, Cultural and Ethical Issues", "Elements of Computational Thinking", "Programming Techniques", "Algorithms"];
let unitFrame = ["Here are the notes for unit ", "Key terms and definitions: ", "Key advantages: ", "Key disadvantages: "];
let box_text = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12"];
let intro, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
let textBox1, textBox2, textBox3;
let numSubtopics = 2;

function setup() {

    // creating canvas
    textAlign(CENTER);
    createCanvas(1000, 600);
    background("#e0e1dd");
    textSize(20);

    // creating intro text box
    intro = new Sprite(width/2, 50, 500, 55);

    // creating button to return to summary notes menu
    returnMenu = new Sprite(150, 50, 150, 50);

    

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

    textBox1 = new boxes.Sprite(-1000, 1000, 300, 400);
    textBox2 = new boxes.Sprite(1000, -1000, 300, 400);
    textBox3 = new boxes.Sprite(1500, -1500, 300, 400);
    
    
}

function draw(){
    
    // putting the text in the intro text box
    if (choice == null || screen == 0){
        intro.text=(intro_text);
    }
    else{
        intro.text = ("Study Unit " + choice.toString() + " - " + unitNotes[choice-1]);
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

    // changing screens when the user clicks any of the boxes
    if (box1.mouse.presses() || box2.mouse.presses() || box3.mouse.presses() || box4.mouse.presses() || box5.mouse.presses() || box6.mouse.presses() || box7.mouse.presses() || box8.mouse.presses() || box9.mouse.presses() || box10.mouse.presses() || box11.mouse.presses() || box12.mouse.presses()) { 
        selectUnit();
    }

    // return back to summary notes when the return button is clicked
    if (returnMenu.mouse.presses()) {
        returnToMenu();
    }
    
    


}

// function to reset the screen when the reset button is clicked
function returnToMenu(){
    screenZero();
}

// function to reset the screen through the backround and buttons
function screenZero() {
    screen = 0;
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

    textBox1.pos = {x: 1000, y: -1000};
    textBox2.pos = {x: -1000, y: 1000};
    textBox3.pos = {x: 1500, y: -1500};

}

// function to reposition buttons and change the screen to display notes for a unit
function selectUnit() {
    screen = 1;
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
        text("Structure and Function \nof the Processor", 175, 150);
        text("Types of Processor", width/2, 150);
        text("Input, Output and Storage", 825, 150);
        numSubtopics = 3;
        textBox1.text = ("The ALU carries out arithmetic\nand boolean calculations\n\n The CU manages the execution\nof instructions\n\nRegisters are tiny areas of very\nfast memory to store data\ninside the CPU and include the\nPC, Accumulator, MAR, MDR\nand the CIR\n\nBuses are a parallel set of wires\nconnecting components, including\nthe data, address and control bus");
        textBox2.text = ("CISC processors have complex\ninstructions which execute in a\nfew machine cycles\n\nRISC processors are simple and\ncheap, enabling pipelining but\nuse more RAM\n\nMulticore processors are a single\nchip containing several\nindependent CPUs\n\nParallel Systems are the use of\nseveral processors simultaneously\nto perform a job split into tasks");
        textBox3.text = ("An input device accepts data\npresented in machine-readable\nform and passes it into a\ncomputer system\n\nAn output device converts signals\nor data from the computer into\nhuman-readable form\n\nRAM is used to store programs\nand data in use temporarily\nIt is volatile and faster to access\nthan ROM\n\nROM is read-only and non-volatile\nIt stores the bootstrap and BIOS");

    }
    if (box2.mouse.presses()) {
        choice = 2;
        background("#f2d0a9");
        text("Systems Software", 250, 150);
        text("Applications Generation", 750, 150);
        numSubtopics = 2;
        textBox1.text = ("An operating system is a set of\nprograms that manages the\ncomputer for the user\n\nMemory management includes\npaging, segmentation and\nvirtual memory\n\nAn interrupt is a signal generated\nby sources that causes a break\nin the execution\n\nScheduling includes round robin,\nfirst come first served, multi-level\nfeedback queues, shortest job first\nand shortest remaining time");


    }

    else if (box3.mouse.presses()) {
        choice = 3;
        background("#d88c9a");
        text("Software Development", 250, 150);
        text("Types of Programming Language", 750, 150);
        numSubtopics = 2;
    }

    else if (box4.mouse.presses()) {
        choice = 4;
        background("#84a98c");
        text("Compression, Encryption and Hashing", 250, 150);
        text("Databases", 750, 150);
        numSubtopics = 2;
    }

    else if (box5.mouse.presses()) {
        choice = 5;
        background("#f2d0a9");
        text("Networks", 250, 150);
        text("Web Technologies", 750, 150);
        numSubtopics = 2;
    }

    else if (box6.mouse.presses()) {
        choice = 6;
        background("#d88c9a");
        text("Data Types and \nCharacter Sets", 175, 150);
        text("Binary Arithmetic", width/2, 150);
        text("Bitwise Manipulation \nand Masks", 825, 150);
        numSubtopics = 3;
    }

    else if (box7.mouse.presses()) {
        choice = 7;
        background("#84a98c");
        text("Arrays, Records, \nLists, Tuples", 250, 150);
        text("Structures to Store Data", 750, 150);
        numSubtopics = 2;
    }

    else if (box8.mouse.presses()) {
        choice = 8;
        background("#f2d0a9");
        text("Boolean Logic & \nLogic Gates", 175, 150);
        text("Manipulate, Derive or Simplify \nExpressions / Statements", width/2, 150);
        text("D Type Flip Flops, \nHalf and Full Adders", 825, 150);
        numSubtopics = 3;
    }

    else if (box9.mouse.presses()) {
        choice = 9;
        background("#d88c9a");
        text("Computing Related Legislation", 250, 150);
        text("Moral and Ethical Issues", 750, 150);
        numSubtopics = 2;
    }

    else if (box10.mouse.presses()) {
        choice = 10;
        background("#84a98c");
        text("Computational Thinking", 250, 150);
        text("Computational Methods", 750, 150);
        numSubtopics = 2;

    }

    else if (box11.mouse.presses()) {
        choice = 11;
        background("#f2d0a9");
        text("Programming Contructs & \nTechniques", 175, 150);
        text("Modularity", width/2, 150);
        text("IDEs", 825, 150);

        numSubtopics = 3;
    }

    else if (box12.mouse.presses()) { 
        choice = 12;
        background("#d88c9a");
        text("Efficiency of Algorithms", 250, 150);
        text("Standard Algorithms", 750, 150);
        numSubtopics = 2;
    }

    // return choice to display that unit's notes
    displayNotes(numSubtopics);

}


// function to display notes depending on user click
function displayNotes(numSubtopics){
    if (numSubtopics == 2){
        textBox1.pos = {x: width/2 - 250, y: 385};
        textBox2.pos = {x: width/2 + 250, y: 385};
    }

   if (numSubtopics == 3){
        textBox1.pos = {x: width/2 - 325, y: 385};
        textBox2.pos = {x: width/2, y: 385};
        textBox3.pos = {x: width/2 + 325, y: 385};

    }
}
