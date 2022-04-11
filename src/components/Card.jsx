import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                {props.description}
            </div>
            <p>{props.date}</p>
            <p>${props.amount}</p>
        </div>
    );
}

export default Card;