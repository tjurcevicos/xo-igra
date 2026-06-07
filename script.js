const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const human = "X";
const ai = "O";

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWinner(player) {
    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === player);
    });
}

function checkDraw() {
    return !board.includes("");
}

function handleClick(e) {
    const index = e.target.dataset.index;

    if (board[index] !== "" || !gameActive) return;

    makeMove(index, human);

    if (!gameActive) return;

    setTimeout(aiMove, 400);
}

function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;

    if (checkWinner(player)) {
        statusText.textContent =
            player === human
                ? "Pobijedio si!"
                : "Računalo je pobijedilo";

        gameActive = false;
        return;
    }

    if (checkDraw()) {
        statusText.textContent = "Neriješeno!";
        gameActive = false;
        return;
    }

    statusText.textContent =
        player === human
            ? "Računalo razmišlja..."
            : "Tvoj potez";
}

function aiMove() {
    if (!gameActive) return;

    let available = [];

    board.forEach((cell, index) => {
        if (cell === "") {
            available.push(index);
        }
    });

    const randomIndex =
        available[Math.floor(Math.random() * available.length)];

    makeMove(randomIndex, ai);
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;

    statusText.textContent = "Tvoj potez";

    cells.forEach(cell => {
        cell.textContent = "";
    });
}

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

restartBtn.addEventListener("click", restartGame);