import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                {props.description}
            </div>
            <p>${props.amount}</p>
            <p>{props.date}</p>
        </div>
    );
}

export default Card;