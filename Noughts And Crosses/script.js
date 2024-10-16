let currentPlayer = "O";
let secondPlayer = "X";
let won = false;
let draw = false;
let counter = 0;

function place(box) {
    if (box.innerText != "" || won) return;
    if (box.innerText != "" || draw) return;
    box.innerText = currentPlayer;
    checkGameBoard();
    counter++;
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
}

function checkGameBoard() {

    for(let i = 0; i <= 2; i++) {
        checkWinner(
             document.getElementById(i + "_0").innerText,
             document.getElementById(i + "_1").innerText,
             document.getElementById(i + "_2").innerText
    );

        checkWinner(
             document.getElementById("0_" + i).innerText,
             document.getElementById("1_" + i).innerText,
             document.getElementById("2_" + i).innerText
    );
    }

    checkWinner(
         document.getElementById("0_0").innerText,
         document.getElementById("1_1").innerText,
         document.getElementById("2_2").innerText
);

    checkWinner(
         document.getElementById("0_2").innerText,
         document.getElementById("1_1").innerText,
         document.getElementById("2_0").innerText
);
}

function checkWinner(first, second, third) {
    if (counter === 8) {
        draw = true;
        document.getElementById("announcer").innerHTML = "Game Over! Draw!";
    } else if (first === currentPlayer && first === second && second === third) {
        won = true;
        document.getElementById("announcer").innerHTML = `Game Over! ${currentPlayer} Wins!`;
    } 
}

function restart() {
   location.reload();
}