var randNum = Math.floor(Math.random() * (150 - 50 + 1) + 50);
var crysVal = [];
var playGame = [];
wins = 0;
losses = 0;
display = "";

$(document).ready(function () {
    $("#randNum").html(randNum);
});

$(document).ready(crysNum);

function crysNum() {
    while (crysVal.length < 4) {
        var r = Math.ceil(Math.random() * (20 - 1 + 1) + 1);
        if (crysVal.indexOf(r) === -1) crysVal.push(r);
        console.log(crysVal);
        $(document).on("click", function () {
            $("#crys1").html(crysVal[0]);
            $("#crys2").html(crysVal[1]);
            $("#crys3").html(crysVal[2]);
            $("#crys4").html(crysVal[3]);
                         
            $("#crys1").on("click", function () {
                playGame.push(crysVal[0]);
            });
            $("#crys2").on("click", function () {
                playGame.push(crysVal[1]);
            });
            $("#crys3").on("click", function () {
                playGame.push(crysVal[2]);
            });
            $("#crys4").on("click", function () {
                playGame.push(crysVal[3]);
            });
            console.log(playGame);

        })

    };
};