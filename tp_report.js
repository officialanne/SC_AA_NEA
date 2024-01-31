// getting the arrays that hold the scores from local storage
var scores = new Array();
scores[0] = JSON.parse(localStorage.getItem("1 Scores: "));
scores[1] = JSON.parse(localStorage.getItem("2 Scores: "));
scores[2] = JSON.parse(localStorage.getItem("3 Scores: "));
scores[3] = JSON.parse(localStorage.getItem("4 Scores: "));
scores[4] = JSON.parse(localStorage.getItem("5 Scores: "));
scores[5] = JSON.parse(localStorage.getItem("6 Scores: "));
scores[6] = JSON.parse(localStorage.getItem("7 Scores: "));
scores[7] = JSON.parse(localStorage.getItem("8 Scores: "));
scores[8] = JSON.parse(localStorage.getItem("9 Scores: "));
scores[9] = JSON.parse(localStorage.getItem("10 Scores: "));
scores[10] = JSON.parse(localStorage.getItem("11 Scores: "));
scores[11] = JSON.parse(localStorage.getItem("12 Scores: "));


var intScores = new Array();
intScores[0] = [];
intScores[1] = [];
intScores[2] = [];
intScores[3] = [];
intScores[4] = [];
intScores[5] = [];
intScores[6] = [];
intScores[7] = [];
intScores[8] = [];
intScores[9] = [];
intScores[10] = [];
intScores[11] = [];

let length1, length2, length3, length4, length5, length6, length7, length8, length9, length10, length11, length12
let total1, total2, total3, total4, total5, total6, total7, total8, total9, total10, total11, total12
let avg1, avg2, avg3, avg4, avg5, avg6, avg7, avg8, avg9, avg10, avg11, avg12


function setup(){
    textAlign(CENTER);
    createCanvas(500, 300);
    background("#778DA9");

    // setting the x-axis to the units
    var xValues = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12", "_"];


    // setting the y axis to the average score per unit
    // unit 1

    if(scores[0] == null){
        avg1 = 0;
    }
    
    else{
        length1 = scores[0].length;
        total1 = 0;

        for (i = 0; i < length1; i++){
            intScores[0][i] = parseInt(scores[0][i], 10);
            total1 = total1 + intScores[0][i];
        }
        avg1 = total1 / length1;
    }

    

    // unit 2
    if (scores[1] == null){
        avg2 = 0;
    }

    else{
        length2 = scores[1].length;
        total2 = 0;

        for (i = 0; i < length2; i++){
            intScores[1][i] = parseInt(scores[1][i], 10);
            total2 = total2 + intScores[1][i];
        }
        avg2 = total2 / length2;
    }


    // unit 3
    if (scores[2] == null){
        avg3 = 0;
    }
    else{
        length3 = scores[2].length;
        total3 = 0;

        for (i = 0; i < length3; i++){
            intScores[2][i] = parseInt(scores[2][i], 10);
            total3 = total3 + intScores[2][i];
        }
        avg3 = total3 / length3;

    }
    

    // unit 4
    if (scores[3] == null){
        avg4 = 0;
    }
    else{
        length4 = scores[3].length;
        total4 = 0;

        for (i = 0; i < length4; i++){
            intScores[3][i] = parseInt(scores[3][i], 10);
            total4 = total4 + intScores[3][i];
        }
        avg4 = total4 / length4;
    }
    
    // unit 5
    if (scores[4] == null){
        avg5 = 0;
    }
    else{
        length5 = scores[4].length;
        total5 = 0;

        for (i = 0; i < length5; i++){
            intScores[4][i] = parseInt(scores[4][i], 10);
            total5 = total5 + intScores[4][i];
        }
        avg5 = total5 / length5;
    }

    //unit 6
    if (scores[5] == null){
        avg6 = 0;
    }
    else{
        length6 = scores[5].length;
        total6 = 0;

        for (i = 0; i < length6; i++){
            intScores[5][i] = parseInt(scores[5][i], 10);
            total6 = total6 + intScores[5][i];
        }
        avg6 = total6 / length6;
    }

    // unit 7
    if (scores[6] == null){
        avg7 = 0;
    }
    else{
        length7 = scores[6].length;
        total7 = 0;

        for (i = 0; i < length7; i++){
            intScores[6][i] = parseInt(scores[6][i], 10);
            total7 = total7 + intScores[6][i];
        }
        avg7 = total7 / length7;
    }

    // unit 8

    if (scores[7] == null){
        avg8 = 0;
    }
    else{
        length8 = scores[7].length;
        total8 = 0;

        for (i = 0; i < length8; i++){
            intScores[7][i] = parseInt(scores[7][i], 10);
            total8 = total8 + intScores[7][i];
        }
        avg8 = total8 / length8;
    }

    // unit 9

    if (scores[8] == null){
        avg9 = 0;
    }
    else{
        length9 = scores[8].length;
        total9 = 0;

        for (i = 0; i < length9; i++){
            intScores[8][i] = parseInt(scores[8][i], 10);
            total9 = total9 + intScores[8][i];
        }
        avg9 = total9 / length9;
    }

    // unit 10

    if (scores[9] == null){
        avg10 = 0;
    }
    else{
        length10 = scores[9].length;
        total10 = 0;

        for (i = 0; i < length10; i++){
            intScores[9][i] = parseInt(scores[9][i], 10);
            total10 = total10 + intScores[9][i];
        }
        avg10 = total10 / length10;
    }

    // unit 11
    if (scores[10] == null){
        avg11 = 0;
    }
    else{
        length11 = scores[10].length;
        total11 = 0;

        for (i = 0; i < length11; i++){
            intScores[10][i] = parseInt(scores[10][i], 10);
            total11 = total11 + intScores[10][i];
        }
        avg11 = total11 / length11;
    }
    

    // unit 12
    if (scores[11] == null){
        avg12 = 0;
    }
    else{
        length12 = scores[11].length;
        total12 = 0;

        for (i = 0; i < length12; i++){
            intScores[11][i] = parseInt(scores[11][i], 10);
            total12 = total12 + intScores[11][i];
        }
        avg12 = total12 / length12;
    }

    
    var yValues = [avg1, avg2, avg3, avg4, avg5, avg6, avg7, avg8, avg9, avg10, avg11, avg12, 0];

    // colours per bar for the unit
    var barColors = ["red", "green", "blue", "orange", "brown", "red", "green", "blue", "orange", "brown", "purple", "yellow"];



    new Chart("myChart", {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Average Scores for Each Unit"
          }
        }
      });
}

function draw(){
    
}