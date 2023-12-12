let boxes;
let userChoice;
let screen = 0;
let returnMenu;
let intro_text = "Study these notes to help catch up on content";
let unitNotes = ["FDE Cycle = Fetch, Decode, Execute", "Memory Management", "The Waterfall Model", "Asymmetric Encryption", "Structure of the Internet", "Binary Arithmetic", "Abstract Data Types", "Boolean Algebra", "The Data Protection Act", "Thinkint Abstractly", "Iteration", "A* Algorithm"];
let unitFrame = ["Here are the notes for unit ", "Key terms and definitions: ", "Key advantages: ", "Key disadvantages: "];
let box_text = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12"];
let intro, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12; 


function setup() {
    textAlign(CENTER);
    createCanvas(1000, 600);
    background("#ccd5ae");
    intro = new Sprite(width/2, 50, 500, 55);
    returnMenu = new Sprite(150, 50, 150, 50);

    

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
    
    
}

function draw(){
    
    intro.text=(intro_text);

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

    if (box1.mouse.presses() || box2.mouse.presses() || box3.mouse.presses()) {
        selectUnit();
    }

    if (returnMenu.mouse.presses()) {
        returnToMenu();
    }
    
    


}

function returnToMenu(){
    screenZero();
}

function screenZero() {
    screen = 0;
    background("green");
    
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

function selectUnit() {
    
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
    

    if (box1.mouse.presses()) {
        choice = 1;
        background("#a3cef1");
        text("Here are the notes for unit 1", width/2, height/2);
    }
    if (box2.mouse.presses()) {
        choice = 2;
        background("yellow");
        text("Here are the notes for unit 2", width/2, height/2);
    }

    else if (box3.mouse.presses()) {
        choice = 3;
        background("pink");
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

    displayNotes(choice);

}


function displayNotes(choice){
    text(unitNotes[choice-1], width/2, height/2 + 100);
}