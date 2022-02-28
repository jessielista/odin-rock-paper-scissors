// console.log('Hello to me, Jessica.')

// first step is create list of random items, 3

let playOptions = ['rock', 'paper', 'scissors']

function computerPlay() {
  computerRandomPlay = Math.floor(Math.random() * playOptions.length)
  // console.log(computerRandomPlay)
  let item = playOptions[computerRandomPlay]
  return item
}

console.log(computerPlay())
