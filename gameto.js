let currMoleTile;
let GameOver = false;
let score = 0;

let tile;
window.onload = function () {
    setGame();
};

function setGame() {
    // Create grid tiles
    for (let i = 1; i <= 9; i++) {
        let div = document.createElement("div");
        div.id = i.toString();
        div.addEventListener("click", selectedTile);
        document.getElementById("pipe").appendChild(div);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 1000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9) + 1; // Ensure IDs are 1-9
    return num.toString();
}

function setMole() {
    if (GameOver) {
        return currMoleTile.innerHTML="";
    }

    // Clear previous mole
    if (currMoleTile) currMoleTile.innerHTML = "";

    // Place new mole
    let mole = document.createElement("img");
    mole.src = "./image/monty-mole.png";

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);

    // If the current tile has a plant, remove it
    const plant = currMoleTile.querySelector(".plant");
    if (plant) {
        currMoleTile.removeChild(plant);
    }

    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (GameOver) return;

    for (let i = 1; i <= 9; i++) {
        let tile = document.getElementById(i.toString());

        // Add a plant if the tile is empty
        if (!tile.hasChildNodes()) {
            let plant = document.createElement("img");
            plant.src = "./image/piranha-plant.png";
            plant.className = "plant"; // Add a class to identify plants
            tile.appendChild(plant);
        }
    }
}

function selectedTile() {
    if (GameOver) return;

    // Check if clicked tile has a mole
    if (this === currMoleTile) {
        score += 10;
        document.getElementById("score").innerHTML = score.toString();
        currMoleTile.innerHTML = ""; // Clear mole after clicking
       if(score==100){
      console.log("you Win!")
      GameOver=true;
      let youwin=document.getElementById("YouWin");
      youwin.style.display="block";
      const restartButton = document.getElementById("Restart");
        restartButton.style.display = "block";
        restartButton.addEventListener("click", setRestart);
       }
    } 
    // Check if clicked tile has a plant
    else if (this.querySelector(".plant")) {
        document.getElementById("score").innerHTML = `GAME OVER: ${score}`;
        GameOver = true;

        // Show the Restart button and add event listener
        const restartButton = document.getElementById("Restart");
        restartButton.style.display = "block";
        restartButton.addEventListener("click", setRestart);
    }
}

function setRestart() {
    // Reset game state
    GameOver = false;
    score = 0;
    currMoleTile.innerHTML="";

    // Hide restart button and reset score
    const restartButton = document.getElementById("Restart");
    restartButton.style.display = "none";
      let youwin=document.getElementById("YouWin");
      youwin.style.display="none";
    document.getElementById("score").innerHTML = "0";

    // Clear the grid and reinitialize the game
    
    window.onload=function(){
       setGame();
   }
}


