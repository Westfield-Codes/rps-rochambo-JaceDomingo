function main(){
    let pChoice = 0;
    let cChoice = 0;
    while (pChoice == cChoice){
        pChoice = userTurn();
        cChoice = cpuTurn();
        if (pChoice == cChoice) alert("Tie")
    }
    findWinner(pChoice,cChoice);
}
function userTurn(){
    let pChoice = prompt("Choose between r, p, or s");
    if (pChoice == "r" || pChoice == "p" || pChoice == "s" ) return pChoice;
    else {
        alert("Bad Input");
        userTurn();
    }
}
function cpuTurn(){
    let choice = Math.floor(Math.random()*3);
    alert(choice)
    if (choice == 0) return "r";
    else if (choice == 1) return "p";
    else return "s";
}
function findWinner(pChoice,cChoice){
    let winner = "Something went wrong";
    if (pChoice == "r") {
        if (cChoice == "s") winner = "Player ";
        else winner = "Computer ";
    }
    else if (pChoice == "s") {
        if (cChoice == "p") winner = "Player ";
        else winner = "Computer ";
    }
    else {
        if (cChoice == "r") winner = "Player ";
        else winner = "Computer ";
    }
    alert(winner+"Wins!");
}
