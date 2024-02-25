var storedUsername, storedFname, storedLname, storedPw, storedRole, userfn, userln, userpw, urole, checkUsername;


function check(){
    storedFname = localStorage.getItem("fname");
    console.log(storedFname);
    storedLname = localStorage.getItem("lname");
    console.log(storedLname);


    storedPw = localStorage.getItem("pass");
    
    //decrypt
    storedPw = CryptoJS.AES.decrypt(storedPw, "palladian");
    storedPw = storedPw.toString(CryptoJS.enc.Utf8);
    console.log(storedPw);

    

    storedRole = localStorage.getItem("role");
    console.log(storedRole);

    // retrieve username from local storage
    storedUsername = localStorage.getItem("username");
    // print into console
    console.log(storedUsername);


    userfn = document.getElementById("ufname").value;
    userln = document.getElementById("ulname").value;
    urole = document.getElementById("l_role").value;

    //get username from form
    checkUsername = document.getElementById("username").value;
    // print to console
    console.log(checkUsername);

    
    userpw = document.getElementById("pass").value;
    console.log(userpw);

    
    

    if((checkUsername == storedUsername || (userfn == storedFname && userln == storedLname)) && userpw == storedPw && urole==storedRole){
        alert("you are now logged in");
        
    }
    else{
        alert("Invalid details");
        event.preventDefault();
        //someBug();
        return false;
    }


}




function setup(){
    createCanvas(600,400);
}

function draw(){
    background(200,200,220);
}

