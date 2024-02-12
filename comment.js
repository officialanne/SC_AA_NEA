var userComment, storedFname, storedLname, storedPw, storedRole, userfn, userln, userpw, urole;

function checkComment(){
    storedFname = localStorage.getItem("fname");
    console.log(storedFname);
    storedLname = localStorage.getItem("lname");
    console.log(storedLname);


    storedPw = localStorage.getItem("pass");

    storedRole = localStorage.getItem("role");
    console.log(storedRole);


    userfn = document.getElementById("ufname").value;
    userln = document.getElementById("ulname").value;
    
    // encrpyt password to compare both encryptions
    userpw = document.getElementById("pass").value;
    userpw = CryptoJS.AES.encrypt(userpw, "palladian");
    
    urole = document.getElementById("l_role").value;

    document.getElementById("pass").innerHTML = userpw;

    if(userfn == storedFname && userpw == storedPw && userln == storedLname && urole==storedRole){
        alert("your default email app will now be opened to send your email");
    }
    else{
        alert("incorrect details entered, please try again");
        event.preventDefault();
        someBug();
        return false;
    }

}

//decrypt
    /*
    storedPw = CryptoJS.AES.decrypt(storedPw, "palladian");
    storedPw = storedPw.toString(CryptoJS.enc.Utf8);
    console.log(storedPw);
    */



function setup(){
    createCanvas(600,400);
}

function draw(){
    background("#BC6C25");
}