var qs = new Array();
qs[0] = new Array("What happens during the Fetch part\nof the FDE cycle?", "Name three differences between the\nvon Neumann and Harvard Architectures", "How does clock speed\naffect CPU performance?", "Describe the SIMD contemporary\nprocessor architecture", "How does the number of cores\naffect CPU performance?", "Describe a GPU", "Describe and evaluate magnetic storage \ndevices", "What is virtual storage?", "Describe and evaluate optical storage \ndevices", "What is Pipelining?");
qs[1] = new Array("Define utility programs / software \nand give an example", "Device Drivers", "Embedded", "Real Time", "Device Drivers", "Virutal Machines", "Describe open source vs closed source\nsoftware", "Name 3 different translators", "What is syntax analysis", "What are linkers and loaders?");
qs[2] = new Array("Describe Extreme Programming (XP)", "What is a drawback of the spiral model?", "Evaluate rapid application development", "Describe Polymorphism", "What is immediate addressing?", "Describe procedural languages", "What is encapsulation?", "Describe 3 Assembly Language Instructions", "Describe the agile model", "Name 3 characteristics of a\ngood algorithm");
qs[3] = new Array("What is Asymmetric Encryption?", "Give 3 Characteristics of an Ideal\nCryptograpic Hash Function", "What is Record Locking?", "Describe Second Normal Form", "What is Run-Length Encoding?", "What is dictionary coding?", "What is a foreign key?", "What is Consistency in ACID?", "Name 3 Methods of capturing\ndata", "What is indexing in a database?");
qs[4] = new Array("What is a protocol?", "Name 3 differences between\nclient-server and peer to peer", "Describe a proxy", "What is a firewall?", "Describe the DNS", "What is the PageRank Algorithm?", "Name 3 pieces of network\nhardware", "Describe the Transport Layer in the\nTCP/IP stack", "What is a virus?", "What is server side processing?");
qs[5] = new Array("What is an advantage of ASCII?", "What is a disadvantage by Unicode?", "What is a locigal shift?", "What is a circular shift?", "What is an arithmetic shift?", "What is an underflow error?", "Describe Sign and Magnitude", "Describe Two's Complement", "What is normalisation?", "What is casting?");
qs[6] = new Array("What is a tree?", "What is a list?", "What is a dynamic data structure?", "How would you remove an item from\na queue?", "How would you add an item to\na stack?", "What is a directed graph?", "What is a static data structure?", "What is a binary search tree?", "Describe a hash table", "What is an undirected graph?");
qs[7] = new Array("Describe the association law", "What is a half adder?", "What is a D type flip flop used for?", "Describe De Morgan's Laws", "What is an XOR gate?", "Describe the commutation law", "What is a full adder used for?", "How is a Karnaugh map used?", "What is the double negation law?", "What is an AND gate?");
qs[8] = new Array("Describe the Data Protection Act", "What is the Regulation of\nInvestigatory Powers Act?", "When was the RIPA created?", "When was the DPA created?", "What are 3 aspects of the computer\nmisuse act?", "What does the copyright, design and\npatents act cover?", "What is not covered by the copyright,\ndesign and patents act?", "What are examples of cultural issues?", "Describe social issues?", "What are examples of ethical issues?");
qs[9] = new Array("What is problem recognition?", "What is performance modelling?", "What is thinking abstractly?", "What is problem decomposition?", "What is Heuristics?", "What is thinking Logically?", "What is data mining?", "What is thinking procedurally?", "What is thinking concurrently?", "What is visualisation?");
qs[10] = new Array("Compare iteration and recursion", "What is inheritance?", "Compare local and global variables", "What is an IDE?", "What are three advantages of\nmodularity?", "Compare passing parameters by\nvalue and by reference", "Describe 3 features of an IDE", "What is branching?", "Name 3 characteristics of a\nrecursive algorithm", "What is a function?");
qs[11]= new Array("Describe a linear search", "Describe a polynomial time complexity?", "What is breadth-first traversal?", "Describe a linked list", "Compare Dijstra's and the A* algorithms", "What is the quick sort?", "Describe the insertion sort?", "Describe the binary search", "What is an algorithm?", "Describe Dijkstra's shortest path\nalgorithm");

var ans = new Array();
ans[0] = new Array("The PC is checked and copied to the MAR\nThe data at the MAR address is copied\ninto the MDR", "Instructions and data are held in separate\nmemories in the Harvard Architecture\n\nOne bus is used to transfer data and\ninstructions in the von Neumann architecture\n\nvon Neumann archtecture is used in\nconventional processors", "The greater the clock speed,\nThe faster instructions will\nbe fetched and executed", "This is Single Instruction Multiple Data\nThis is parallel processing where a processor\ncarries out one instruction\non multiple data items at the same time", "Each core is able to process a different\ninstruction at the same time\n\nThey can run multiple tasks simultaneuosly\nor a task can be spread over more\nthan one processor", "A GPU is a specialised electronic circuit\ndesigned to rapidly manipulate and alter\nmemory with a highly parallel\nstructure (many cores)", "A storage medium which uses surfaces\ncoated with magnetic materia\nA drive head moves across the disk to write\nor read data\n\nThey are reliable, cheap and portable\nbut are less robust, slow and\nprone to faults", "The abstraction of logical storage from\nphysical storage\n\nThe computer's RAM may not be large\nenough to store all running programs\nsimultaneously so makes use of\nsecondary storage", "A storage medium that uses plastic discs\non which data is stored as patterns\non the surface in pits and lans\n\nThey are portable, cheap and distributable\nbut are easily damaged, slow and have\nlimited capacity", "When another instruction can be begun\nbefore the previous one is finished\nwith a sequence of cores able to\noperate concurrently");
ans[1] = new Array("Utility software optimise computer\nperformance, such as:\nbackups, compression, encryption,\ndefragmentation and virus checking", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a29", "a210");
ans[2] = new Array("An agile methodology intended to\nimprove software quality and\nresponsiveness to changing customer\nrequements\nThe stages are extreme planning, extreme\ndesigning, extreme programming,\nextreme testing and acceptance testing", "a32", "a33", "a34", "a35", "a36", "a37", "a38", "a39", "a310");
ans[3] = new Array("A pair of keys (public and private) is used\nto encrypt and decrypt a message securely\nThe public key encrypts the data but cannot\ndecrypt it\nThe private key is used for decryption", "Fast to compute hash\n\nImpossible to regenrate a message from\nits hash value\n\nNo collisions", "A technique of preventing\nsimultaneuos access to data in a\ndatabse\n\nA record is locked whenever a user retrieves\nit for editing or updating", "a44", "a45", "a46", "a47", "a48", "a49", "a410");
ans[4] = new Array("a51", "a52", "a53", "a54", "a55", "a56", "a57", "a58", "a59", "a510");
ans[5] = new Array("a61", "a62", "a63", "a64", "a65", "a66", "a67", "a68", "a69", "a610");
ans[6] = new Array("a71", "a72", "a73", "a74", "a75", "a76", "a77", "a78", "a79", "a710");
ans[7] = new Array("a81", "a82", "a83", "a84", "a85", "a86", "a87", "a88", "a89", "a810");
ans[8] = new Array("a91", "a92", "a93", "a94", "a95", "a96", "a97", "a98", "a99", "a910");
ans[9] = new Array("a101", "a102", "a103", "a104", "a105", "a106", "a107", "a108", "a109", "a1010");
ans[10]= new Array("a111", "a112", "a113", "a114", "a115", "a116", "a117", "a118", "a119", "a1110");
ans[11]= new Array("a121", "a122", "a123", "a124", "a125", "a126", "a127", "a128", "a129", "a1210");



let box_text = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12"];
let unitNotes = ["Components of a Computer", "Systems Software", "Software Development", "Exchanging Data", "Networks and Web Technologies", "Data Types", "Data Structures", "Boolean Algebra", "Legal, Moral, Cultural and Ethical Issues", "Elements of Computational Thinking", "Programming Techniques", "Algorithms"];
let intro, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12; 
let returnMenu;
let choice, unit, index;
let screen = 0;

let flip, nextQ, answer, question,aBox;
let side = false;
let numBox;




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

    aBox = new Sprite(-5500, 5500, 400, 200);

    numBox = new Sprite(5500, -5500, 300, 50);

    //button to go to previous quesiton
    prevQ = new Sprite(150, 575, 150, 30);
    
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

    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 20) && (mouseY < 75)){
        flip.color = "YellowGreen";
        cursor(HAND);
    }
    else {
        flip.color = "mediumpurple";
        cursor(ARROW);

    }

    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 560) && (mouseY < 590)){
        prevQ.color = "Crimson";
        //cursor(HAND);
    }
    else {
        prevQ.color = "RoyalBlue";
        //cursor(ARROW);

    }

    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 560) && (mouseY < 590)){
        nextQ.color = "green";
        //cursor(HAND);
    }
    else {
        nextQ.color = "DarkKhaki";
        //cursor(ARROW);

    }




    // putting the text in the intro text box
    if (unit !=null){
        intro.text=("Catch up on unit " + (unit + 1).toString() + " - " + unitNotes[unit]);
    }

    
    else{
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
    nextQ.text = "Next Card";
    numBox.text = "Your are viewing card " + (index+1).toString() + " of 10";
    prevQ.text = "Previous Card"

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

    else if (nextQ.mouse.presses() && (index >=0 && index <=8)){
        question = qs[unit][index+1];
        answer = ans[unit][index+1];
        aBox.text = qs[unit][index+1];
        side = true;
        index = index + 1;
    }

    else if (prevQ.mouse.presses() && (index >=1 && index <=9)){
        question = qs[unit][index-1];
        answer = ans[unit][index-1];
        aBox.text = qs[unit][index-1];
        side = true;
        index = index - 1;
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
    displayCards(choice);


}


function displayCards(choice) {
    unit = choice - 1;
    index = 0;
    screen = 1;
    
    aBox.pos = { x: width / 2, y: height / 2 + 100 };
    numBox.pos = {x: width/2, y: height/2-150};
    question = qs[unit][index];
    answer = ans[unit][index];

    aBox.text = question;
    side = true;
    
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
    unit = null;
    aBox.pos = {x: -5500, y: 5500};
    numBox.pos = {x: 5500, y: -5500};
    aBox.text = "";
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
