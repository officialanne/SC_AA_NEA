var userComment, storedFname, storedLname, storedPw, storedRole, userfn, userln, userpw, urole;

function checkComment(){
    storedFname = localStorage.getItem("fname");
    console.log(storedFname);
    storedLname = localStorage.getItem("lname");
    console.log(storedLname);
    storedPw = localStorage.getItem("pass");
    console.log(storedPw);
    storedRole = localStorage.getItem("role");
    console.log(storedRole);


    userfn = document.getElementById("ufname").value;
    userln = document.getElementById("ulname").value;
    userpw = document.getElementById("pss").value;
    urole = document.getElementById("l_role").value;
    userComment = document.getElementById("comment").value;

    if(userfn == storedFname && userpw == storedPw && userln == storedLname && urole==storedRole){
        alert("your default email app will now be opened to send your email");
    }
    else{
        alert("error");
    }

}



function setup(){
    createCanvas(600,400);
}

function draw(){
    background("#BC6C25");
}