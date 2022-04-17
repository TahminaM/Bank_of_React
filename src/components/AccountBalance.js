// src/components/AccountBalance.js

import React, { Component } from 'react';

class AccountBalance extends Component {
    render() {
        return (
            <div>               {/*Rounds the current account balance to 2 decimal places*/}
                <h3>Current Balance: ${Math.round(this.props.accountBalance * 100) / 100}</h3>
            </div>
        );
    }
}

export default AccountBalance;