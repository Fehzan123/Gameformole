let currMoleTile;
let plantTail;

let GameOver=false;

let score=0;
window.onload=function(){
    setGame();
}


function setGame(){
    for(let i=1;i<=9;i++){
        let div=document.createElement("div");
       
        div.id=i.toString();
        div.addEventListener('click',selectedTile);
        document.getElementById("pipe").appendChild(div);
    }
    setInterval(setMole,2000);
    setplant();
}

function getRandomTile(){
    let num=Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if (GameOver) {
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML="";
    }
    let mole=document.createElement("img");
    mole.src="./image/monty-mole.png";
    let num=getRandomTile();
    if(plantTail && plantTail.id==num){
        return;
    }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setplant(){
    if (GameOver) {
        return;
    }
    for(let i=1;i<=9;i++){

    
    let plant=document.createElement("img");
    plant.src="./image/piranha-plant.png";

    if(currMoleTile && currMoleTile.id==num){
        return;
    }
    plantTail=document.getElementById(num);

    document.getElementById("pipe").appendChild(plant);
}
}



function selectedTile(){
    if (GameOver) {
        let buton=document.createElement("button");

        return;
    }
    if(this==currMoleTile){
        score+=10;
        document.getElementById("score").innerHTML=score.toString();
    } 
    else if(this==plantTail){
        score+=10;
        document.getElementById("score").innerHTML="GAME OVER "+score.toString();
        GameOver=true;
        const restartButton = document.getElementById("Restart");
        restartButton.addEventListener("click",setRestart)
        restartButton.style.display = "block";
      
    }
   
}


function setRestart() {
    // Reset game state
    GameOver = false;
    score = 0;
    currMoleTile = null;
    plantTail = null;
    const restartButton = document.getElementById("Restart");
 
 
    restartButton.style.display = "none";
    // Clear and restart the game
    document.getElementById("pipe").innerHTML = ""; // Clear all tiles
    document.getElementById("score").innerHTML = "0"; // Reset score display
    setGame(); // Reinitialize game logic
}

