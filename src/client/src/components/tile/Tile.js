import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import './Tile.css';

class Tile extends Component {
  renderTileValue () {
    const { tile } = this.props;

    let icon = null;

    switch (tile.value) {
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

    return icon ? (<Icon {...icon} size='big' />) : '';
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
