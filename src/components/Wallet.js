import React, { Component } from "react";
import { connect } from "react-redux";

import { deposit, withdraw } from "../actions/balance";

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: null,
    };
  }

  deposit = () => {
    this.props.deposit(this.state.balance);
  };

  withdraw = () => {
    this.props.withdraw(this.state.balance);
  };

  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <br />
        <input
          type="number"
          value={this.state.balance}
          className="input-wallet"
          onChange={(e) => {
            this.setState({ balance: parseInt(e.target.value) });
          }}
        />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

export default connect(
  ({ balance }) => {
    return { balance };
  },
  { deposit, withdraw }
)(Wallet);
