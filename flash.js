//initially making a global array to hold all units
var qs = new Array();

// each element in the array holds 10 questions each
qs[0] = new Array("What happens during the Fetch part\nof the FDE cycle?", "Name three differences between the\nvon Neumann and Harvard Architectures", "How does clock speed\naffect CPU performance?", "Describe the SIMD contemporary\nprocessor architecture", "How does the number of cores\naffect CPU performance?", "Describe a GPU", "Describe and evaluate magnetic storage \ndevices", "What is virtual storage?", "Describe and evaluate optical storage \ndevices", "What is Pipelining?");
qs[1] = new Array("Define utility programs / software \nand give an example", "What are Device Drivers?", "What is an Embedded System?", "Describe a Real Time Operating System?", "What are Libraries?", "Describe Virutal Machines", "Describe open source vs closed source\nsoftware", "Name 3 different translators", "What is syntax analysis", "What is a linker?");
qs[2] = new Array("Describe Extreme Programming (XP)", "What is a drawback of the spiral model?", "Evaluate rapid application development", "Describe Polymorphism", "What is immediate addressing?", "Describe procedural languages", "What is encapsulation?", "Describe 3 Assembly Language Instructions", "Describe the agile model", "Name 3 characteristics of a\ngood algorithm");
qs[3] = new Array("What is Asymmetric Encryption?", "Give 3 Characteristics of an Ideal\nCryptograpic Hash Function", "What is Record Locking?", "Describe Second Normal Form", "What is Run-Length Encoding?", "What is dictionary coding?", "What is a foreign key?", "What is Consistency in ACID?", "Name 3 Methods of capturing\ndata", "What is indexing in a database?");
qs[4] = new Array("What is a protocol?", "Name 3 differences between\nclient-server and peer to peer", "Describe a proxy", "What is a firewall?", "Describe the DNS", "What is the PageRank Algorithm?", "Name 3 pieces of network\nhardware", "Describe the Transport Layer in the\nTCP/IP stack", "What is a virus?", "What is server side processing?");
qs[5] = new Array("What is an advantage of ASCII?", "What is a disadvantage of Unicode?", "What is a locigal shift?", "What is a circular shift?", "What is an arithmetic shift?", "What is an underflow error?", "Describe Sign and Magnitude", "Describe Two's Complement", "What is normalisation?", "What is casting?");
qs[6] = new Array("What is a tree?", "What is a list?", "What is a dynamic data structure?", "How would you remove an item from\na queue?", "How would you add an item to\na stack?", "What is a directed graph?", "What is a static data structure?", "What is a binary search tree?", "Describe a hash table", "What is an undirected graph?");
qs[7] = new Array("Describe the association law", "What is a half adder?", "What is a D type flip flop used for?", "Describe De Morgan's Laws", "What is an XOR gate?", "Describe the commutation law", "What is a full adder used for?", "How is a Karnaugh map used?", "What is the double negation law?", "What is an AND gate?");
qs[8] = new Array("Describe the Data Protection Act", "What is the Regulation of\nInvestigatory Powers Act?", "When was the RIPA created?", "When was the DPA created?", "What are 3 aspects of the computer\nmisuse act?", "What does the copyright, design and\npatents act cover?", "What is not covered by the copyright,\ndesign and patents act?", "What are examples of environmental issues?", "What is the impact of computers in the\nworkforce?", "What are examples of ethical issues?");
qs[9] = new Array("What is problem recognition?", "What is performance modelling?", "What is thinking abstractly?", "What is problem decomposition?", "What is Heuristics?", "What is thinking Logically?", "What is data mining?", "What is thinking procedurally?", "What is thinking concurrently?", "What is visualisation?");
qs[10] = new Array("Compare iteration and recursion", "What is inheritance?", "Compare local and global variables", "What is an IDE?", "What are three advantages of\nmodularity?", "Compare passing parameters by\nvalue and by reference", "Describe 3 features of an IDE", "What is branching?", "Name 3 characteristics of a\nrecursive algorithm", "What is a function?");
qs[11]= new Array("Describe a linear search", "What is time complexity?", "What is breadth-first traversal?", "Describe a linked list", "Compare Dijstra's and the A* algorithms", "What is the quick sort?", "Describe the insertion sort?", "Describe the binary search", "What is an algorithm?", "Describe Depth-First Tree Traversal");

//initially making a global array to hold all units
var ans = new Array();

// each element (unit) in the array holds 10 answers each
ans[0] = new Array("The PC is checked and copied to the MAR\nThe data at the MAR address is copied\ninto the MDR", "Instructions and data are held in separate\nmemories in the Harvard Architecture\n\nOne bus is used to transfer data and\ninstructions in the von Neumann architecture\n\nvon Neumann archtecture is used in\nconventional processors", "The greater the clock speed,\nThe faster instructions will\nbe fetched and executed", "This is Single Instruction Multiple Data\nThis is parallel processing where a processor\ncarries out one instruction\non multiple data items at the same time", "Each core is able to process a different\ninstruction at the same time\n\nThey can run multiple tasks simultaneuosly\nor a task can be spread over more\nthan one processor", "A GPU is a specialised electronic circuit\ndesigned to rapidly manipulate and alter\nmemory with a highly parallel\nstructure (many cores)", "A storage medium which uses surfaces\ncoated with magnetic materia\nA drive head moves across the disk to write\nor read data\n\nThey are reliable, cheap and portable\nbut are less robust, slow and\nprone to faults", "The abstraction of logical storage from\nphysical storage\n\nThe computer's RAM may not be large\nenough to store all running programs\nsimultaneously so makes use of\nsecondary storage", "A storage medium that uses plastic discs\non which data is stored as patterns\non the surface in pits and lans\n\nThey are portable, cheap and distributable\nbut are easily damaged, slow and have\nlimited capacity", "When another instruction can be begun\nbefore the previous one is finished\nwith a sequence of cores able to\noperate concurrently");
ans[1] = new Array("Utility software optimise computer\nperformance, such as:\nbackups, compression, encryption,\ndefragmentation and virus checking", "Enables operating systems to access hardware\nfunctions\n\nIt is a program that operated or controls a device\nattached to a computer and provides\nan interface to that device", "A highly specialised, limited OS design to fit\ninto a machine or device\n\nIt will have a minimal UI, has a\nlimited amount of RAM and accepts\ninput from sensors", "An OS that serves a real-time application\nto process data without delays\n\nIt must respond very quickly to\ninputs, deal with simultaneous inputs\nand have failsafe mechanisms", "A collection of pre-compiled routines\nwhcih can be incorporated into a program", "An instance where software is used to\ntake on the function of a machine\nincluding executing intermediate code or\nrunning an OS within another", "Open source software have the source code\nfreely available and may be\nredistributed and modified\n\nPropietary software is sold in the form of a\nlicense to use and the source code is not\nshared ot the public", "Interpreters, Compilers and Assemblers", "A stage in compilation where language\nstatements are checked against\nthe rules of the language and\nerrors are reported", "A linker is a software tool\nthat allows already compiled code to\nbe compiled with the compiled program");
ans[2] = new Array("An agile methodology intended to\nimprove software quality and\nresponsiveness to changing customer\nrequements\nThe stages are extreme planning, extreme\ndesigning, extreme programming,\nextreme testing and acceptance testing", "It is time consuming, not suitable for\nsmaller projects, costly and produces\npoor quality documentation", "It is good for larger projects, the\nproduct is made quickly, is relevant when\nreleased and produces iterative deliverables\n\nThe final system may be a compromise and\nit requires\na heavy time input from clients", "A language's abality to process objects\ndifferently depending on their class", "The operand is the actual valueto be\noperated on", "A high level language in which program\nstatements can be grouped in\nprocedures and functions", "Private attributes can only be accessed\nor modified by methods that are\nset when defining the class", "ADD = add the contents of the memory address\nto the accumulator\n\nSTA = store the value in the accumulator\nin the memory address\n\nDAT = a data location used to indicate\na location that contains data", "Software is developed in rapid\nincremental cycles\n\nEach version is created in stages of:\nanalysis, design, implementation\nand evaluation", "Use comments to document programs\nUse a standard for identifiers\nUse a modular structure\nIndent code\nThe program terminates at some point");
ans[3] = new Array("A pair of keys (public and private) is used\nto encrypt and decrypt a message securely\nThe public key encrypts the data but cannot\ndecrypt it\nThe private key is used for decryption", "Fast to compute hash\n\nImpossible to regenrate a message from\nits hash value\n\nNo collisions", "A technique of preventing\nsimultaneuos access to data in a\ndatabse\n\nA record is locked whenever a user retrieves\not for editing or updating", "A table is in 2NF if it is in\n1NF and contains no partial dependencies\n\nThis can only occur if the primary key is\na composite key", "A basic method of compression which\nsummarises consecutive patterns of\nthe same data", "Spots regularly occuring data and stores\nit separately in a dictionsry\n\nThe reference to the entry in the\ndictionary is stored in the main file, thereby\nreducing the original data", "An attribute that creates a join between\ntwo tables\n\nThe attribute is common to both tables", "Ensures that no transaction can violate\nany of the defined validation rules\nfor maintaining referential integrity", "Manual Methods:\nData forms filled out by hand, transcribing\n\nAutomated Methods:\nScannes, barcode readers, sensors\ncameras, optimal chacter recognition", "The process of creating a database index\nwhich improves the speed of data retrieval\noperations");
ans[4] = new Array("A set of rules defining common methods\nof data communication", "A Client Server netword uses a centralised\nserver to store the data\nIn P2p, each peer has its own data\n\nIn P2P, each node can both request\nand respond for services\n\nA Client Server netword is more expensive", "A proxy server intercepts all packets\nentering and leaving a network\n\nThis hides the true network address\nof the source from the recipient", "A security checkpoint designed to\nprevent unauthorised access between\ntwo netowrks\n\nIt can be implemented in both\nhardware and software\n\nIt uses packet filtering", "User enters a URL and the browser requests the\ncorresponding IP address from a\nlocal DNS\n\nThe IP address is located and the\nweb page data is requested", "An algorithm used by Google Search\nto rank websites in their search\nengine results", "The NIC is the card required to\nconnct a device to a network\n\nRouters connect two or more networks\ntogether and allow networks to\nconnect to the Internet\n\nA gateway is used to translate differemt/nprotocols between networks\n\nA switch is a device used to direct\nthe flow of data across a network", "The transport layer uses the TCP to establish\nan end-to-end connection with the\nrecipient compter\n\nThe data is then split into packets and\nlabelled witht ehpacket number\nthe total n.o. packets and\nthe port number", "A type of malware\nOnce it is in memory, any other\nuninfected file that runs becomes\ninfected when it is copied into memory", "a510");
ans[5] = new Array("ASCII uses only 7 bits per\ncharacter which will keep file\nsizes low", "One character uses 32 bits instead of\n16 bits, significantly increasing file\nsizes and data transmission\ntimes", "Each digit is moved one column\nto the left or right\n\nExtra 0 bits are added to the\nstart or end", "Left circular shift = the MSB becomes\nthe new LSB\n\nRight circular shift = the LSB wraps around\nand becomes the MSB", "The MSB is a sign bit and always\nremains the same", "Occurs when a number is too small to be\nrepresented in the allocated number of\nbits", "Turn the MSB into a sign bit, where 0\nrepresents a positive number and 1\nepresents a negative number\n\nBinary arithmetic with this method is\ninaccurate", "A method of representing floating point real\nnegative numbers\n\nFlip the bits and add 1", "The process of moving the binary point of\na floating point number to provide the\nmaximum level of precision for\na given number of bits\n\nThe mantissa determines precision and\nthe exponent determines the range", "The process of converting data from one\ndata type to another");
ans[6] = new Array("A rooted tree has a root, banches and\nleaves\n\nIt is a collection of connected nodes\nand edges\nThere are no cycles", "An abstract data type consisting of\na number of items which may\noccur more than once", "A colection of data in memory that has\nthe ability to grow and shrink in size\nusing the heap", "This is through using a function (dequeue)\nwhere the front item is removed and\nreturned if the queue is not empty", "If the stack is not full, increment the top\nand insert the item at the top of the queue", "A set of nodes connected by edges\nwhere all the edges are one-way", "A data structure that is fixed in size\nand cannot increase while the program is\nrunning", "A rooted tree in which each node\nhas a maximum of two children\n\nThe tree can be searched quickly,\nnew items can be added and the whole tree\ncan be printed out in sequence", "A data structure where the calculated\nvalue is used to mark the position\nin the table where the data item\nshould be stored, enabling\ndirect access", "A set of nodes connected by edges where \nall edges are bidirectional");
ans[7] = new Array("This law allows for the removal of brackets\nfrom an expression and the regrouping of\nthe variables is all the operators\nare the same\n\nX ⋀ (Y ⋀ Z) = (X ⋀ Y) ⋀ Z\nX V (Y V Z) = (X V Y) V Z", "A circuit that performs the addition\nof two bits\n\nIt takes two inputs and gives\na two-bit output and the carry", "A positive edge-triggered flip-flop\nthat stores the input value until the\nnext clock pulse\n\nIt is used for creating registers and\nstatic RAM", "¬(A V B) = ¬A Ʌ ¬B\n\n¬(A Ʌ B) = ¬A V ¬B", "Exclusive OR Gate\n\nThe output will be true if one or\nthe other input is true but not both", "X Ʌ Y = Y Ʌ X\n\nX V Y = Y V X", "Combines two half adders to add three\nbits together, including two inputs\nand a carry bit\n\nMultiple full adders can be connected\ntogether", "A way of simplifying Boolean expressions by\ndetecting groupings of expressions with\ncommon factors\n\nThere are rules for boxing the map and\nforming the expression", "¬ ¬ X = X", "The output of A AND B is 1 only if\nboth inputs are 1");
ans[8] = new Array("Anyone who stores\npersonal details must keep them secure\n\nComputer systems that store personal data\nmust have processes and security\nmechanisms", "Legislation which regulates the\npowers of public bodies to carry\nout surveillance and investigating\nand interception of communications", "2000", "1998", "Unauthorised access to computer material\nUnauthrised access with intent to commit\nor facilitate a crime\nMaking, supplting or obtaining anything which\ncan be used in computer misuse offences", "This Act is designed to protect the creators\nof books, music, video and software\nfrom having their work illegaly\ncopied", "Algorithms are not eligible for protection", "Carbon footprint and waste products\nThrow-away society\nEfficiency of computer engines - fuel and pollution\n\nUsing computerised systems that might\notherwise generate more pollution\n\nCan peopple drive less?", "Driveless cars are being developed\nDrones could possible deliver parcels\nMany jobs have a high likelihood of being\nreplaced by software and automation", "In some cities, algorithms decide whether\nyou are likely to be stopped and searched\nBanks use algorithms to decide loans\napplications\nRanking algorithms influence people's\nbehaviour");
ans[9] = new Array("The ability to recognise and acknowlegge\nthat an issue exists and\ndefining the problem", "The process of approximating how well\nmodels perform using mathematics\nSimulating different user and\nsystem loads", "The process of separating idea\nfrom reality through removing unnecessary\ndetails", "The process of taking a large problem and\nbreaking it down into smaller problems\nwhich each complete a single task", "An approach to problem solving that finds a\nsolution that is good enough, with methods\nincluding rule of thumb", "Identify the points in a solution where a\ndecision needs to be taken\n\nDetermining the logical conditions that\naffect the outcome of a decision\n\nDetermine how decision affect program flow", "The process of analysing data in big data\nsets to discover connections and\nassociations", "Identifying sub-proceudres necessary to\nsolve a problem", "Identify which parts of a program can be\ndeveloped to be processed at the same\ntime and which parts are dependent\non others\n\nThis includes concurrent and parallel\nprocessing", "The process of turning data into a visual\nrepresentation which is easier for humans\nto understand and interpret");
ans[10]= new Array("An iterative routine has no stack\noverflow error\n\nRecursive routines have fewer lines of\ncode\n\nIterative routines are easier to\nfollow", "When a derived class is defined, it also\nhas all the attributes and methods of\nthe base class", "Global variables may be accessed by any\npart of the whole program\n\nLocal variables are accessible within\nthe subroutine where it was defined", "A program that provides a set of tools and\nrelated functionality to facilitate\nsoftware development", "Programs are more easily and quickly written\n\nLarge programs are broken down into\nsubtaksks\n\nEach module can be individually tested\n\nLarge programs are easier to debug", "When passed by value, a local copy of the\ndata is used, which is discarded\nwhen the subprogram exits\n\nPassing by reference uses a pointer\nto the memory address of\nthe original variable so changes\nare retained", "Transaltors which converts high-level\ncode into executable machine code\n\nDebugging facilities such as\nbreakpoint\n\nThe run-time environment supports to\nexecution and running of programs", "instructions which can evaluate a Boolean\nexpression and then branch\nthe code into more than one alternative\npath\n\nConditions are formulated using relational\noperators", "Contains a base case (stopping\ncondition)\n\nIt must call itself\n\nThe base case should be reachable\nin a finit number of calls", "A block of code given a unique\nidentifiable name within a program that\nperforms a set task and\nshould return a value");
ans[11]= new Array("Examining each entry in turn in\nthe file until the item is found or\nthe end of the file is reached", "An approximation of the time taken\nto execute an algorithm for a given\nnumber of items in a data set", "All nodes adjacent to the start node\nis visited before moving to the next\nThe process is repreated for each\nnode at this level before moving\nto the next", "A dynamic data structure where each item\ncontains the data and a pointer\nto the next item", "Both find the shortest path\n\nDikjstra's algorithm is slower", "A divide and conquer algorithm\nwhich sorts the given sequence\nin place", "A sorting algorithm that builds the\nfinal sorted array one item at\na time", "Searching a list efficiently using\ndivide and conquer on a sorted list\nAfter each step, the size of the\nlist halves", "A set of instructions to solve\na problem in a finite number of\nsteps", "Go to the end of a path\nbefore backtracking and going down the\nnext path\n\nGraph or tree traversal by\ngoing to the leftmost node");


// an array holding the labels for each selection box
let box_text = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12"];

// headings for each notes which will display when selected
let unitNotes = ["Components of a Computer", "Systems Software", "Software Development", "Exchanging Data", "Networks and Web Technologies", "Data Types", "Data Structures", "Boolean Algebra", "Legal, Moral, Cultural and Ethical\nIssues", "Elements of Computational \nThinking", "Programming Techniques", "Algorithms"];

// variables used as boxes to display text (called sprites)
let intro, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12; 

// variable used as a box to return to menu
let returnMenu;

// variables for getting user choice
let choice, unit, index;

// variable to know what to display depending on whether notes are displaying or not
let screen = 0;

// variables for the actual flashcard functions (flip sides, next question, answers and questions)
let flip, nextQ, answer, question, aBox;

// boolean to determine which side is showing (true means question is showing; false = answer is showing)
let side = false;

// index out of the total number of cards
let numBox;

// display image
let img;

// creating a variable to go backwards
let prevQ;


// this function allows files to be uploaded before the program runs
function preload() {
    img = loadImage('photos/Association.png');
}

// this fucntion runs once and enables all buttons and backgrounds to be initialised
function setup() {
    textAlign(CENTER);
    createCanvas(1000, 600);
    background("purple");
    textSize(20);

    // creating intro text box
    intro = new Sprite(width/2, 50, 500, 55);

    // creating button to return to summary notes menu
    returnMenu = new Sprite(150, 50, 150, 50);

    // button to change sides
    flip = new Sprite(850, 50, 150, 50);

    //button to go to next card
    nextQ = new Sprite (850, 575, 150, 30);

    // creating buttons to click to select menu as objects called sprites
    boxes = new Group();

    // each box has different locations (rows and columns)
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

    // this box holds the question or answer
    aBox = new Sprite(-5500, 5500, 400, 200);

    // this button will display the number of the flashcard the user is on
    numBox = new Sprite(5500, -5500, 300, 50);

    //button to go to previous quesiton
    prevQ = new Sprite(150, 575, 150, 30);
    
}

// this function continually runs whilst the program is running
function draw(){
    // changing screens when the user clicks any of the boxes
    if (box1.mouse.presses() || box2.mouse.presses() || box3.mouse.presses() || box4.mouse.presses() || box5.mouse.presses() || box6.mouse.presses() || box7.mouse.presses() || box8.mouse.presses() || box9.mouse.presses() || box10.mouse.presses() || box11.mouse.presses() || box12.mouse.presses()) {
        selectCards();
    }

    //contunially calling the function to hover over boxes
    boxHover();

    boxText();

    // return back to summary notes when the return button is clicked
    if (returnMenu.mouse.presses()) {
        returnToMenu();
    }

    //calling the function to change sides
    flipSides();
    
}

// this function is called from the draw function
// it ensures that text is always on the boxes
function boxText(){
    // putting the text in the intro text box
    if (unit != null) {
        // when a card is being displayed
        intro.text=("Catch up on unit " + (unit + 1).toString() + " - " + unitNotes[unit]);
    }

    
    else {
        // when on the main menu
        intro.text=("Short form notes to catch up"); 
    }


    // adding labels to the boxes (from array)
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

    // telling the user what index they are within the set of 10 cards
    numBox.text = "Your are viewing card " + (index + 1).toString() + " of 10";

    // button to go back to the previous card
    prevQ.text = "Previous Card";
}

function selectCards(){
    //reposition unit selection buttons off canvas
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
    // different background per unit
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
        // display image for unit 8
        //image(img, 375, 200, 250, 50);
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

// this function takes the user's choice and sets the questions and answers
// based on the unit that has been selected
function displayCards(choice) {
    // unit will be used for arrays, which start from 0
    unit = choice - 1;

    // position within that array for the unit
    index = 0;

    // change screen to flashcard screen (1)
    screen = 1;

    // reposition answer, index and question boxes on screen
    aBox.pos = { x: width / 2, y: height / 2 + 100 };
    numBox.pos = { x: width / 2, y: height / 2 - 150 };

    // set the questions and answers to come from the chosen array
    question = qs[unit][index];
    answer = ans[unit][index];

    // initially display question
    aBox.text = question;

    // set side to true
    side = true;
    
}




// function to reset the screen when the reset button is clicked
// function to reset the screen through the backround and buttons

function returnToMenu(){
    // reset variables
    screen = 0;
    index = 0;
    unit = 0;
    unit = null;
    choice = 0;
    aBox.pos = { x: -5500, y: 5500 };
    numBox.pos = { x: 5500, y: -5500 };
    aBox.text = "";
    background("#f2e8cf");

    // reset boxes that display the units to original positions
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



// this function changes the text depending on whether the question or answer is already being displayed
function flipSides() {

    // if the flip sides button is pressed and the answer is showing, switch
    if (flip.mouse.presses() && side == false) {
        aBox.text = question;
        side = true;
    }

    // if the button to change sides is pressed and the question is displaying
    // change the text to the answer and change side to true
    else if (flip.mouse.presses() && side == true) {
        aBox.text = answer;
        side = false;
    }

    // if the button to got to the next question is pressed
    // increment the index and change the text on the box
    else if (nextQ.mouse.presses() && (index >= 0 && index <= 8) && screen == 1) {
        question = qs[unit][index + 1];
        answer = ans[unit][index + 1];
        aBox.text = qs[unit][index + 1];
        side = true;
        index = index + 1;
    }

    // if the button to go back one question is pressed
    // decrement the index and change the question back
    else if (prevQ.mouse.presses() && (index >= 1 && index <= 9)) {
        question = qs[unit][index - 1];
        answer = ans[unit][index - 1];
        aBox.text = qs[unit][index - 1];
        side = true;
        index = index - 1;
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
    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 20) && (mouseY < 75)) {
        returnMenu.color = "red";
    }
    //else, keep the coliur as orange
    else {
        returnMenu.color = "DarkOrange";

    }

    // if hovering over the button to flip sides, chagne the colour to green and
    //change the cursor
    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 20) && (mouseY < 75)) {
        flip.color = "YellowGreen";
        cursor(HAND);
    }

    //otherwise, keep the colour as purple and normal cursor
    else {
        flip.color = "mediumpurple";
        cursor(ARROW);

    }

    // change colours if hovering over the button to go back one question 
    if ((mouseX > 75) && (mouseX < 225) && (mouseY > 560) && (mouseY < 590)) {
        prevQ.color = "Crimson";
    }
    else {
        prevQ.color = "RoyalBlue";

    }

    // change colours when hovering over the button to go to the next question
    if ((mouseX > 775) && (mouseX < 925) && (mouseY > 560) && (mouseY < 590)) {
        nextQ.color = "green";
    }
    else {
        nextQ.color = "DarkKhaki";


    }


}
