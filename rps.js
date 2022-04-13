//STEP 1: GET USERINPUT

const getUserChoice = userInput => {
    const promptAnswer = prompt('Choose your weapon!')
    userInput = promptAnswer.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
    {
        return userInput
    } else  {
        return 'an invalid weapon'
    }
}
//console.log(getUserChoice())

//GET COMPUTER INPUT USING A RANDOM NUM FROM 0-2 AND ASSIGNING VALUE TO EACH RESULT

const getComputerChoice = botChoice => {
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return 'paper' } 
    if (computerChoice === 1) {
        return 'rock' 
    } else {
        return 'scissors'
    }
   } 


// DETERMINE WINNER USING TWO VARIABLES THAT WILL BE ASSINED TO CORRESPONDING FUNCTIONS
   const determineWinner = (userChoice, computerChoice) => {
       if (userChoice === computerChoice) {
           return 'ITS A TIE!';
       } 
        else if (userChoice === 'rock' && computerChoice === 'paper') {
           return 'Sorry, computer won!'
       }
       else if (userChoice === 'paper' && computerChoice === 'scissors') {
           return 'Sorry computer won!'
       }
       else if (userChoice === 'scissors' && computerChoice === 'rock') {
           return 'Sorry, computer won!'
       } 
       else if (userChoice === 'rock' && computerChoice === 'scissors') {
           return 'You won!'
       }
       else if (userChoice === 'paper' && computerChoice === 'rock') {
           return 'You won!'
       }
       else if (userChoice === 'scissors' && computerChoice === 'paper') {
           return 'You won!'
       } else { 
           return 'Try following the rules next time!'

       }
       
   }
   //console.log(determineWinner('paper', 'rock'))

   function playGame() {
    const userChoice = getUserChoice()
    const computerChoice = getComputerChoice()
    console.log(`You threw ${userChoice} and the computer threw ${computerChoice}`)

    console.log(determineWinner(userChoice, computerChoice))

}

    //console.log(playGame())

    
    const fiveRoundGame = () => {
    for (let i = 0; i < 5; i++) {
        playGame()
     }

    }
    console.log(fiveRoundGame())