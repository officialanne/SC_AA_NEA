var storedFname, storedLname, storedPw, storedRole, userfn, userln, userpw, urole;


function check(){
    storedFname = localStorage.getItem("fname");
    console.log(storedFname);
    storedLname = localStorage.getItem("lname");
    console.log(storedLname);


    storedPw = localStorage.getItem("pass");
    
    //decrypt
    /*
    storedPw = CryptoJS.AES.decrypt(storedPw, "palladian");
    storedPw = storedPw.toString(CryptoJS.enc.Utf8);
    console.log(storedPw);
    */

    storedRole = localStorage.getItem("role");
    console.log(storedRole);


    userfn = document.getElementById("ufname").value;
    userln = document.getElementById("ulname").value;

    // encrpyt password to compare both encryptions
    userpw = document.getElementById("pass").value;
    userpw = CryptoJS.AES.encrypt(userpw, "palladian");

    urole = document.getElementById("l_role").value;

    if(userfn == storedFname && userpw == storedPw && userln == storedLname && urole==storedRole){
        alert("you are now logged in");
    }
    else{
        alert("error");
        event.preventDefault();
        someBug();
        return false;
    }


}




function setup(){
    createCanvas(600,400);
}

function draw(){
    background(200,200,220);
}

