// Score

let computerScore = 0
let playerScore = 0

// Computer Generates Random Move

function computerPlay() {
  let playOptions = ['rock', 'paper', 'scissors']

  computerRandomPlay = Math.floor(Math.random() * playOptions.length)
  // console.log(computerRandomPlay)
  let item = playOptions[computerRandomPlay]
  return item
}

// Player vs Computer via Rounds

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
    computerScore++
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Computer wins!`
  } else if (
    playerSelection.toLowerCase() == 'rock' &&
    computerSelection == 'scissors'
  ) {
    playerScore++
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Player wins!`
  } else if (
    playerSelection.toLowerCase() == 'paper' &&
    computerSelection == 'scissors'
  ) {
    computerScore++
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Computer wins!`
  } else if (
    computerSelection.toLowerCase() == 'rock' &&
    playerSelection == 'paper'
  ) {
    playerScore++
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Player wins!`
  } else if (
    computerSelection.toLowerCase() == 'rock' &&
    playerSelection == 'scissors'
  ) {
    computerScore++
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Computer wins!`
  } else if (
    computerSelection.toLowerCase() == 'paper' &&
    playerSelection == 'scissors'
  ) {
    playerScore++
    return `Player selects: ${playerSelection}. Computer selects ${computerSelection}. Player wins!`
  } else {
    return 'Hey something is wrong!'
  }
}

// Game Plays for 5 Rounds

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound())
  }
}

game()

// Score is Counted

function countScore() {
  console.log(`The Player's score is: ${playerScore}`)
  console.log(`The Computer's score is ${computerScore}`)
}

countScore()

function compareScore() {
  if (playerScore > computerScore) {
    console.log('Player wins the whole game!')
  } else if (computerScore > playerScore) {
    console.log('Computer wins the whole game!')
  } else if (playerScore == computerScore) {
    console.log('The game is a tie, there is no winner!')
  } else {
    console.log('Something is wrong with the counter.')
  }
}

compareScore()
