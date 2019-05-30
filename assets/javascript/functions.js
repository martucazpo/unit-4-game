function newGame(){
    console.log("new game!")
    $("#randNum").html();
    randNum = Math.floor(Math.random() * (150 - 50 + 1) + 50);
    crysVal = [];
    crysNum = [0];
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
    $(".btn").off("click", function playGame(){});
    setUp();
};

function getSum(total, num) {
    return total + num;
};


function setUp(){
    intializeRandoms();
    console.log('setup')
    $("#randNum").html(randNum);
    gameLoop();
}

function intializeRandoms() {
    crysVal = []
    while (crysVal.length < 4) {
        console.log('while')
        var r = Math.ceil(Math.random() * (20 - 1 + 1) + 1);
        // if (crysVal.indexOf(r) === -1) crysVal.push(r);
        crysVal.push(r);
        console.log('RANDO',r)
    };
}

function gameLoop() {
    // console.log('gameloop')
    // crysVal = [];
    // while (crysVal.length < 4) {
    //     console.log('while')
    //     var r = Math.ceil(Math.random() * (20 - 1 + 1) + 1);
    //     // if (crysVal.indexOf(r) === -1) crysVal.push(r);
    //     crysVal.push(r);
    // };
    

    $("#crys1").on("click", function () {
        $("#crys1").html(crysVal[0]);
        crys1 = (crysVal[0]);
        crysNum.push(crys1);
    });
    $("#crys2").on("click", function () {
        $("#crys2").html(crysVal[1]);
        crys2 = crysVal[1];
        crysNum.push(crys2);
    });
    $("#crys3").on("click", function () {
        $("#crys3").html(crysVal[2]);
        crys3 = crysVal[2];
        crysNum.push(crys3);

    });
    $("#crys4").on("click", function () {
        $("#crys4").html(crysVal[3]);
        crys4 = crysVal[3];
        crysNum.push(crys4);
    });

    

    $(".btn").on("click", function playGame() {
        if (crysNum.reduce(getSum) === randNum) {
            win();     
        }
        else if (crysNum.reduce(getSum) > randNum) {
            lose();
        }
        else {
            $("#score").html(crysNum.reduce(getSum));
        }
    });

};

function win() {
    console.log('win')
    $("#score").html("right on! you win! " + crysNum.reduce(getSum));
    $("#wins").html("wins: " + wins++); 
    newGame();       
};

function lose() {
    console.log('lose')
    $("#score").html("you lost! you went too high! " + crysNum.reduce(getSum));
    $("#losses").html("losses: " + losses++);
    newGame();
};
