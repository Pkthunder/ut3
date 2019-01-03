import React, { PureComponent } from 'react';
import { Icon } from 'semantic-ui-react';

import './Tile.css';

class Tile extends PureComponent {
  componentDidUpdate (prevProps) {
    console.log('updated!');
  }

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
    const { row, cell } = this.props;

    console.log('tile.render', this.props.tile);

    return (
      <div>
        <span className="tile-label">{row},{cell}</span>
        <p>{this.renderTileValue()}</p>
      </div>
    );
  }
}

export default Tile;
