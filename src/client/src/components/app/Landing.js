import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './Landing.css';

const anchorAttrs = {
  className: 'landing-link',
  target: '_blank',
  rel: 'noopener noreferrer'
};

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <header className="landing-header">
          <img src={logo} className="landing-logo" alt="logo" />
          <p>
            This game is built with <code>React</code>!
          </p>
          <div>
            <a {...anchorAttrs} href="https://reactjs.org">Learn React</a>
            <Link className="landing-link" to="/play">Play Game</Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Landing;
