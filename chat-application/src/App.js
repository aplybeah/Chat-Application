import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScreen from "./components/MainScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>This is the app</p>
        </header>
        <p>"What is your name?"</p>
        <MainScreen />
      </div>
    );
  }
}

export default App;
