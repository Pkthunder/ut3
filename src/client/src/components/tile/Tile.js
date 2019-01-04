import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import * as utils from '../utils';

import './Tile.css';

class Tile extends Component {
  renderTileValue () {
    const { tile } = this.props;

    let icon = null;

    switch (tile.value) {
      case 'X':
        icon = 'times';
        break;
      case 'O':
        icon = 'circle outline';
        break;
      default:
        icon = null;
        break;
    }

    return icon ? (
      <Icon
        name={icon}
        color={utils.getColorFromPlayer(tile.value)}
        size='big'
      />) : '';
  }

  render () {
    const { row, column } = this.props;

    return (
      <div className="tile">
        <span className="tile-label">{row},{column}</span>
        <p>{this.renderTileValue()}</p>
      </div>
    );
  }
}

export default Tile;
