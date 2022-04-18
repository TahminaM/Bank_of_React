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
      <div class="content">
          <div class="navbar">
            <Link to="/">Home</Link>
            <Link to="/userProfile">User Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="credits">Credits</Link>
            <Link to="debits">Debits</Link>
          </div>
          <div>
            <br/>
            <br/>
            <img src={Logo} width="490px" height="280px" alt="Bank Logo" className='logo' />
            <Greeting userName={this.props.userName}/>
            <Clock />
            <AccountBalance accountBalance={this.props.accountBalance}/>        
          </div>
    </div>  
    );
  }
}

export default Home;
