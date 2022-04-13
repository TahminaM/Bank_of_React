// src/App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
    constructor() {  // Create and initialize state
        super();
        this.state = {
            accountBalance: 0,
            currentUser: {
                userName: 'Joe Smith',
                memberSince: '07/23/96',
            },
            credits: [],
            debits: []
        }
    }

    addCredit = (e) => {
        e.preventDefault();

        let newEntry = { };
        let today = new Date();

        newEntry.id = String((Math.round(Math.random() * 10000000) * 10) / 10);
        newEntry.description = e.target.description.value;
        newEntry.amount = Number(e.target.amount.value);

        if (today.getMonth() < 9) {
            newEntry.date =
                Date().slice(11, 15) + '-' + '0' + (today.getMonth() + 1) + '-' + Date().slice(8, 10);
        } else {
            newEntry.date =
                Date().slice(11, 15) + '-' + (today.getMonth() + 1) + '-' + Date().slice(8, 10);
        }

        let newArray = this.state.credits;
        newArray.push(newEntry);

        this.setState({ credits: newArray, accountBalance: this.state.accountBalance + newEntry.amount });

        e.target.description.value = '';
        e.target.amount.value = '';

    }

    addDebit = (e) => {
        e.preventDefault();

        let newEntry = { };
        let today = new Date();

        newEntry.id = String((Math.round(Math.random() * 10000000) * 10) / 10);
        newEntry.description = e.target.description.value;
        newEntry.amount = Number(e.target.amount.value);

        if (today.getMonth() < 9) {
            newEntry.date =
                Date().slice(11, 15) + '-' + '0' + (today.getMonth() + 1) + '-' + Date().slice(8, 10);
        } else {
            newEntry.date =
                Date().slice(11, 15) + '-' + (today.getMonth() + 1) + '-' + Date().slice(8, 10);
        }

        let newArray = this.state.debits;
        newArray.push(newEntry);

        this.setState({ debits: newArray, accountBalance: this.state.accountBalance - newEntry.amount });

        e.target.description.value = '';
        e.target.amount.value = '';

    }

    // Update state's currentUser (userName) after "Log In" button is clicked
    mockLogIn = (logInInfo) => {
        const newUser = { ...this.state.currentUser }
        newUser.userName = logInInfo.userName
        this.setState({ currentUser: newUser })
    }

    // Create Routes and React elements to be rendered using React components
    render() {
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
        );
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);  // Pass props to "LogIn" component
        const CreditsComponent = () => (<Credits accountBalance={this.state.accountBalance} addCredit={this.addCredit} credits={this.state.credits} />);
        const DebitsComponent = () => (<Debits accountBalance={this.state.accountBalance} addDebit={this.addDebit} debits={this.state.debits} />);

        return (
            <Router>
                <div>
                    <Route exact path="/" render={HomeComponent} />
                    <Route exact path="/userProfile" render={UserProfileComponent} />
                    <Route exact path="/login" render={LogInComponent} />
                    <Route exact path="/credits" render={CreditsComponent} />
                    <Route exact path="/debits" render={DebitsComponent} />
                </div>
            </Router>
        );
    }

    componentDidMount() {

        const getCredits = async () => {
            const response = await fetch("https://moj-api.herokuapp.com/credits");
            const credits = await response.json();
            this.setState({ credits: credits });

            let addBalance = credits.map((credit) => {
                return this.setState({ accountBalance: this.state.accountBalance + credit.amount });
            });

            return addBalance;

        }

        const getDebits = async () => {
            const response = await fetch("https://moj-api.herokuapp.com/debits");
            const debits = await response.json();
            this.setState({ debits: debits });

            let subBalance = debits.map((debit) => {
                return this.setState({ accountBalance: this.state.accountBalance - debit.amount });
            });

            return subBalance;

        }

        getCredits();
        getDebits();

    }

}

export default App;
