var inputEmail, inputPass, inputLname, inputFname, inputRole, username;


function foo(){
    var name = document.getElementById("fname").value;
    console.log(name);
}

function store(){
    inputEmail = document.getElementById("email").value;
    // encryption
    inputEmail = CryptoJS.AES.encrypt(inputEmail, "palladian");
    localStorage.setItem("email", inputEmail);

    inputLname = document.getElementById("lname").value;
    localStorage.setItem("lname", inputLname);

    inputFname = document.getElementById("fname").value;
    localStorage.setItem("fname", inputFname);

    inputPass = document.getElementById("pass").value;
    //encrypt password

    inputPass = CryptoJS.AES.encrypt(inputPass, "palladian");
    localStorage.setItem("pass", inputPass);

    inputRole = document.getElementById("role").value;
    localStorage.setItem("role", inputRole);

    username = inputFname.substring(0,1) + inputLname.substring(0,3) + "17";

    

    console.log(inputEmail);
    console.log(inputFname);
    console.log(inputLname);
    console.log(inputPass);
    console.log(inputRole);



    alert("sign up successful");

}


function setup(){
    createCanvas(600,400);
}

function draw(){
    background(190,200,210);
}

