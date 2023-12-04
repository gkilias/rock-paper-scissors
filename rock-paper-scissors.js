function getComputerChoice(){
    const possibleOutcomes = ["rock", "paper", "scissors"]

    const randomIndex = Math.floor(Math.random() * possibleOutcomes.length)

    return possibleOutcomes[randomIndex]
}

function getPlayerChoice(){
    const playerChoice = prompt("Choose eiter Rock, Paper or Scissors!")
    
    return playerChoice
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors."
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock."
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock."
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beats Paper."
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats Paper."
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors."
    } else if(playerSelection === computerSelection){
        return "Tie round will be replayed."
    }
}

function game(){
    let gameScore = 0
    let playerScore = 0
    let computerScore = 0
    while(gameScore < 3){

        let playerSelection = getPlayerChoice().toLowerCase()
        let computerSelection = getComputerChoice().toLowerCase()

        let result = playRound(playerSelection, computerSelection)

        if(result === "Tie round will be replayed."){
            gameScore += 0
        }else{
            gameScore += 1
        }

        if(result.includes("Win")){
            playerScore += 1
        }else if(result.includes("Lose")){
            computerScore += 1 
        }

        console.log(result)
        console.log(`The gamescore is ${playerScore} - ${computerScore}`)
    }
}