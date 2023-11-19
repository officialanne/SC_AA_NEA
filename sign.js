var fs = require("fs");

function foo(){
    var name = document.getElementById("name").value;
    console.log(name);
    fs = require("fs");
    fs.writeFile("details.txt", String(name), (err) =>{
        // In case of a error throw err. 
        if (err) throw err;
    })
}

function writing(){
    
}

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(190,200,210);
}

