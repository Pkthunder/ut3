import React, { Component } from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import _ from 'lodash';

import { Tile } from '../tile';

import * as utils from '../utils';

import './Board.css';

class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      board: _.cloneDeep(utils.DEFAULT_BOARD),
      turns: 0
    };
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.turns >= 3 && !this.props.game.winner) {
      const winner = utils.checkBoardForWinner(this.state.board);

      if (winner) {
        this.props.onSubGameComplete(winner, this.props.row, this.props.column);
      }
    }
  }

  handleTileClick (row, column) {
    return (evt) => {
      const board = _.cloneDeep(this.state.board);
      const tile = board[row][column];

      if (tile.value !== '') {
        evt.preventDefault();
        return false;
      }

      const turn = this.props.turn.slice();
      const { turns } = this.state;
      Object.assign(tile, {value: turn});

      this.setState({board: [...board], turns: turns + 1}, this.props.onTileClick);
    }
  }

  renderRow (row, idx) {
    return (
      <Grid.Row columns={row.length} key={`tile-row-${idx}`}>
        { row.map((tile, column) => (
          <Grid.Column
            key={`tile-col-${column}`}
            textAlign="center"
            verticalAlign="middle"
            children={(<Tile tile={tile} row={idx} column={column} />)}
            onClick={this.handleTileClick(idx, column)}
          />
        )) }
      </Grid.Row>
    );
  }

  render () {
    const { board } = this.state;
    const { winner } = this.props.game;

    // TODO: overlay this if sub game has been won, don't replace game board
    if (winner) {
      let icon = null;

      switch (winner) {
        case 'X':
          icon = {name: 'times', color: 'red'};
          break;
        case 'O':
          icon = {name: 'circle outline', color: 'green'};
          break;
        default:
          icon = null;
          break;
      }

      return icon ? (
        <div className="board-container">
          <p><Icon {...icon} size='huge' /></p>
        </div>
      ) : '';
    }

    return (
      <div className="board-container">
        <Grid celled="internally">
          { board.map((row, idx) => this.renderRow(row, idx)) }
        </Grid>
      </div>
    );
  }
}

export default Board;
