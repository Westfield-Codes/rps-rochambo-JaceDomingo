var score = [0,0]

function main(){
    let winner = 3;
    let rounds = setRounds;
    while (rounds <= rounds){
        winner = rpsRound;
        score[winner]++;
    }
    alert("You have "+score[0]+", and I have "+score[1]);
    if (score[0]>score[1]) alert("You win!");
        else alert("I win!");
}

function setRounds(){
    rounds = prompt("How many rounds do you want to play? (Must be odd)")
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
    winner = findwinner(uChoice,cChoice);
    players = ["You","I"];
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