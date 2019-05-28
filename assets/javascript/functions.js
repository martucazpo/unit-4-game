function newGame(){
    $("#randNum").html();
    randNum = Math.floor(Math.random() * (150 - 50 + 1) + 50);
    crysVal = [];
    crysNum = [];
    crys1 = [];
    crys2 = [];
    crys3 = [];
    crys4 = [];
    $("#crys1").html();
    $("#crys2").html();
    $("#crys3").html();
    $("#crys4").html();
    $("#score").html();
    $("#crys1").off("click", function(){});
    $("#crys2").off("click", function(){});
    $("#crys3").off("click", function(){});
    $("#crys4").off("click", function(){});
    $(".btn").off("click", function playGame(item){});
    $("#randNum").html(randNum);
    gameLoop();
};

function getSum(total, num) {
    return total + num;
};


function setUp(){
    $("#randNum").html(randNum);
    gameLoop();
}