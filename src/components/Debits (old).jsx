// src/components/Debits.jsx

import React, { useState, useEffect } from 'react';
import Card from './Card';

const url = 'https://moj-api.herokuapp.com/debits';

const Debits = () => {

    const [debits, setDebits] = useState([]);

    const getDebits = async () => {
        const response = await fetch(url);
        const debits = await response.json();
        setDebits(debits);
        //console.log(debits);
    }

    useEffect(() => {
        getDebits();
    }, []);

    return (
        <div className='container'>
            <h1>Debits</h1>
            <br />
            <div className='container'>
                <div className='row justify-content-center'>
                    {debits.map((debit) => {
                        const {id, description, amount, date} = debit;
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

export default Debits;