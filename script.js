let score 

function getComputerChoice() {
    let rpsArray = ["Rock", "Paper", "Scissors"]
    const randomChoice = rpsArray[Math.floor(Math.random()*3)]
    return randomChoice
  
}  
  
function getResult(playerChoice, computerChoice) {

if(playerChoice === computerChoice){
  score = 0
  

}else if(playerChoice === 'Paper' && computerChoice == 'Rock'){
  score = 1
  
}else if(playerChoice === 'Scissors' && computerChoice == 'Paper'){
  score = 1

}else if(playerChoice === 'Paper' && computerChoice == 'Rock'){
  score = 1
}else{
  score = -1
}

return score 

}
const result = document.getElementById("result")
const hands = document.getElementById("hands")
const playerScore = document.getElementById("player-score")

function showResult(score, playerChoice, computerChoice) {
  if(score == -1){
      result.textContent = 'You Lose!'
  }else if(score == 1) {
      result.textContent = 'You Win!'
  }else{
      result
      .textContent = "It's a Draw!"
  }
  playerScore.textContent = `${Number(playerScore.textContent) + score}`
  hands.textContent = `👱${playerChoice} vs 🤖${computerChoice}`
  
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score, playerChoice.value, computerChoice)

}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton")

rpsButtons.forEach(rpsButton =>{
  rpsButton.onclick = () => onClickRPS(rpsButton)
})

let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()


}

function endGame() {
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}




playGame()

