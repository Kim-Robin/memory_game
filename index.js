//jshint esversion:6

let gamePattern =[];
let buttons = ["yellow", "blue", "black", "red", "green", "purple"];
let userChosenPattern = [];

let gameStart = false;
let level = 0;



function sequence(){
  userChosenPattern = [];
  level++;
  $("#gameTitle").text("Level " + level);

  let random = Math.floor(Math.random() * 6);
  gamePattern.push(buttons[random]);

  $("#" + buttons[random]).fadeIn(120).fadeOut(120).fadeIn(120);
}

$(".buttton").click(function(){
  console.log("clicked");
  userChosenPattern.push($(this).attr("id"));
  checkAnswer(userChosenPattern.length - 1);
});

function checkAnswer(currentlevel){
  if(gamePattern[currentlevel] === userChosenPattern[currentlevel]){
    if(gamePattern.length === userChosenPattern.length){
      setTimeout(function(){
        sequence();
      }, 1200);
    }
  }else{
    $(".main").addClass("game-over");
    setTimeout(function(){
      $(".main").removeClass("game-over");
    }, 420);
    $("#gameTitle").text("Game Over, Press Any Key to Restart");
    level = 0;
    gamePattern = [];
    gameStart = false;
  }
}


$(document).keypress(function(){
  // console.log("Hello");
  if(gameStart == false){
    $('#gameTitle').text("Level " + level);
    sequence();
    gameStart = true;
  }
});
