import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Landing } from './app';
import { Game } from './game';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/play" component={Game} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
