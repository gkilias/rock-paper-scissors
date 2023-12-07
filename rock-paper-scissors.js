function getComputerChoice(){
    const possibleOutcomes = ["rock", "paper", "scissors"]

    const randomIndex = Math.floor(Math.random() * possibleOutcomes.length)

    return possibleOutcomes[randomIndex]
}

function getPlayerChoice(){
    const playerChoice = prompt("Choose eiter Rock, Paper or Scissors!")
    
    return playerChoice
}

const container = document.querySelector(".container")

const roundWin = document.querySelector(".roundWin")

const winner = document.querySelector(".winner")

let playerChoice = ""

let gameScore = 0
let playerScore = 0
let computerScore = 0


container.addEventListener("click", function(e){
    
    if(!(e.target.nodeName === "BUTTON")){ //event handler in case of clicking on padding
        return
    }

    playerChoice = e.target.id

    matchScore.textContent = `The gamescore is ${playerScore} - ${computerScore}.`

    roundWin.textContent = playRound(playerChoice, getComputerChoice())

    if (playerScore === 5){
        winner.textContent = `Congratulation you won with a score of ${playerScore} - ${computerScore}.`
        }else if(computerScore === 5){
            winner.textContent = `You lost with a score of ${playerScore} - ${computerScore}.`
        }
})

const matchScore = document.querySelector(".score")
matchScore.textContent = `The gamescore is ${playerScore} - ${computerScore}.`



function playRound(playerSelection, computerSelection){

    gameScore++
    if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")){
            playerScore++
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if(
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")){
            computerScore++
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    } else if(playerSelection === computerSelection){
        return "Tie round will be replayed."
    }
}

function game(){
    let gameScore = 0
    let playerScore = 0
    let computerScore = 0
    while(gameScore < 3){

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