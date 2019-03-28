import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import MainScreen from "./components/MainScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }
  handleSubmit(event) {
    alert("Nice to meet you " + this.state.name);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>What Is Your Name?</h2>
          <form className="nameCreate" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name={this.state.name}
              onChange={this.handleName}
            />
          </form>
        </header>
      </div>
    );
    // <Route path="/main" component={MainScreen} />;
  }
}

export default App;
