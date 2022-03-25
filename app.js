let computerScore = 0
let playerScore = 0

let player = ''
let computer = ''
const selection = ['Rock', 'Paper', 'Scissors']

// Function to create the computer's random move
function computerChooses() {
  // This is creating the random numbers, based off the selection array.
  const randomComputerIndex = Math.floor(Math.random() * selection.length)
  // Re-assigning computer to the selection[index]. This is possible because of computer scope being global.
  computer = selection[randomComputerIndex]
}

// Function that will show the player's choice when button corresponding button is clicked. It is fired with the playerChooses() event listener.
function playerChooses(e) {
  player = e.target.innerText
  // console.log(player.currentSelection);
  compareChoices()
}

// Function to compare the choices of computer vs player
function compareChoices() {
  // Below is a nested function. JavaScript works-based LIFO LIFO stands for Last In First Out. So that means that computerChooses(), the child function will be called first, then the parent function compareChoices(), the parent function
  computerChooses()

  if (computer === player) {
    displayResult(
      "It's a tie! The computer selected " +
        computer +
        ' and you selected ' +
        player
    )
  } else if (computer === selection[0] && player === selection[1]) {
    playerScore++
    displayResult(
      'The player wins! The computer selected ' +
        computer +
        ' and the you selected ' +
        player
    )
  } else if (computer === selection[1] && player === selection[2]) {
    playerScore++
    displayResult(
      'The player wins! The computer selected ' +
        computer +
        ' and the you selected ' +
        player
    )
  } else if (computer === selection[2] && player === selection[0]) {
    playerScore++
    displayResult(
      'The player wins! The computer selected ' +
        computer +
        ' and the you selected ' +
        player
    )
  } else if (player === selection[0] && computer === selection[1]) {
    computerScore++
    displayResult(
      'The computer wins! The computer selected ' +
        computer +
        ' and the you selected ' +
        player
    )
  } else if (player === selection[1] && computer === selection[2]) {
    computerScore++
    displayResult(
      'The computer wins! The computer selected ' +
        computer +
        ' and the you selected ' +
        player
    )
  } else if (player === selection[2] && computer === selection[0]) {
    computerScore++
    displayResult(
      'The computer wins! The computer selected ' +
        computer +
        ' and the you selected ' +
        player
    )
  }
}

// Function that appends results to be displayed via the DOM
function displayResult(result) {
  const resultText = document.createElement('p')
  resultText.setAttribute('id', 'winnerShows')
  // console.log(resultText)
  resultText.innerText = result
  //  Below is what keeps the list of plays from stacking
  document.body.removeChild(document.body.lastChild)
  //  Below is what keep appending the results
  document.body.appendChild(resultText)
  displayPoints()
  game()
}

// Function that appends points for each round

function displayPoints() {
  let score = document.getElementById('myList')
  score.innerHTML = `Computer: ${computerScore} & Player: ${playerScore}`
}

function displayWinner() {
  let win = document.getElementById('winnerShows')
  if (computerScore >= 5) {
    win.innerHTML = `The winner is the computer`
  } else if (playerScore >= 5) {
    win.innerHTML = `The winner is the player`
  } else {
    console.log('what is happening')
  }
}

function stopBtn() {
  document.getElementById('rock').disabled = true
  document.getElementById('paper').disabled = true
  document.getElementById('scissors').disabled = true
}

// Function
function game() {
  if (computerScore >= 5) {
    stopBtn()
    displayWinner()
  } else if (playerScore >= 5) {
    stopBtn()
    displayWinner()
  }
}

// Compare player choice vs computer choice once clicked
document.getElementById('rock').addEventListener('click', playerChooses)
document.getElementById('paper').addEventListener('click', playerChooses)
document.getElementById('scissors').addEventListener('click', playerChooses)

// sequence of things: button is clicked, it fires off, playChooses(), then that fires off compareChoices(), which fires off computerChooses(), which then fires off  displayResult(), which then fires of displayPoints() etc.
