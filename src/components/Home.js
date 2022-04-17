// src/components/Home.js
// The Home component is used to demonstrate the use of Link.

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import Greeting from './Greeting';
import Logo from '../logo.png';

class Home extends Component {
  render() {
    return (
      <div>
        <br/>
        <img src={Logo} width="400px" height="200px" alt="Bank Logo" className='logo' />
        <Greeting userName={this.props.userName}/>
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