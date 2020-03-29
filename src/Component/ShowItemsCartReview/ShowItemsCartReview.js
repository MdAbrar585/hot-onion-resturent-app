import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ItemsCart from '../ItemsCart/ItemsCart';
import FoodCart from '../FoodCart/FoodCart';
import './ShowItemsCartReview.css'
import { Link } from 'react-router-dom';
const ShowItemsCartReview = () => {
    const [foodCart, setFoodCart] = useState([]);

    const handleRemoveItem = (itemsId) => {
        const newFoodItem = foodCart.filter(fdId => fdId.id !== itemsId);
        setFoodCart(newFoodItem);
        removeFromDatabaseCart(itemsId);
    }
    useEffect(() => {
        const saveFoodCart = getDatabaseCart();
        const foodId = Object.keys(saveFoodCart);
        const foodItem = foodId.map(id => {
            const item = fakeData.find(fdId => fdId.id === id);
            item.quantity = saveFoodCart[id];
            return item;
        });
        setFoodCart(foodItem);
        console.log(foodItem);

    }, [])
    let total = 0;
    let shippingCost = 0;
    let delivery = 0;

    for (let i = 0; i < foodCart.length; i++) {
        const foodItem = foodCart[i];
        total = total + (foodItem.price * foodItem.quantity);
    }
    if (total > 0) {
        shippingCost = 2.00;
    }
    if (total > 0) {
        delivery = 2.00;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shippingCost + Number(tax)).toFixed(2) + delivery;


    const handlePlaceOrder = () =>{
        console.log("clicked");
    }
    return (
        <div>
            <nav className="d-flex justify-content-center menu-list">
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav>
            <div className="order-food-review">
                {
                    foodCart.map(fd =>
                        <ItemsCart
                            handleRemoveItem={handleRemoveItem}
                            foodItem={fd} ></ItemsCart>
                    )
                }
                <p>Subtotal : {total}</p>
                <p>Shipping Cost : {shippingCost}</p>
                <p> Tax : {tax}</p>
                <p>Delivery Fee : {delivery}</p>
                <p>Total : {grandTotal}</p>
                <Link to="/delivery">
                <button 
                style={{backgroundColor:"#F91944",border:"none"}} 
                className="btn-place-order btn btn-primary"
                onClick={handlePlaceOrder}
                >Place Order</button>
                </Link>
            </div>

        </div>
    );
};

export default ShowItemsCartReview;