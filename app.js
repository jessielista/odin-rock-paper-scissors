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
