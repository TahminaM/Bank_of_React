// src/components/Credits.js

import { Link } from 'react-router-dom';
import Card from './Card';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0, 10);
            return (
                <div className='row justify-content-center'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <Card
                            key={credit.id}
                            description={credit.description}
                            amount={credit.amount}
                            date={date}
                        />
                    </div>
                </div>
            )
        });
    }
    
    return (
        <div>
            <h1>Credits</h1>
            <h2>Account Balance: ${Math.round(props.accountBalance * 100) / 100}</h2>{/*Rounds to 2 decimal places*/}
            {creditsView()}
            <br/>
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