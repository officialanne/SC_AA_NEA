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

// variables to get all average scores and display
var averages = new Array();
var totals = new Array();
var lengths = new Array();

var toPractise = new Array();
var toImprove = new Array();
var wellDone = new Array();

let pos = 0;



function setup(){
    textAlign(CENTER);
    createCanvas(500, 300);
    background("#778DA9");

    getScores();


    // setting the x-axis to the units
    var xValues = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9", "Unit 10", "Unit 11", "Unit 12", "Units", ""];

    
    // the height of each bar is the average score
    var yValues = [averages[0], averages[1], averages[2], averages[3], averages[4], averages[5], averages[6], averages[7], averages[8], averages[9], averages[10], averages[11], 0, 10];

    // colours per bar for the unit
    var barColors = ["olive", "seagreen", "blue", "orange", "brown", "pink", "darkblue", "blue", "orange", "brown", "purple", "yellow"];


    // drawing the chart into the html page
    new Chart("barChart", {
        // this is a bar chart
        type: "bar",
        data: {
            // the x axis labels are the units 
          labels: xValues,
          datasets: [{
            // the colours will be those in the array
            backgroundColor: barColors,

            // the data are the average scores
            data: yValues
          }]
        },
        options: {
            // this allows the title to be displayed
          legend: {display: false},
          title: {
            display: true,
            text: "Average Scores for Each Unit (out of 10)"
          }
        }
      });

    // Adding recommendations based on scores
    for (index = 0; index<=11; index=index+1){

        // average = 0
        if (yValues[index] == 0){
            toPractise[toPractise.length] = (index+1);
        }
        
        // average between 1 and 5
        else if (yValues[index]<=5){
            toImprove[toImprove.length] = index+1;
        }

        // average above 5
        else if (5<yValues[index]<11){
            wellDone[wellDone.length] = index+1
        }
    }


    textSize(15);
    fill("darkRed");
    // Adding recommendations for units with an average score of 0
    text("These units have an average score of 0: " + toPractise + "\n Test Your Knowledge using the quizzes", 250, 50);

    fill("orange");
    // Adding recommendations for units with average score <= 5
    text("Units " + toImprove + " have an average score less than 5 -  \n Check out the summary notes to build up your knowledge", 250, 120);

    fill("darkGreen");
    // Adding recommendations for units with an average score of 0
    text("These units have an average score above 5: " + wellDone + "\n Keep it up!", 250, 190);
    
    fill("black");
    text("Well done for remaining consistent - \n Revise core fundamentals using the quizzes, flashcards and notes", 250, 260);

    // Progression Chart into html web page
    // getting the chart by Id and putting into 2d
    var ctx = document.getElementById("lineGraph").getContext("2d");

    // setting the inital average to 0
    var avgAll = 0;

    // setting the total to 0
    var avgAllTotal = 0;

    // for units 1 to 12
    for (i = 0; i<12; i++){
        // get the average from the average of each unit
        avgAllTotal = avgAllTotal + yValues[i];
    }

    // divide by all units, which is 12
    avgAll = avgAllTotal/12;

    // make into an integer
    avgAll = Math.trunc(avgAll);
    if (avgAll > 8){
        avgAll = 8;
    }
    // set this average to local storage
    localStorage.setItem("all averge scores", avgAll.toString());

    // draw the line graph
    var lineGraph = new Chart(ctx, {
    // set the line graph
    type: 'line',
    options: {
        // setting the data type of the x axis to be time
        scales: {
        xAxes: [{
            type: 'time',
        }]
        }
    },
    data: {
        // this has dates from 2024 Feb to Exam time
        labels: ["2024-02-16T13:03:00Z", "2024-03-16T13:02:00Z", "2024-04-16T14:12:00Z"],
        datasets: [{
        // average scores beginning from origin, 0
        label: 'Average Score',
        data: [{
            // initially being 0
            t: '2024-02-16T13:03:00Z',
            y: 0
            },
            {
            // moving to the current average score
            t: '2024-03-16T13:02:00Z',
            y: avgAll
            },
            {
            // projected to improve linearly over time
            t: '2024-04-16T13:02:00Z',
            y: avgAll + 1
            },
            {
            t: '2024-05-16T14:12:00Z',
            y: avgAll + 2
            }
        ],
        // making the background colour pink
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],

        // border colour a darker pink
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],

        // setting the width of the border to be thick
        borderWidth: 1
        }]
    }
    });
}

function draw(){
    
}


function getScores(){
    // setting the y axis to the average score per unit

    // looping through all units for lengths, totals and averages
    for (var unit = 0; unit <12; unit++){
        // if the score retrieved from local storage is empty
        if(scores[unit] == null){
            // set the average to 0
            averages[unit] = 0;
        }
        
        // if it is not empty
        else{

            // the length for that unit is the length from local storage
            lengths[unit] = scores[unit].length;

            // set the total to 0
            totals[unit] = 0;

            // going through each score in the unit and adding to the total
            for (index = 0; index < lengths[unit]; index++){
                intScores[unit][index] = parseInt(scores[unit][index], 10);
                totals[unit] = totals[unit] + intScores[unit][index];
            }

            // dividing the total by the length
            averages[unit] = totals[unit] / lengths[unit];
        }
    }
}

