// Computer

function computerPlay() {
  let playOptions = ['rock', 'paper', 'scissors']

  computerRandomPlay = Math.floor(Math.random() * playOptions.length)
  // console.log(computerRandomPlay)
  let item = playOptions[computerRandomPlay]
  return item
}

// Versus

function playRound() {
  // moved computerSelection and playerSelection variable inside playRound(), because of scope issues

  let computerSelection = computerPlay()

  let playerSelection = prompt(
    'Please type in your move (rock, paper, or scissors)',
    'type here'
  )

  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. The game is a tie!`
  } else if (
    playerSelection.toLowerCase() == 'rock' &&
    computerSelection == 'paper'
  ) {
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Computer wins!`
  } else if (
    playerSelection.toLowerCase() == 'rock' &&
    computerSelection == 'scissors'
  ) {
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Player wins!`
  } else if (
    playerSelection.toLowerCase() == 'paper' &&
    computerSelection == 'scissors'
  ) {
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Computer wins!`
  } else if (
    computerSelection.toLowerCase() == 'rock' &&
    playerSelection == 'paper'
  ) {
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Player wins!`
  } else if (
    computerSelection.toLowerCase() == 'rock' &&
    playerSelection == 'scissors'
  ) {
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Computer wins!`
  } else if (
    computerSelection.toLowerCase() == 'paper' &&
    playerSelection == 'scissors'
  ) {
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Player wins!`
  } else {
    return 'Hey something is wrong!'
  }
}

// console.log(playRound(playerSelection, computerSelection))

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound())
  }
}

game()
