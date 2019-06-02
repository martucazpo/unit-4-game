var randNum = 0;
var crysVal = [0];
var crysNum = [0];
var crys1;
var crys2;
var crys3;
var crys4;
var getSum = 0;
var wins = 0;
var losses = 0;




function newGame() {
    console.log("new game!")

    getSum = 0;
    randNum = 0;

    $("#crys1").empty();
    $("#crys2").empty();
    $("#crys3").empty();
    $("#crys4").empty();

    randNum = Math.floor(Math.random() * (150 - 50 + 1) + 50);
    getSum = parseInt(getSum);

    crys1 = [(Math.ceil(Math.random() * (20 - 1 + 1) + 1))];
    crys1 = parseInt(crys1);

    crys2 = [(Math.ceil(Math.random() * (20 - 1 + 1) + 1))];
    crys2 = parseInt(crys2);

    crys3 = [(Math.ceil(Math.random() * (20 - 1 + 1) + 1))];
    crys3 = parseInt(crys3);

    crys4 = [(Math.ceil(Math.random() * (20 - 1 + 1) + 1))];
    crys4 = parseInt(crys4);

    $("#randNum").html(randNum);


};


function playGame() {


    if (getSum < randNum) {
        $("#score").html(getSum);
    }
    else if (getSum === randNum) {
        wins++;
        console.log("you win!");
        $("#score").html("You won! " + getSum);
        $("#wins").html("wins: " + wins);
        newGame();
    }
    else {
        losses++;
        console.log("lose");
        $("#score").html("Oh no! You went over!" + getSum);
        $("#losses").html("losses: " + losses);
        newGame();
    }
}

$(document).ready(function () {
    newGame();


    getSum = parseInt(getSum);

    $("#crys1").on("click", function () {
        $("#crys1").html(crys1);
        getSum = (getSum + crys1);
        console.log(getSum);
        $("#score").html(getSum);
        playGame();
    });

    $("#crys2").on("click", function () {
        $("#crys2").html(crys2);
        getSum = getSum + crys2;
        console.log(crys2);
        $("#score").html(getSum);
        playGame()
    });

    $("#crys3").on("click", function () {
        $("#crys3").html(crys3);
        getSum = getSum + crys3;
        console.log(crys3);
        $("#score").html(getSum);
        playGame();

    });

    $("#crys4").on("click", function () {
        $("#crys4").html(crys4)
        getSum = getSum + crys4;
        console.log(crys4);
        $("#score").html(getSum);
        playGame();
    });



})
