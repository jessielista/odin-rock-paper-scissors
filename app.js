// Computer

let playOptions = ['rock', 'paper', 'scissors']

function computerPlay() {
  computerRandomPlay = Math.floor(Math.random() * playOptions.length)
  // console.log(computerRandomPlay)
  let item = playOptions[computerRandomPlay]
  return item
}

let computerSelection = computerPlay()

// Player

let playerSelection = prompt(
  'Please type in your move (rock, paper, or scissors)',
  'type here'
)
console.log(`Player:${playerSelection}`)

console.log(`Computer:${computerSelection}`)

// Versus

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
    return 'rock:it is a tie'
  } else if (
    playerSelection.toLowerCase() == 'paper' &&
    computerSelection == 'paper'
  ) {
    return 'paper: it is a tie'
  } else if (
    playerSelection.toLowerCase() == 'scissors' &&
    computerSelection == 'scissors'
  ) {
    return 'scissors: it is a tie'
  } else if (
    playerSelection.toLowerCase() == 'rock' &&
    computerSelection == 'paper'
  ) {
    return 'Player chooses rock and Computer chooses paper. Computer wins!'
  } else if (
    playerSelection.toLowerCase() == 'rock' &&
    computerSelection == 'scissors'
  ) {
    return 'Player chooses rock and Computer chooses scissors. Player wins!'
  } else if (
    playerSelection.toLowerCase() == 'paper' &&
    computerSelection == 'scissors'
  ) {
    return 'Player chooses paper and Computer chooses scissors. Computer wins!'
  } else if (
    computerSelection.toLowerCase() == 'rock' &&
    playerSelection == 'paper'
  ) {
    return 'Computer chooses rock and Player chooses paper. Player wins!'
  } else if (
    computerSelection.toLowerCase() == 'rock' &&
    playerSelection == 'scissors'
  ) {
    return 'Computer chooses rock and Player chooses scissors. Computer wins!'
  } else if (
    computerSelection.toLowerCase() == 'paper' &&
    playerSelection == 'scissors'
  ) {
    return 'Computer chooses paper and Player chooses scissors. Player wins!'
  } else {
    return 'Hey something is wrong!'
  }
  // should refactor
}

console.log(playRound(playerSelection, computerSelection))
