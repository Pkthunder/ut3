export const DEFAULT_BOARD = [
  [{value: ''}, {value: ''}, {value: ''}],
  [{value: ''}, {value: ''}, {value: ''}],
  [{value: ''}, {value: ''}, {value: ''}]
];

export const checkBoardForWinner = (board, field = 'value') => {
  board = board.map(r => r.map(c => c[field]));

  // check horizontals
  for (let i=0; i<3; i++) {
    const row = board[i];
    if (row[0] === row[1] && row[1] === row[2] && !!row[0]) {
      return row[0];
    }
  }

  // check verticals
  for (let col=0; col<3; col++) {
    if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && !!board[0][col]) {
      return board[0][col];
    }
  }

  // check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && !!board[0][0]) {
    return board[0][0];
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && !!board[0][2]) {
    return board[0][2];
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
  else if (player === '') {
    return '';
  }

  throw new Error(`Unknown player '${player}'`);
};