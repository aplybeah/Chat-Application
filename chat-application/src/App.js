import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>What Is Your Name?</h2>
          <form className="nameCreate">
            <input type="text" />
          </form>
        </header>
      </div>
    );
    // <Route path="/main" component={MainScreen} />;
  }
}

export default App;
