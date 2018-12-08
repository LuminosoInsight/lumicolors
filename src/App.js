import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "redux-zero/react";

import store from "./store";
import Colors from "./Colors";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" component={Colors} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
