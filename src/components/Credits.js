// src/components/Credits.js

import { Link } from 'react-router-dom';
import Card from './Card';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0, 10);
            return (
                <div className='col-lg-3 col-md-2 col-sm-1'>
                    <Card
                        key={credit.id}
                        description={credit.description}
                        amount={credit.amount}
                        date={date}
                    />
                </div>
            )
        });
    }
    
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
                <h1>Credits</h1>
                <h2>Current Account Balance: <b>${Math.round(props.accountBalance * 100) / 100}</b></h2>{/*Rounds to 2 decimal places*/}
                <div className='container'>
                    <div className='row justify-content-center'>
                        {creditsView()}
                    </div>
                </div>
                <br/>
                <form onSubmit={props.addCredit}>
                    <input type="text" name="description" placeholder="Enter Description" />
                    <input type="float" name="amount" placeholder="Enter Credit Amount" />
                    <button type="submit">Add Credit</button>
                </form>
            </div>
        </div>
    );
}

export default Credits;
