import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Colors from "./Colors";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/?color=red">Red</Link>
              </li>
              <li>
                <Link to="/?color=blue">Blue</Link>
              </li>
              <li>
                <Link to="/?color=green">Green</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" component={Colors} />
        </div>
      </Router>
    );
  }
}

export default App;
