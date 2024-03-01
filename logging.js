// variables to retireve username, first name, last name, password
// compare to the same details entered in the form
var storedUsername, storedFname, storedLname, storedPw, storedRole, userfn, userln, userpw, urole, checkUsername;


// this function retrieves the information saved from signup
// then compares this with information entered in the login form
// this is called when the form is submitted

// the form is submitted with valid details but cannot be submitted if details are incorrect
function check() {

    // get first name from local storage
    storedFname = localStorage.getItem("fname");
    console.log(storedFname);


    // get last name from local storage
    storedLname = localStorage.getItem("lname");
    console.log(storedLname);


    // get password from local storage
    storedPw = localStorage.getItem("pass");
    
    //decrypt
    storedPw = CryptoJS.AES.decrypt(storedPw, "palladian");

    // convert to string
    storedPw = storedPw.toString(CryptoJS.enc.Utf8);
    console.log(storedPw);

    // get role from local storage
    storedRole = localStorage.getItem("role");
    console.log(storedRole);


    // retrieve username from local storage
    storedUsername = localStorage.getItem("username");
    // print into console
    console.log(storedUsername);

    //get first name from form
    userfn = document.getElementById("ufname").value;

    // get last name from form
    userln = document.getElementById("ulname").value;

    // get role from form
    urole = document.getElementById("l_role").value;

    //get username from form
    checkUsername = document.getElementById("username").value;
    console.log(checkUsername);

    // get password (plain text) from form
    userpw = document.getElementById("pass").value;
    console.log(userpw);

    
    
    // if the usernames or first and last names are the same
    // and if the passwords and roles are the same, allow login
    if((checkUsername == storedUsername || (userfn == storedFname && userln == storedLname)) && userpw == storedPw && urole==storedRole){
        alert("you are now logged in");
        
    }

    // otherwise, don't allow submission
    else{
        alert("Invalid details");
        event.preventDefault();
        //someBug();
        return false;
    }


}



// this function runs once and allows a canvas to be drawn on the page
function setup(){
    createCanvas(600,400);
}

// this function continually runs and allows the editing of the canvas
function draw(){
    background(200,200,220);
}

