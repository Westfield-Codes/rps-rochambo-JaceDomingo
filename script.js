/*main*/
function main(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice){
            alert("We both chose "+cChoice);
        }
    }
    findWinner(uChoice, cChoice);
}
/*userTurn
* @param: none
* @return: string (r, p, or s)
*/
function userTurn(){
    let moves = ["r","p","s"];
    let userTurn = prompt("r, p or s");
    if (moves.includes(userTurn)) {
	    return userTurn;
    }
    else userTurn();
}
/*cpuTurn
* @param: none
* @return: string (r, p or s)
*/
function cpuTurn(){
    let moves = ["r","p","s"];
    let cpuTurn = Math.floor(Math.random()*2)
    return moves[cpuTurn];
}
/*findWinner
* @param: u (sting), c (string)
* @return: none
*/
function findWinner(u,c){
    
    let winArray=[["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
    for (let i = 0; i < winArray.length; i++){
          if (winArray[i][0] == u && winArray[i][1] == c){ 
            winner = winArray[i][2];
         }
    }
        alert("I chose "+c+", and you chose "+u+". "+winner+" win!");
}