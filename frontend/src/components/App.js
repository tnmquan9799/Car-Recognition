import React, { Component } from "react";
import { render } from "react-dom";
import '../../static/css/App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Home';

export default class App extends Component {
 

  render() {
    return (
      <Home />
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
