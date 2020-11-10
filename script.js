let playerChoice = null;
let computerChoices = null;
let buttons = Array.from(document.querySelectorAll(".btn"));
let resultDisplay = document.getElementById("results");
let playerDisplay = document.getElementById("player");
let computerDisplay = document.getElementById("computer");

var result = playRound();
let ourScore = [0,0];

let resetScore = document.getElementById("reset");

buttons.forEach(btn => btn.addEventListener("click",function(e){
  playerChoice = e.target.id; 
  computerPlay();
  playRound();
  score();
  resultDisplay.textContent = result;
  playerDisplay.textContent = `Your score ${ourScore[1]}`;
  computerDisplay.textContent = `Computer score ${ourScore[0]}`;
  
}));

resetScore.addEventListener("click", () => {
  reset();
});

function reset() {
  ourScore[1] = 0;
  ourScore[0] = 0;
  playerDisplay.textContent = `Your score ${ourScore[1]}`;
  computerDisplay.textContent = `Computer score ${ourScore[0]}`;
}

function score(){

  if(result === "Its a draw!"){
    ourScore = ourScore;
  }else if(result === "You lost"){
    ourScore[0] += 1;
  }else if(result === "you won"){
     ourScore[1] += 1;
  }
  return ourScore;


}

function computerPlay(){
  let choices = ["rock", "paper", "scissors"];
   let randomNr = Math.floor(Math.random() * (3));
  return computerChoices = choices[randomNr];

}


function playRound(){

   if(playerChoice === computerChoices){
     return result = "Its a draw!";
   }else if(playerChoice === "rock" && computerChoices === "paper"){
     return result = "You lost"; 
   }else if(playerChoice === "rock" && computerChoices === "scissors"){
     return result = "you won";
   }else if(playerChoice  === "paper" && computerChoices === "rock"){
     return result = "you won";
   }else if(playerChoice === "paper" && computerChoices === "scissors"){
     return result = "You lost";
   }else if(playerChoice === "scissors" && computerChoices === "rock"){
     return result = "You lost";
   }else if(playerChoice === "scissors" && computerChoices === "paper"){
     return result = "you won";
   }
   
}






