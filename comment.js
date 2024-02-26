var parentID, storedUsername, userComment, storedFname, storedLname, storedPw, storedRole, userfn, userln, userpw, urole;

function checkComment() {

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
    //convert to string
    storedPw = storedPw.toString(CryptoJS.enc.Utf8);
    console.log(storedPw);

    // get role from local storage
    storedRole = localStorage.getItem("role");
    console.log(storedRole);

    // get username from local storage
    storedUsername = localStorage.getItem("username");
    console.log(storedUsername);


    // get first name from form
    userfn = document.getElementById("ufname").value;

    // get last name from form
    userln = document.getElementById("ulname").value;

    // get password from form
    userpw = document.getElementById("pass").value;

    // get role from form
    urole = document.getElementById("l_role").value;

    // get username from form
    parentID = document.getElementById("username").value;

    // if the usernames are the same or the first and last names are the same
    // and the password and roles are the same
    // then allow the user to submit form
    if ((parentID == storedUsername || (userfn == storedFname && userln == storedLname)) && userpw == storedPw && urole==storedRole){
        // encrypt the password again so that it is not intercepted
        userpw = CryptoJS.AES.encrypt(userpw, "palladian");

        // let the user know the method of submission
        alert("your default email app will now be opened to send your email");
    }
    else{
        alert("incorrect details entered, please try again");
        event.preventDefault();
        //someBug();
        return false;
    }

}



function setup(){
    //createCanvas(600,400);
}

function draw(){
    //background("#BC6C25");
}