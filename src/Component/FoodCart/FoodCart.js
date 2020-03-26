import React from 'react';
import './FoodCart.css'
const FoodCart = (props) => {
    console.log(props);
    const {name, description, img, price} = props.food;
    return (
        // <div className="container">
                <div className="my-card">
                    <div className="row">
                        <div className="card-img-top">
                        <img  style={{ width: "80%",marginTop:"5px" }} src={img} alt="" />
                        </div>
                        <div className="card-body">
                        <h6>{name}</h6>
                        <p>{description}</p>
                        <p>${price}</p>
                        </div>
                    </div>
                </div>
        // </div>
    );
};

export default FoodCart;