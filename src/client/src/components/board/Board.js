import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';

import { Tile } from '../tile';

import * as utils from '../utils';


import './Board.css';

class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      board: _.cloneDeep(utils.DEFAULT_BOARD)
    }
  }

  handleTileClick (row, column) {
    return () => {
      const board = _.cloneDeep(this.state.board);
      const tile = board[row][column];
      const turn = this.props.turn.slice();
      Object.assign(tile, {value: turn});

      this.setState({board: [...board]}, this.props.onTileClick);
    }
  }

  renderRow (row, idx) {
    return (
      <Grid.Row columns={row.length} key={`row-${idx}`}>
        { row.map((tile, column) => (
          <Grid.Column key={`tile-${column}`} onClick={this.handleTileClick(idx, column)}>
            <Tile tile={tile} row={idx} column={column} />
          </Grid.Column>
        )) }
      </Grid.Row>
    );
  }

  render () {
    const { board } = this.state;

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
