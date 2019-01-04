export const DEFAULT_BOARD = [
  [{value: ''}, {value: ''}, {value: ''}],
  [{value: ''}, {value: ''}, {value: ''}],
  [{value: ''}, {value: ''}, {value: ''}]
];

export const checkBoardForWinner = (board) => {
  // check horizontals
  for (let row=0; row<3; row++) {
    if (board[row][0].value === board[row][1].value && board[row][1].value === board[row][2].value) {
      return board[row][0].value;
    }
  }

  // check verticals
  for (let col=0; col<3; col++) {
    if (board[0][col].value === board[1][col].value && board[1][col].value === board[2][col].value) {
      return board[0][col].value;
    }
  }

  // check diagonals
  if (board[0][0].value === board[1][1].value && board[1][1].value === board[2][2].value) {
    return board[0][0].value;
  }

  if (board[0][2].value === board[1][1].value && board[1][1].value === board[2][0].value) {
    return board[0][2].value;
  }

  return null;
};

export const getColorFromPlayer = (player) => {
  if (player === 'X') {
    return 'red';
  }
  else if (player === 'O') {
    return 'green';
  }

  // TODO: throw error or return empty string???
  throw new Error(`Unknown player '${player}'`);
};