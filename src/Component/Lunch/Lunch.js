import React from 'react';

const Lunch = (props) => {
    console.log(props);
    return (
        <div>
                <h1>{props.lunch.price}</h1>
        </div>
    );
};

export default Lunch;