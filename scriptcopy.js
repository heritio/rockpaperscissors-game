

function computerPlay(){

    let value = "";
  
    let randNr = Math.floor((Math.random() * 3) + 1);
  
   
  
    if(randNr == 1){
  
      value = "Rock".toLowerCase();
  
    }else if(randNr == 2){
  
      value = "Paper".toLowerCase();
  
    }else{
  
      value = "Scissors".toLowerCase();
  
    }
  
   
  
    return value;
  
  }
  
   
  
  function playRound(playerSelection, computerSelection){
  
    let won = playerSelection + " beats " + computerSelection;
  
    let lost = computerSelection + " beats " + playerSelection;
  
     if(playerSelection === computerSelection){
  
       return "Its a draw";
  
     }else if(playerSelection == "rock" && computerSelection == "scissors" ){
  
       return won;
  
     }else if(playerSelection == "rock" && computerSelection == "paper"){
  
       return lost;
  
     }else if(playerSelection == "paper" && computerSelection == "rock"){
  
       return won;
  
     }else if(playerSelection == "paper" && computerSelection == "scissors"){
  
       return lost;
  
     }else if(playerSelection == "scissors" && computerSelection == "rock"){
  
       return lost;
  
     }else if(playerSelection == "scissors" && computerSelection == "paper"){
  
       return won;
  
     }
  
  }
  
   
  
  let playerSelection = "Rock".toLowerCase();
  
   
  
  let computerSelection = computerPlay();
  
   
  
  console.log(playRound(playerSelection,computerSelection));
  
   