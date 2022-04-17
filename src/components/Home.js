// src/components/Home.js
// The Home component is used to demonstrate the use of Link.

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import Greeting from './Greeting';

class Home extends Component {
  render() {
    return (
      <div>        
        <h1>Bank of React</h1>
        <img src="https://picsum.photos/200/200" alt="bank"/>
        <Greeting />
        <Clock />
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <Link to="/userProfile">User Profile</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/credits">Credits</Link>
        <br/>
        <Link to="/debits">Debits</Link>
        
      </div>
    );
  }
}

export default Home;