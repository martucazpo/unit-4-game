var randNum = Math.floor(Math.random() * (150 - 50 + 1) + 50);
var crysVal = [];
var crysNum = [];
var playGame = [];
var crys1 = [];
var crys2 = [];
var crys3 = [];
var crys4 = [];
wins = 0;
losses = 0;

$(document).ready(function () {
    $("#randNum").html(randNum);
});

$(document).ready(getNum);

function getNum() {
    while (crysVal.length < 4) {
        var r = Math.ceil(Math.random() * (20 - 1 + 1) + 1);
        if (crysVal.indexOf(r) === -1) crysVal.push(r);
        console.log(crysVal);

        $("#crys1").on("click", function () {
            $("#crys1").html(crysVal[0]);
            crys1 = crysVal[0]; 
            playGame.push(crys1);
            console.log(playGame);
        });
        $("#crys2").on("click", function () {
            $("#crys2").html(crysVal[1]);
            crys2 = crysVal[1];
            playGame.push(crys2);
            console.log(playGame);
        });
        $("#crys3").on("click", function () {
            $("#crys3").html(crysVal[2]);
            crys3 = crysVal[2];
            playGame.push(crys3);
            console.log(playGame);

        });
        $("#crys4").on("click", function () {
            $("#crys4").html(crysVal[3]);
            crys4 = crysVal[3];
            playGame.push(crys4);
            console.log(playGame);
        });
        console.log(playGame);
    };
    
};