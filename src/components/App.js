import React, { Component } from "react";

import Wallet from "./Wallet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Loot Check</h2>
        <hr />
        <Wallet />
      </div>
    );
  }
}

export default App;
