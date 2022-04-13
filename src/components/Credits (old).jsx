// src/components/Credits.jsx

import React, { useState, useEffect } from 'react';
import Card from './Card';
import AccountBalance from './AccountBalance';

const url = 'https://moj-api.herokuapp.com/credits';

const Credits = () => {

    const [credits, setCredits] = useState([]);

    const [balance, setBalance] = useState(<AccountBalance />);
    console.log(balance);

    const getCredits = async () => {
        const response = await fetch(url);
        const credits = await response.json();
        setCredits(credits);
    }

    useEffect(() => {
        getCredits();
    }, []);

    return (
        <div className='container'>
            <h1>Credits</h1>
            <br />
            <div className='container'>
                <div className='row justify-content-center'>
                    {credits.map((credit) => {
                        const { id, description, amount, date } = credit;
                        console.log(amount);
                        //this.setState({
                        //    accountBalance : this.state.accountBalance + amount
                        //});

                        return (
                            <div className='col-lg-3 col-md-6 col-sm-6'>
                                <Card
                                    key={id}
                                    description={description}
                                    amount={amount}
                                    date={date.slice(0, 10)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Credits;
