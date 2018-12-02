import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Colors from "./Colors";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Colors} />
        </div>
      </Router>
    );
  }
}

export default App;
