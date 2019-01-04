import React, { PureComponent } from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";
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
    };
  }

  handleSubGameComplete (winner, row, col) {
    console.log('WINNER! ', winner);

    const game = _.cloneDeep(this.state.game);
    const subGame = game[row][col];

    console.log('subGame: ', subGame);

    Object.assign(subGame, {winner: winner});

    this.setState({game: [...game]});
  }

  handleTileClick () {
    const nextTurn = this.state.turn === 'X' ? 'O' : 'X';

    this.setState({turn: nextTurn});
  }

  handleResetGame () {
    window.location.reload();
  }

  renderRow (row, idx) {
    const { turn } = this.state;

    return (
      <Grid.Row columns={row.length} key={`game-row-${idx}`}>
        { row.map((game, column) => (
          <Grid.Column
            key={`game-col-${column}`}
            textAlign="center"
            verticalAlign="middle"
            children={(
              <Board
                game={game}
                row={idx}
                column={column}
                turn={turn}
                onTileClick={this.handleTileClick.bind(this)}
                onSubGameComplete={this.handleSubGameComplete.bind(this)}
              />
            )}
          />
        )) }
      </Grid.Row>
    );
  }

  renderGameControls () {
    const { turn } = this.state;
    const color = utils.getColorFromPlayer(turn);

    return (
      <Card fluid color={color}>
        <Card.Content>
          <Card.Header>
            Currently <code>{turn}</code>'s turn
          </Card.Header>
          <Card.Description>
            <Button onClick={this.handleResetGame.bind(this)}>
              Reset Game
            </Button>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Advertisement!!!!!</p>
        </Card.Content>
      </Card>
    );
  }

  render () {
    const { game } = this.state;

    return (
      <div className="game-container">
        <h1>Ultimate Tic-Tac-Toe</h1>
        <Grid celled="internally">
          { game.map((row, idx) => this.renderRow(row, idx)) }
        </Grid>
        {this.renderGameControls()}
      </div>
    );
  }
}

export default withRouter(Game);
