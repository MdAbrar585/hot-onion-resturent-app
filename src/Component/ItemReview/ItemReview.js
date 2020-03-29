import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import './ItemReview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ItemsCart from '../ItemsCart/ItemsCart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const ItemReview = () => {
    const [count, setCount] = useState(1);
    const [itemCart,setItemCart] = useState([]);
    
    const { id } = useParams();
    const foodItem = fakeData.find(food => food.id === id);
    const handleAddFood = (foodItem) =>{
        const newItemCart = [...itemCart, foodItem];
        setItemCart(newItemCart);
        addToDatabaseCart(foodItem.id,count);
    }
    return (
        <div>
            <nav className="d-flex justify-content-center menu-list">
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav>
            <div className="dinner">
                <div className="dinner-details">
                    <h1>{foodItem.name}</h1>
                    <h6>{foodItem.description}</h6>
                    <div className="price-button">
                        <div className="price">
                            <p>${(foodItem.price * count).toFixed(2)}</p>
                        </div>
                        <div className="cart-button">
                            <button onClick={() => setCount(count - 1)}>-</button>
                            <span>{count}</span>
                            <button onClick={() => setCount(count + 1)}>+</button>
                        </div>
                    </div>

                    <br />
                    <Link to="/showItemsCart">
                    <button
                    onClick={() => handleAddFood(foodItem)}
                    className="add-to-cart"><FontAwesomeIcon icon={faShoppingCart}
                    /> Add</button>
                    </Link>
                    {/* <ItemsCart itemCart={itemCart}></ItemsCart> */}
                </div>
                <div className="dinner-image">
                    <img style={{ width: "70%" }} src={foodItem.img} alt="" />
                </div>
                {/* <Dinner dinnerFood={dinner}></Dinner> */}

            </div>
        </div>
    );
};

export default ItemReview;