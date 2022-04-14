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

    // On-click function to add new credits
    addCredit = (e) => {
        e.preventDefault();     // Prevents the page from refreshing when the button is pressed

        let newEntry = { };         // Create new object to store the new Credit entry
        let today = new Date();     // Create temporary object to store the current Date

        newEntry.id = String((Math.round(Math.random() * 10000000) * 10) / 10); // Generates a random string of numbers
        newEntry.description = e.target.description.value;
        newEntry.amount = Number(e.target.amount.value);

        // If/else statement to change the date formatting if the current month is before October (January is 0)
        if (today.getMonth() < 9) {
            newEntry.date =
                Date().slice(11, 15) + '-' + '0' + (today.getMonth() + 1) + '-' + Date().slice(8, 10);
        } else {
            newEntry.date =
                Date().slice(11, 15) + '-' + (today.getMonth() + 1) + '-' + Date().slice(8, 10);
        }

        let newArray = this.state.credits;      // Create new array to update the state with
        newArray.push(newEntry);        // Push the new entry to the new array

        this.setState({ credits: newArray, accountBalance: this.state.accountBalance + newEntry.amount }); // Set state

        e.target.description.value = '';
        e.target.amount.value = '';         // Clear form entry fields

    }

    // On-click function to add new debits
    addDebit = (e) => {
        e.preventDefault();     // Prevents the page from refreshing when the button is pressed

        let newEntry = { };         // Create new object to store the new Credit entry
        let today = new Date();     // Create temporary object to store the current Date

        newEntry.id = String((Math.round(Math.random() * 10000000) * 10) / 10); // Generates a random string of numbers
        newEntry.description = e.target.description.value;
        newEntry.amount = Number(e.target.amount.value);

        // If/else statement to change the date formatting if the current month is before October (January is 0)
        if (today.getMonth() < 9) {
            newEntry.date =
                Date().slice(11, 15) + '-' + '0' + (today.getMonth() + 1) + '-' + Date().slice(8, 10);
        } else {
            newEntry.date =
                Date().slice(11, 15) + '-' + (today.getMonth() + 1) + '-' + Date().slice(8, 10);
        }

        let newArray = this.state.debits;      // Create new array to update the state with
        newArray.push(newEntry);        // Push the new entry to the new array

        this.setState({ debits: newArray, accountBalance: this.state.accountBalance - newEntry.amount });

        e.target.description.value = '';
        e.target.amount.value = '';         // Clear form entry fields

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

        // Pass in the current account balance, the functions to add credits and debits, and the credits and debits themselves as props
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

    // Function will be called as soon as the app properly loads
    componentDidMount() {

        // Make API call to acquire array of credits
        const getCredits = async () => {
            const response = await fetch("https://moj-api.herokuapp.com/credits");
            const credits = await response.json();
            this.setState({ credits: credits });    // Set current state

            // Map function to get the sum of all credits in the array
            let addBalance = credits.map((credit) => {
                return this.setState({ accountBalance: this.state.accountBalance + credit.amount });
            });

            return addBalance;

        }

        // Make API call to acquire array of credits
        const getDebits = async () => {
            const response = await fetch("https://moj-api.herokuapp.com/debits");
            const debits = await response.json();
            this.setState({ debits: debits });    // Set current state

            // Map function to get the sum of all credits in the array
            let subBalance = debits.map((debit) => {
                return this.setState({ accountBalance: this.state.accountBalance - debit.amount });
            });

            return subBalance;

        }

        getCredits();
        getDebits();        // Call the functions in order to populate the credits and debits arrays

    }

}

export default App;
