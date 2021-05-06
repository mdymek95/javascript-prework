
const buttonPaper = document.getElementById('button-paper');
const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });


    function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
      if (argMoveId === 1) {
      return 'rock';
      } else if (argMoveId === 2) {
        return 'paper';
      } else if (argMoveId === 3) {
        return 'scissors';
      } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
      }
    }


    function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove === 'paper' && argComputerMove === 'rock') {
      printMessage('Wygrywasz!');
      } 
      else if (argPlayerMove === 'rock' && argComputerMove === 'scissors') {
        printMessage('Wygrywasz!');
      } 
      else if (argPlayerMove === 'scissors' && argComputerMove === 'paper') {
        printMessage('Wygrywasz!');
      } 
      else if (argPlayerMove === argComputerMove) {
        printMessage('Remis!');
      } 
      else {
        printMessage('Przegrywasz :(');
      }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  playerMove = argButtonName;
  console.log('Ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('Ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);

}