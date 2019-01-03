import React, { PureComponent } from 'react';
import { Grid } from 'semantic-ui-react';

import { Board } from '../board';

import './Game.css';

const DEFAULT_BOARD = {
  board: [
    [{value: ''}, {value: ''}, {value: ''}],
    [{value: ''}, {value: ''}, {value: ''}],
    [{value: ''}, {value: ''}, {value: ''}]
  ]
};

const generateNewBoard = () => (
  (new Array(3)).fill(
    (new Array(3).fill(
      Object.assign({}, DEFAULT_BOARD)
    ))
  )
);

class Game extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      board: generateNewBoard(),
      turn: 'X'
    }
  }

  handleTileClick (gr, gc, br, bc) {
    // returns a function, which calls setState
    return () => {
      this.setState(prev => {

        console.log(prev);
        console.log(gr, gc, br, bc);

        prev.board[gr][gc].board[br][bc].value = this.state.turn.slice();

        console.log(prev.board);

        const nextTurn = prev.turn === 'X' ? 'O' : 'X';

        return Object.assign({}, {board: prev.board, turn: nextTurn});
      });

      this.forceUpdate();
    }
  }


  renderRow (row, idx) {
    return (
      <Grid.Row columns={row.length} key={`row-${idx}`}>
        { row.map((game, cell) => (
          <Grid.Column key={`tile-${cell}`}>
            <Board game={game} row={idx} cell={cell} onTileClick={this.handleTileClick.bind(this)} />
          </Grid.Column>
        )) }
      </Grid.Row>
    );
  }

  render () {
    const { board, turn } = this.state;

    return (
      <div className="game-container">
        <h1>Ultimate Tic-Tac-Toe</h1>
        <Grid celled>
          { board.map((row, idx) => this.renderRow(row, idx)) }
        </Grid>
        <p>Currently {turn}'s turn</p>
      </div>
    );
  }
}

export default Game;
