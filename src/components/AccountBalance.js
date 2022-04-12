// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {

    constructor(props) {
        super(props);
        this.state = { accountBalance: 0 };
    }

    componentDidMount() {
        const [balance, getBalance] = useLocalStorage('bal', [
            { accountBalance: this.state.accountBalance }
        ]);

        console.log(this);
    }

    componentWillUnmount() {
        this.setState({
            accountBalance: 0
        });
    }

  render() {
    return (
      <div>
        <h2>Balance: {this.state.accountBalance}</h2>
      </div>
    );
  }
}

export default AccountBalance;