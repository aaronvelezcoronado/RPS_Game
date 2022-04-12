//function that will randomly return rock, paper or scissors/


function computerSelection() {
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {    
        return 'paper'
    } else {
        return 'scissors'
    }

}

//console.log(computerSelection()) returns number 0-2
// computerSelection function returns rock, paper or scissors depending on result of the randumNumber
//console.log(computerSelection())


/*function playerSelection() {
    let playerChoice = prompt("Choose your weapon!")

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        let playerAnswer = playerChoice.toLowerCase;
    } else {
        return 'not a weapon!'
    }
} */

//console.log(playerSelection())
//let computerAnswer = computerSelection()
//let playerWeapon = playerSelection()
//console.log(computerAnswer)
//console.log(playerWeapon)

function playGame(playerWeapon, computerAnswer) {
    if (computerAnswer === playerWeapon) {
        return 'ITS A TIE!'
    } else if (playerWeapon === 'rock' && computerAnswer === 'paper') {
        return `You chose ${playerWeapon} and computer chose ${computerAnswer}! You lose!`
    } else if (playerWeapon === 'scissors' && computerAnswer === 'rock') {
        return `You chose ${playerWeapon} and computer chose ${computerAnswer}! You lose!`
    } else if (playerWeapon === 'paper' && computerAnswer === 'scissors') {
        return `You chose ${playerWeapon} and computer chose ${computerAnswer}! You lose!`
    } else {
        return `You chose ${playerWeapon} and computer chose ${computerAnswer}. You Win!` }

}
const playerWeapon = 'ROCK';
const computerAnswer = computerSelection()
console.log(playGame(playerWeapon, computerAnswer))

