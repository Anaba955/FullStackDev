buttonColors = ["green", "red", "yellow", "blue"];
gamePattern = [];
userClickedPattern = [];
level = 0;
started = false;

// detect a click
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length - 1);
});


// Restart the game with a key press
$(document).keypress(function () {
    if(!started) { 

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        
    }
});



function nextSequence() {

    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColors[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
};


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");

    audio.play();
}

function animatePress(currentColor) {
    $("."+currentColor).addClass("pressed");
    setTimeout(function () {
        $("."+currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(currentLevel == gamePattern.length - 1) {
            setTimeout(nextSequence, 1000);
            userClickedPattern = [];
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    userClickedPattern = []
    console.log(userClickedPattern);
    console.log(gamePattern);
}

