var randNum = Math.floor(Math.random() * (150 - 50 + 1) + 50);
var crysVal = [];
var crysNum = [];
var playGame = 0;
var crys1 = [];
var crys2 = [];
var crys3 = [];
var crys4 = [];
wins = 0;
losses = 0;

$(document).ready(function () {
    $("#randNum").html(randNum);
});

$(document).ready(gameLoop);

function gameLoop() {
    while (crysVal.length < 4) {
        var r = Math.ceil(Math.random() * (20 - 1 + 1) + 1);
        if (crysVal.indexOf(r) === -1) crysVal.push(r);
        console.log(crysVal);
    };

    $("#crys1").on("click", function () {
        $("#crys1").html(crysVal[0]);
        crys1 = (crysVal[0]);
        crysNum.push(crys1);
        console.log(crysNum);
    });
    $("#crys2").on("click", function () {
        $("#crys2").html(crysVal[1]);
        crys2 = crysVal[1];
        crysNum.push(crys2);
        console.log(crysNum);
    });
    $("#crys3").on("click", function () {
        $("#crys3").html(crysVal[2]);
        crys3 = crysVal[2];
        crysNum.push(crys3);
        console.log(crysNum);

    });
    $("#crys4").on("click", function () {
        $("#crys4").html(crysVal[3]);
        crys4 = crysVal[3];
        crysNum.push(crys4);
        console.log(crysNum);
    });



    $(".btn").on("click", function () {
        for (var i = 0; i < crysNum.length; i++) {
            playGame += (crysNum[i]);
            $("#score").html("score " + playGame)
        };
    });
};