// src/components/Debits.js

import { Link } from 'react-router-dom';
import Card from './Card';


const Debits = (props) => {
    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0, 10);
            return (
                <div className='row justify-content-center'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <Card
                            key={debit.id}
                            description={debit.description}
                            amount={debit.amount}
                            date={date}
                        />
                    </div>
                </div>
            )
        });
    }

    return (
        <div>
            <h1>Debits</h1>
            <h2>Account Balance: ${Math.round(props.accountBalance * 100) / 100}</h2>{/*Rounds to 2 decimal places*/}
            {debitsView()}
            <br/>
            <form onSubmit={props.addDebit}>
                <input type="text" name="description" placeholder="Enter Description" />
                <input type="float" name="amount" placeholder="Enter Debit Amount" />
                <button type="submit">Add Debit</button>
            </form>
            <Link to='/'>Back to Home Page</Link>
        </div>
    )
}

export default Debits;