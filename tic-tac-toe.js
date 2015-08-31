$(function() {

var game = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
      ];

var player = '';
var player1Wins = 0;
var player2Wins = 0;

var play = prompt("Would you like to play the game? Y/N");
    play.toLowerCase();
      if (play === 'y') {
        var playerOneName = prompt("What is the name of player 1?");
        $('#player1').append(playerOneName).css({'text-align':'center', 'font-family':'arial'});
        var playerTwoName = prompt("What is the name of player 2?");
        $('#player2').append(playerTwoName).css({'text-align':'center', 'font-family':'arial'});
        playGame();
      }

function playGame() {
  var turn = 0;
  for(var i=0; i<game.length; i++) {
    for(var j=0; j<game.length; j++) {
      game[i][j]=null;
    }
  }
  $('.square').on('click', function(event) {
      if (turn % 2 === 0) {
        player = 'player1';
      }
        else {
            player = 'player2';
          }
    playTurn();
    checkForWinner(game);
    turn++;
  });
}

function playTurn() {

  var id = event.currentTarget.id;

  switch (id) {

  case "square1":
    if (player === 'player1') {
    $('#square1').text('X').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[0][0] = 1;
    }
      else {
    $('#square1').text('O').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[0][0] = 0;
    }
  break;

  case "square2":
    if (player === 'player1') {
    $('#square2').text('X').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[0][1] = 1;
    }
      else {
    $('#square2').text('O').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[0][1] = 0;
    }
  break;

  case "square3":
    if (player === 'player1') {
    $('#square3').text('X').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[0][2] = 1;
    }
      else {
    $('#square3').text('O').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[0][2] = 0;
    }
  break;

  case "square4":
    if (player === 'player1') {
    $('#square4').text('X').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[1][0] = 1;
    }
      else {
    $('#square4').text('O').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[1][0] = 0;
    }
  break;

  case "square5":
    if (player === 'player1') {
    $('#square5').text('X').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[1][1] = 1;
    }
      else {
    $('#square5').text('O').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[1][1] = 0;
    }
  break;

  case "square6":
    if (player === 'player1') {
    $('#square6').text('X').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[1][2] = 1;
    }
      else {
    $('#square6').text('O').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[1][2] = 0;
    }
  break;

  case "square7":
    if (player === 'player1') {
    $('#square7').text('X').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[2][0] = 1;
    }
      else {
    $('#square7').text('O').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[2][0] = 0;
    }
  break;

  case "square8":
    if (player === 'player1') {
    $('#square8').text('X').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[2][1] = 1;
    }
      else {
    $('#square8').text('O').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[2][1] = 0;
    }
  break;

  case "square9":
    if (player === 'player1') {
    $('#square9').text('X').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[2][2] = 1;
    }
      else {
    $('#square9').text('O').css({'font-size':'75px','text-align':'center', 'color':'#999900', 'font-family': "Arial", 'font-weight':'bold'});
    game[2][2] = 0;
    }
  break;

  default:
  console.log("You did not click on a valid square.")

  }
}


 function checkForWinner(arr) {
   if ((game[0][0] === 1 && game[0][0] === game[0][1] && game[0][1] === game[0][2]) ||
   (game[1][0] === 1 && game[1][0] === game[1][1] && game[1][1]=== game[1][2]) ||
   (game[2][0] === 1 && game[2][0] === game[2][1] && game[2][1] === game[2][2]) ||
   (game[0][0] === 1 && game[0][0] === game[1][0] && game [1][0] === game[2][0]) ||
   (game[0][1] === 1 && game[0][1] === game[1][1] && game [1][1] === game[2][1]) ||
   (game[0][2] === 1 && game[0][2] === game[1][2] && game[1][2] === game[2][2]) ||
   (game[0][0] === 1 && game[0][0] === game[1][1] && game[1][1]=== game[2][2]) ||
   (game[2][0] === 1 && game[2][0] === game[1][1] && game[1][1]=== game[0][2]) ||
   (game[0][0] === 0 && game[0][0] === game[0][1] && game[0][1] === game[0][2]) ||
   (game[1][0] === 0 && game[1][0] === game[1][1] && game[1][1]=== game[1][2]) ||
   (game[2][0] === 0 && game[2][0] === game[2][1] && game[2][1] === game[2][2]) ||
   (game[0][0] === 0 && game[0][0] === game[1][0] && game[1][0] === game[2][0]) ||
   (game[0][1] === 0 && game[0][1] === game[1][1] && game[1][1] === game[2][1]) ||
   (game[0][2] === 0 && game[0][2] === game[1][2] && game[1][2] === game[2][2]) ||
   (game[0][0] === 0 && game[0][0] === game[1][1] && game[1][1]=== game[2][2]) ||
   (game[2][0] === 0 && game[2][0] === game[1][1] && game[1][1]=== game[0][2]))
   {
     $('#balloons').velocity('fadeIn',{duration:1000}).css({'right': '0px','bottom':'0px','visibility':'visible'})
     $('#balloons').velocity('fadeOut',{delay:500}).css({'right': '0px','bottom':'0px','visibility':'visible'})
     alert("You have won the game!");
     if(player === 'player1'){
       player1Wins++;
       var playerOneWins = player1Wins.toString();
      $('#player1_games_won').text(playerOneWins).css({'text-align':'center', 'font-family':'arial'});
      }
      else {
       player2Wins++;
       var playerTwoWins = player2Wins.toString();
       $('#player2_games_won').text(playerTwoWins).css({'text-align':'center', 'font-family':'arial'});
      }
     var playAgain = prompt("Do you want to play again?(Y/N)");
     playAgain.toLowerCase();
       if (playAgain === 'y') {
         $('.square').off();
         $('.square').empty();
       playGame();
          }
          else {
            alert("Thanks for playing!");
          }
   }
   if (game[0][0]!==null && game[0][1]!==null && game[0][2]!==null && game[1][0]!==null && game[1][1]!==null
   && game[1][2]!==null && game[2][0]!==null && game[2][1]!==null && game[2][2]!==null) {
     alert("No one won!");
     var playAgain = prompt("Do you want to play again?(Y/N)");
      playAgain.toLowerCase();
        if (playAgain === 'y') {
          $('.square').off();
          $('.square').empty();
          playGame();
        }
          else {
       alert("Thanks for playing!");
     }
   }
   };
 });
