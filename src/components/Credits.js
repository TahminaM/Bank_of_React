// src/components/Credits.js

import { Link } from 'react-router-dom';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0, 10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        })
    }
    
    return (
        <div>
            <h1>Credits</h1>
            <h2>Account Balance: ${Math.round(props.accountBalance * 100) / 100}</h2>{/*Rounds to 2 decimal places*/}
            {creditsView()}
            <form onSubmit={props.addCredit}>
                <input type="text" name="description" placeholder="Enter Description" />
                <input type="float" name="amount" placeholder="Enter Credit Amount" />
                <button type="submit">Add Credit</button>
            </form>
            <Link to='/'>Back to Home Page</Link>
        </div>
    )
}

export default Credits;