var userComment, storedFname, storedLname, storedPw, storedRole, userfn, userln, userpw, urole;

function checkComment(){
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


    userfn = document.getElementById("ufname").value;
    userln = document.getElementById("ulname").value;
    
    userpw = document.getElementById("pass").value;
    
    urole = document.getElementById("l_role").value;

    if(userfn == storedFname && userpw == storedPw && userln == storedLname && urole==storedRole){
        userpw = CryptoJS.AES.encrypt(userpw, "palladian");
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
    createCanvas(600,400);
}

function draw(){
    background("#BC6C25");
}