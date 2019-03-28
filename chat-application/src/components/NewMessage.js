import React, { Component } from "react";

class NewMessage extends Component {
  render() {
    return (
      <div>
        <form className="NewMessage">
          <input type="text" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default NewMessage;
