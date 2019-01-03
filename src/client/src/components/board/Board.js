import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { Tile } from '../tile';

import './Board.css';

class Board extends Component {

  renderRow (row, idx) {
    const handleTileClick = (row, cell) => {
      return this.props.onTileClick(this.props.row, this.props.cell, row, cell);
    };

    return (
      <Grid.Row columns={row.length} key={`row-${idx}`}>
        { row.map((tile, cell) => (
          <Grid.Column key={`tile-${cell}`} onClick={handleTileClick(idx, cell)}>
            <Tile tile={tile} row={idx} cell={cell} />
          </Grid.Column>
        )) }
      </Grid.Row>
    );
  }

  render () {
    const { game } = this.props;

    return (
      <div className="board-container">
        <Grid celled>
          { game.board.map((row, idx) => this.renderRow(row, idx)) }
        </Grid>
      </div>
    );
  }
}

export default Board;
