import React, { PureComponent } from 'react';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';

import { Board } from '../board';

import * as utils from '../utils';

import './Game.css';

class Game extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      game: _.cloneDeep(utils.DEFAULT_BOARD),
      turn: 'X'
    }
  }

  handleSubGameComplete (winner) {
    // TODO: implement this function
  }

  handleTileClick () {
    const nextTurn = this.state.turn === 'X' ? 'O' : 'X';

    this.setState({turn: nextTurn});
  }


  renderRow (row, idx) {
    const { turn } = this.state;

    return (
      <Grid.Row columns={row.length} key={`row-${idx}`}>
        { row.map((game, column) => (
          <Grid.Column key={`tile-${column}`}>
            <Board
              game={game}
              row={idx}
              column={column}
              turn={turn}
              onTileClick={this.handleTileClick.bind(this)}
              onSubGameComplete={this.handleSubGameComplete.bind(this)}
            />
          </Grid.Column>
        )) }
      </Grid.Row>
    );
  }

  render () {
    const { game, turn } = this.state;

    return (
      <div className="game-container">
        <h1>Ultimate Tic-Tac-Toe</h1>
        <Grid celled="internally">
          { game.map((row, idx) => this.renderRow(row, idx)) }
        </Grid>
        <p>Currently {turn}'s turn</p>
      </div>
    );
  }
}

export default Game;
