
let currMoleTile;


window.onload = function() {
    setGame();
};

function setGame() {
    // Set up the grid in the HTML
    for (let i = 1; i <= 9; i++) { // i goes from 1 to 9
        let tile = document.createElement("div");
        tile.id = i.toString(); // Set ID as 1 to 9
        tile.className = "tile"; // Optional: add a class for styling
        tile.addEventListener("click", selectTile); // Add click event
        document.getElementById("pipe").appendChild(tile); // Append to the parent element
    }

    setInterval(setMole, 1000); // Every 1 second, call setMole
    setInterval(setPlant, 2000); // Every 2 seconds, call setPlant
}
function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

// Dummy functions for setMole and setPlant
function setMole() {
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./image/monty-mole.png";
    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setPlant() {
    console.log("Plant is set!");
}

function selectTile(event) {
    console.log("Tile selected:", event.target.id);
}
