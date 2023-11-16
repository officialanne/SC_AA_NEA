var fs = require('fs-js');
fs.appendFile('myfile.txt', 'hello', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
    });



function foo(){
    var name = document.getElementById("name").value;
    console.log(name);
    String(name);
    
}

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(190,200,210);
}