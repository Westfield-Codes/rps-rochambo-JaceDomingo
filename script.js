var score = [0,0];

function main(){
    let winner = 3;
    let rounds = setRounds();
    let round = 1;
    while (round <= rounds){
        winner = rpsRound();
        score[winner]++;
        round++;
    }
    alert("You have "+score[0]+", and I have "+score[1]);
    if (score[0]>score[1]) alert("You win!");
        else alert("I win!");
}

function setRounds(){
    let rounds = prompt("How many rounds do you want to play? (Must be odd)")
    if (rounds%2 == 0){
        alert("Must be odd");
        return setRounds();
    }
    return rounds;
}

function rpsRound(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice){
            alert("We both chose "+cChoice);
        }
    }
    winner = findWinner(uChoice,cChoice);
    players = ["you","I"];
    let win = players.indexOf(winner);
    return win;
}

function userTurn(){
    let moves = ["r","p","s"];
    let choice = prompt("r, p or s");
    if (moves.includes(choice)) {
	    return choice;
    }
    else userTurn();
}

function cpuTurn() {
    let moves = ["r","p","s"];
    let cpuTurn = Math.floor(Math.random()*2)
    return moves[cpuTurn];
}

function findWinner(u,c){    
    let winArray=[["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
    for (let i = 0; i < winArray.length; i++){
          if (winArray[i][0] == u && winArray[i][1] == c){ 
            winner = winArray[i][2];
         }
    }
    alert("I chose "+c+", and you chose "+u+". "+winner+" win!");
  return winner;
}