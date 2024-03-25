// variables to collect data from form
var inputEmail, inputPass, inputLname, inputFname, inputRole, username;

// boolean variables to check whether the information is of the correct type, length and format
var validEmail = false;
var validName = false;
var validPass = false;

// this function is called when submitted and prints the first name to the console
function foo(){
    var name = document.getElementById("fname").value;
    console.log(name);
}

// function that is called when the user presses the button to check details and submit details
function store(){

    // getting the email from the form
    inputEmail = document.getElementById("email").value;
    console.log(inputEmail);

    // if the email includes an @ and no spaces, the format is valid
    // encrpyt the email then save
    // if this does not happen, validEmail remains false
    if ((inputEmail.includes("@")) && (inputEmail.includes(" ") == false)){

        // the email is valid
        validEmail = true;
        // encryption
        inputEmail = CryptoJS.AES.encrypt(inputEmail, "palladian");

        // save to local storage
        localStorage.setItem("email", inputEmail);  
        
        
    }
    
    inputLname = document.getElementById("lname").value;
    localStorage.setItem("lname", inputLname);


    inputFname = document.getElementById("fname").value;
    
    // if the email includes an @, the format is valid
    // encrpyt the email then save
    // if this does not happen, validEmail remains false
    if (inputFname.includes(" ")){
        validName = false;
    }
    else{
        validName = true;
        localStorage.setItem("fname", inputFname);

    }


    inputPass = document.getElementById("pass").value;
    console.log(inputPass);

    // if the password does not include a space and is longer than 6 characters, it is valid
    // encrpyt the password then save
    // if this does not happen, validPass remains false
    if (inputPass.includes(" ") || inputPass.length<6){
        validPass = false;
        
    }
    else{
        validPass = true;
        //encrypt password
        inputPass = CryptoJS.AES.encrypt(inputPass, "palladian");
        inputPass = inputPass.toString();
        localStorage.setItem("pass", inputPass);
    }
    

    inputRole = document.getElementById("role").value;
    localStorage.setItem("role", inputRole);

    // create username using first and last name
    username = inputLname.substring(0,4) + inputFname.substring(0,1) + "17";

    // set the username to local storage
    localStorage.setItem("username", username);
    

    // print details from the form into console
    console.log(inputEmail);
    console.log(inputFname);
    console.log(inputLname);
    console.log(inputPass);
    console.log(inputRole);
    console.log(username);

    // if any of the details are of invalid format, prevent submission
    if(validEmail == false || validName == false || validPass == false){
        alert("Invalid details entered, please try again");
        event.preventDefault();
        //someBug();
        return false;
    }

    // else, allow the user to sign up
    else{
        // tell user that their details are valid
        alert("Valid Details Entered");

        //tell the user their username
        alert("Your username is " + username + " - this is the first letter of your first name and the first three letters of your last name and 17");
    }

}

// this function runs once at the beginning of the program
// it puts the canvas on the web page
function setup(){
    createCanvas(600,400);
}

// this function continually runs whilst the program is running
// it changes the design of the canvas
function draw(){
    background(190,200,210);
}



