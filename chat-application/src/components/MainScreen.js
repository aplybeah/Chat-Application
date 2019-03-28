import React, { Component } from "react";
import NewMessage from "./NewMessage";
import MessageWindow from "./MessageWindow";

class MainScreen extends Component {
  render() {
    return (
      <div>
        <MessageWindow />
        <NewMessage />
      </div>
    );
  }
}

export default MainScreen;
