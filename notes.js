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
let selectColours = ["yellow", "purple", "orange", "green"];

// variable for AND gate image
let img;

// this function allows files to be loaded into the program before all other instructions are run
function preload() {

    // loading the AND gate image from the photos folder
    img = loadImage('photos/AND_gate.png');
}

function setup() {

    // creating canvas
    textAlign(CENTER);
    createCanvas(1000, 600);
    noStroke();
    background("#e0e1dd");
    textSize(20);

    // adding outline to boxes
    strokeWeight(1);
    stroke(25);

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

// this function continually runs whilst the program is running
function draw() {


    //calling the function to hover over boxes
    boxHover();

    boxText();
    

    // changing screens when the user clicks any of the boxes
    if (box1.mouse.presses() || box2.mouse.presses() || box3.mouse.presses() || box4.mouse.presses() || box5.mouse.presses() || box6.mouse.presses() || box7.mouse.presses() || box8.mouse.presses() || box9.mouse.presses() || box10.mouse.presses() || box11.mouse.presses() || box12.mouse.presses()) { 
        selectUnit();
    }

    // return back to summary notes when the return button is clicked
    if (returnMenu.mouse.presses()) {
        returnToMenu();
    }

}

function boxText(){
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
        textBox2.text = ("CISC processors have complex\ninstructions which execute in a\nfew machine cycles\n\nRISC processors are simple and\ncheap, enabling pipelining but\nuse more RAM\n\nMulticore processors are a single\nchip containing several\nindependent CPUs\n\nParallel Systems are the\nsimultaneous use of several\nprocessors to perform a job\nsplit into tasks");
        textBox3.text = ("An input device accepts data\npresented in machine-readable\nform and passes it into a\ncomputer system\n\nAn output device converts signals\nor data from the computer into\nhuman-readable form\n\nRAM is used to store programs\nand data in use temporarily\nIt is volatile and faster to access\nthan ROM\n\nROM is read-only and non-volatile\nIt stores the bootstrap and BIOS");

    }
    if (box2.mouse.presses()) {
        choice = 2;
        background("#f2d0a9");
        text("Systems Software", 250, 150);
        text("Applications Generation", 750, 150);
        numSubtopics = 2;
        textBox1.text = ("An operating system is a set of\nprograms that manages the\ncomputer for the user\n\nMemory management includes\npaging, segmentation and\nvirtual memory\n\nAn interrupt is a signal generated\nby sources that causes a break\nin the execution\n\nScheduling includes round robin,\nfirst come first served, multi-level\nfeedback queues, shortest job\nfirst and shortest remaining time");
        textBox2.text = ("Software can be systems software\nand applications software\n\nSystems software enables the\nmachine to perform tasks\nrequested by the user\nThese include the OS, utility\nprograms, libraries, translators\nand device drivers\n\nApplications software benefit the\nuser and can be general-purpose\nor special purpose\nThe software can be off-the-shelf\nor bespoke");

    }

    else if (box3.mouse.presses()) {
        choice = 3;
        background("#d88c9a");
        text("Software Development", 250, 150);
        text("Types of Programming Language", 750, 150);
        numSubtopics = 2;

        textBox1.text = ("Diffferent methodologies include\nthe waterfall lifecycle, agile\nmethodologies, extreme\nprogramming, the spiral model\nand rapid application development\n\nAgile methodoligies are\nadaptable whilst the others are\nbest suited for well-defined,\nsimple and short-term projects\n\nAn algorithm is a set of\ninstructions to solve a problem\nin finite steps. A good algorithm\nallows invalid inputs,\nterminates and is efficient");
        textBox2.text = ("A programming paradigm is a way\nof programming to\solve a problem\nThese include procedural, OOP,\ndeclarative and functional\n\nAssembly language is a low\nlevel language that uses\nmnemonics to represent machine\ncode instructions. Addressing\nmodes include immediate,\ndirect, indirect and indexed\n\nObject-oriented languages use\nclasses, objects, methods,\nattributes, inheritance\nencapsulation and polymorphism");
    }

    else if (box4.mouse.presses()) {
        choice = 4;
        background("#84a98c");
        text("Compression, Encryption and Hashing", 250, 150);
        text("Databases", 750, 150);
        numSubtopics = 2;
        textBox1.text = ("Lossy compression removes non-\nessential data and results in a\nlarger file size reduction\n\nLossless compression retains all\ninformation to replicate the file\nand no data is lost\n\nSymmetric encryption uses the\n same key to encrypt and decrypt\ndata, which is also transferred\n\nA hashing function provides a\nmapping between an input and\n a fixed length output and\nis one-way");
        textBox2.text = ("A relational database has entities\nrepresented by tables (relations)\nwhich have relationships\n\nNormalisation to 3NF ensures no\nattributes are repeated, there are\nno partial dependencies and\nno non-key dependencies\n\nSQL is a declarative language\nused for querying and updating\nrelational database tables\n\nACID is a set of properties which\nare Atomicity, Consistency,\nIsolation and Durability");
    }

    else if (box5.mouse.presses()) {
        choice = 5;
        background("#f2d0a9");
        text("Networks", 250, 150);
        text("Web Technologies", 750, 150);
        numSubtopics = 2;
        textBox1.text = ("AN IP address is a unique\naddress that is assinged to a\nnetwork device. Routers use this\naddress to direct data packets\n\nWANs are spread over a large\ngeographical area. LANS consist\nof devices in a single site\n\nThe TCP/IP stack has four layers:\nApplication, Transport, Internet\nand Link\n\nNetwork security includes the\nuse of firewalls, proxies and\nencryption.");
        textBox2.text = ("HTML describes the content\nand structure of a web page\n\nCSS describes the layout and\nstyles of a web page, including\nthe use of identifiers and classes\n\nJavaScript is used to add\ninteractivity to websites and\nis interpreted\n\nSearch engine indexing uses a\nweb crawler to link to nearly all\nweb pages on the internet");
    }

    else if (box6.mouse.presses()) {
        choice = 6;
        background("#d88c9a");
        text("Data Types and \nCharacter Sets", 175, 150);
        text("Binary Arithmetic", width/2, 150);
        text("Bitwise Manipulation \nand Masks", 825, 150);
        numSubtopics = 3;
        textBox1.text = ("The primitave data types include:\ninteger, real/floating point,\ncharacter, string and Boolean\n\nA character set is a collection\nof all the charecters a\ncomputer recognises with their\nunique binary codes\n\nASCII has 7 bits per character but\nthis is not enough for international\nlanguages\n\nUnicode is a 16-bit and 32-bit\ncharacter set which increases\nfile size and transmission times");
        textBox2.text = ("Different number systems include:\nBinary (Base 2), Denary (Base 10)\nand Hexadecimal (Base 16)\n\nIn binary addition, an overflow\nerror is when there is insufficient\nspace to store the result accurately\n\nNegative binary numbers are\nrepresented using sign and\nmagnitude or two's complement\n\nFixed point binary represents\nfractions which can only be 1/2,\n1/4, etc. Floating point uses a\nmantissa and exponent");
        textBox3.text = ("The act of algorithmically\nmanipulating bits through shifts\nand masks\n\nShifts perform multiplication\nor division and include logical\narithmetic and circular\n\nMasks modify data by changing\nbits using logical operators such\nas AND, XOR and OR");
    }

    else if (box7.mouse.presses()) {
        choice = 7;
        background("#84a98c");
        text("Arrays, Records, \nLists, Tuples", 250, 150);
        text("Structures to Store Data", 750, 150);
        numSubtopics = 2;
        textBox1.text = ("Data structures are made up of\nelementary data types\n\nAn array is a set of items of the\nsame type under a single variable\n\nA tuple is an ordered set of values\nof any type and is immutable\n\nRecords are composed of a fixed\nnumber of fields of different data\ntypes\n\nA list is an abstract data type\nwith a sequence of values and is\ndynamic");
        textBox2.text = ("A graph is a set of nodes\nconnected by edges\nThese edges can be directed\nor undirected\n\nA stack is a Last In First\nOut data structure\n\nA queue is First In First\nOut data structure\n\nA hash table is a data structure\nwhere the calculated\nvalue is used to mark the position\nin the table where the data item\nshould be stored");
    }

    else if (box8.mouse.presses()) {
        choice = 8;
        background("#f2d0a9");
        text("Boolean Logic & \nLogic Gates", 175, 150);
        text("Manipulate, Derive or Simplify \nExpressions / Statements", width/2, 150);
        text("D Type Flip Flops, \nHalf and Full Adders", 825, 150);
        numSubtopics = 3;
        textBox1.text = ("Boolean Logic is a form of\nalgebra where all values are\nreduced to TRUE or FALSE\n\nLogic Gates include NOT,\nAND, OR and XOR\n\nLogic gate diagrams express\nBoolean Logic in diagrammatic\nform using symbols\n\nTruth table define the output\nof a logic gate or circuit\nfor all possible inputs");
        textBox2.text = ("Rules of Boolean algebra\ninclude De Morgan's Laws,\nDistribution, Association\nCommutation and Double\nNegation\n\nDistributive rules allow for the\nmultiplying out or factoring out\nof an expression\n\nThe associative law allows for the\nremoval of brackets from an\nexpression and regrouping of\nthe variables");
        textBox3.text = ("D type flip flops are positive\nedge-triggered flip-flops\nthat store the input value until the\nnext clock pulse\n\nA Half Adder is A circuit\nthat performs the addition\nof two bits\n\nA Full Adder combines\ntwo half adders to add three\nbits together, including two inputs\nand a carry bit. Multiple full adders\ncan be concatenated together");
        image(img, 800, 25, 50, 50);
    }

    else if (box9.mouse.presses()) {
        choice = 9;
        background("#d88c9a");
        text("Computing Related Legislation", 250, 150);
        text("Moral and Ethical Issues", 750, 150);
        numSubtopics = 2;
        textBox1.text = ("The Data Protection Act 1998\nsays anyone who stores personal\ndetails must keep them secure\n\nThe Computer Misuse Act 1990\ndefines electric vandalism,\nunauthorised access to computer\nsystems and theft of information\n\nThe Copyright Design and\nPatents Act 1988\nprotects intellectual design\n\nThe Regulation of Investigatory\nPowers Act was\nestablished in 2000");
        textBox2.text = ("There are individual moral,\nsocial, ethical and cultural\nopportunities and risks of\ndigital technology, including:\n\n- Computers in the workforce\n- Automated decision making\n- AI\n- Environmental effects\n- Censorship\n- Monitorying Behaviour\n- Analysing personal info\n- Layout, colour paradigms and\ncharacter sets");
    }

    else if (box10.mouse.presses()) {
        choice = 10;
        background("#84a98c");
        text("Computational Thinking", 250, 150);
        text("Computational Methods", 750, 150);
        numSubtopics = 2;
        textBox1.text = ("Thinking Ahead is deciding what\ninputs the system needs and\nwhat outputs it should produce\n\nThinking Procedurally is identifying\nthe individual parts of a bigger\nproblem\n\nThinking Concurrently is\nidentifying which parts of a\nprogram can be developed to be\nprocessed at the same\ntime and which parts are\ndependent on others");
        textBox2.text = ("Tractable problems can be solved\nby algorithms in a reasonable\namount of time using a\nreasonable amount of memory\n\nBacktracking is the process of\nincrementally bulding towards a\nsolution, abandoning partial\nsuccess until the solution is found\n\nPipelining is splitting a large task\ninto manageable chuncks and\noverlapping these processes to\nspeed up the process");

    }

    else if (box11.mouse.presses()) {
        choice = 11;
        background("#f2d0a9");
        text("Programming Contructs & \nTechniques", 175, 150);
        text("Modularity", width/2, 150);
        text("IDEs", 825, 150);

        numSubtopics = 3;
        textBox1.text = ("Sequence is two or more\nstatements executed one after the\nother\n\nSelection is when instructions\nevaluate a Boolean expression\nand then branch the code to\none or more alternative paths\n\nIteration is when a selection of\ncode is repeated and can be count\ncontrolled or condition controlled\n\nA class is a blueprint for an\nobject and defines their attributes\nand methods");
        textBox2.text = ("Modularity is where a solution is\nbroken down into a number of\nsmall self-contained and\nmanageable chunks\n\nProcedures is a block of code\ngiven a unique identiable name\nand is designed to perform a set\ntask\n\nWhen passed by value, a local\ncopy of the data is used, which\nis discarded when the subprogram\nexits");
        textBox3.text = ("An IDE is a program that provides\na set of tools and\nrelated functionality to facilitate\nsoftware development\n\nFeatures include:\nTransaltors which converts\nhigh-level code into executable\nmachine code\n\nDebugging facilities such as\nbreakpoint\n\nThe run-time environment supports\nthe execution and running of\nprograms");
    }

    else if (box12.mouse.presses()) { 
        choice = 12;
        background("#d88c9a");
        text("Efficiency of Algorithms", 250, 150);
        text("Standard Algorithms", 750, 150);
        numSubtopics = 2;
        textBox1.text = ("Big O notation for time complexity\nincludes:\nConstant\nLinear\nPolynomial\nExponential\nLogarithmic\nComplexity\n\nCommon Data Structures include:\nstacks, queues, trees\narrays, hashes and lTheinked lists\n\nThese can be traversed using:\ndepth-first, post-order,\nbreadth first and in-order");
        textBox2.text = ("The Binary Searchis an efficienct\nway of searching a sorted\nlist usind divide and conquer\n\nIn the Bubble Sort, each item is\ncompared with the adjacent item\nand swapped if out of order\n\nDijkstra's shortest path algorithm\nfinds the shortest path for\na graph with non-negative\nedge path costs\n\nThe A* Algorithm is an adaptation\nwhich adds an approximate\nheuristic to each node");
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


//this function uses the coordinates of the boxes and the mouse's location to indicate interacable buttons
function boxHover() {

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
    if ((mouseX > 300) && (mouseX < 450) && (mouseY > 125) && (mouseY < 215)) {
        box2.color = "blue";
    }
    else {
        box2.color = "majenta";
    }


    if ((mouseX > 300) && (mouseX < 450) && (mouseY > 275) && (mouseY < 365)) {
        box6.color = "blue";
    }
    else {
        box6.color = "brown";
    }


    if ((mouseX > 300) && (mouseX < 450) && (mouseY > 450) && (mouseY < 540)) {
        box10.color = "blue";
    }
    else {
        box10.color = "green";
    }

    if ((mouseX > 550) && (mouseX < 700) && (mouseY > 125) && (mouseY < 215)) {
        box3.color = "blue";
    }
    else {
        box3.color = "red";
    }


    if ((mouseX > 550) && (mouseX < 700) && (mouseY > 275) && (mouseY < 365)) {
        box7.color = "blue";
    }
    else {
        box7.color = "blueviolet";
    }


    if ((mouseX > 550) && (mouseX < 700) && (mouseY > 450) && (mouseY < 540)) {
        box11.color = "blue";

    }
    else {
        box11.color = "darkcyan";
    }

    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 125) && (mouseY < 215)) {
        box4.color = "blue";
    }
    else {
        box4.color = "darkseagreen";
    }


    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 275) && (mouseY < 365)) {
        box8.color = "blue";
    }
    else {
        box8.color = "khaki";
    }


    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 450) && (mouseY < 540)) {
        box12.color = "blue";
    }
    else {
        box12.color = "olive";
    }

    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 20) && (mouseY < 75)) {
        returnMenu.color = "red";
        cursor(HAND);
    }
    else {
        returnMenu.color = "DarkOrange";
        cursor(ARROW);

    }
}
