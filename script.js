

// rounds and scores
let rounds = 5
let humanScore = 0
let computerScore = 0


let totalRoundsLeft = document.getElementById("rounds")
let result = document.getElementById("result")
let finalResult = document.getElementById("finalResult")
// for computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"]
    return choices[Math.floor((Math.random() * 3))]
}

//selecting the winner

function playRound(humanChoice, computerChoice) {

    console.log("humanchoice:", humanChoice, ", computerchoice:", computerChoice)

    totalRoundsLeft.textContent = rounds

    if (humanChoice === computerChoice) {

        result.textContent = ` This round is a tie`

    }
    else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "rock")) {
        ++computerScore
        result.textContent = `${computerChoice} defeat ${humanChoice}`

    }

    else {
        ++humanScore
        result.textContent = `${humanChoice} defeat ${computerChoice}`

    }
}

let btuttons = document.getElementById("buttons")


btuttons.addEventListener("click", (event) => {

    if (rounds > 0) {
        --rounds
        console.log(event.target);

        let humanSelection = event.target.alt;

        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        if (rounds === 0) {
            finalResult.textContent = ` Round ends, Your Score =${humanScore} , Machine Score=${computerScore}`
        }
        else {

            finalResult.textContent = `Your points : ${humanScore}  , Machine points : ${computerScore}`
        }
    }

})

function restart() {
    window.location.reload()
}




