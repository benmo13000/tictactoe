const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
let currentPlayer = 'X';
let gameOver = false;

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
      message.textContent = `${currentPlayer} wins!`;
      gameOver = true;
      return;
    }
  }

  if ([...cells].every(cell => cell.textContent)) {
    message.textContent = "It's a draw!";
    gameOver = true;
  }
}

function makeMove(index) {
  if (!gameOver && !cells[index].textContent) {
    cells[index].textContent = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetBoard() {
  cells.forEach(cell => cell.textContent = '');
  message.textContent = '';
  currentPlayer = 'X';
  gameOver = false;
}

cells.forEach(cell => cell.addEventListener('click', () => makeMove([...cells].indexOf(cell))));
