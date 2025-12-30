var board = [];
var rows = 8;
var cols = 8;

var mineCount = 5;
var minesLocations = [];

var tilesClicked = 0;
var flagEnabled = false;

var gameOver = false;
window.onload = function() {
    startGame();
}

function startGame() {
    document.getElementById("mines-count").innerText = mineCount;
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < colums; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            document.getElementById("board").appendChild(tile);
            row.push(tile);
        }
        board.push(row);
    }
}