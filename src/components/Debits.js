// src/components/Debits.js

import { Link } from 'react-router-dom';

const Debits = (props) => {
    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0, 10);
            return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
        })
    }

    return (
        <div>
            <h1>Debits</h1>
            <h2>Account Balance: ${Math.round(props.accountBalance * 100) / 100}</h2>{/*Rounds to 2 decimal places*/}
            {debitsView()}
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