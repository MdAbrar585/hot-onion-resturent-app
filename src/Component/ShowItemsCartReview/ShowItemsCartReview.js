import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ItemsCart from '../ItemsCart/ItemsCart';
import FoodCart from '../FoodCart/FoodCart';
import './ShowItemsCartReview.css'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const ShowItemsCartReview = () => {
    const [foods,setFoods] = useState([]);
    const [foodCart, setFoodCart] = useState([]);
    const [address, setAddress] = useState({
        flat: "",
        business: "",
        delivery: "",
        disabled: true
    });

    useEffect(()=>{
        fetch('http://localhost:4200/foodData')
        .then(res=>res.json())
        .then(data=>{
            console.log("data",data);
            setFoods(data);
        })
},[])
    // const handleFlatChange = (evt) => {
    //     setAddress({ flat: evt.target.value });
    // }

    // const handleBusinessChange = (evt) => {
    //     setAddress({ business: evt.target.value });
    // }
    // const handleDeliveryChange = (evt) => {
    //     setAddress({ delivery: evt.target.value });
    // }

    const handleChange = event => {
        // console.log(event.target.name,event.target.value);
        const newUserInfo = {
            ...address,
            disabled: false
        };
        newUserInfo[event.target.name] = event.target.value;
        console.log(newUserInfo);
        // setUser(newUserInfo);
        setAddress(newUserInfo);
    }

    // console.log(foodCart.length);
    const handleRemoveItem = (itemsId) => {
        const newFoodItem = foodCart.filter(fdId => fdId.id !== itemsId);
        setFoodCart(newFoodItem);
        removeFromDatabaseCart(itemsId);
    }
    useEffect(() => {
        const saveFoodCart = getDatabaseCart();
        const foodId = Object.keys(saveFoodCart);
       if(foods.length){
        const foodItem = foodId.map(id => {
            const item = foods.find(fdId => fdId.id === id);
            item.quantity = saveFoodCart[id];
            return item;
        });
        setFoodCart(foodItem);
        console.log(foodItem);
       }

    }, [foods])
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


    const handlePlaceOrder = () => {
        console.log("clicked");
    }

    //**************************************************** */
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => { console.log(data) }

    console.log(watch('example')) // watch input value by passing the name of it
    //**************************************************** */

    // const enable = address.business.length>0 && address.delivery.length>0;
    return (
        <div>
            <nav className="d-flex justify-content-center menu-list">
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav>
            <div className="items-cart-body">
                <div className="form">
                    <div className="form-body">
                        <h6>Edit Delivery Details</h6><hr className="hr" />
                        < form onSubmit={handleSubmit(onSubmit)} >
                            < input defaultValue="Delivery to door" name="deliveryDoor" ref={register({ required: true })} />
                            {errors.deliveryDoor && <span>This field is required</span>}

                            < input defaultValue="107 Rd No 8" name="roadNo" ref={register({ required: true })} />
                            {errors.roadNo && <span>This field is required</span>}

                            < input name="flat" onBlur={handleChange} ref={register({ required: true })} placeholder="Flat,suit amd floor" />
                            {errors.flat && <span className="err">This field is required</span>}

                            < input name="businessName" onBlur={handleChange} ref={register({ required: true })} placeholder="Business Name" />
                            {errors.businessName && <span className="err">This field is required</span>}

                            < input name="deliveryInstruction" onBlur={handleChange} ref={register({ required: true })} placeholder="Add Delivery Instruction" />
                            {errors.deliveryInstruction && <span className="err">This field is required</span>} <br />

                            {/* <input type="submit" /> */}
                            <button  className="details-btn" onClick={onSubmit}>Submit</button>
                        </form >
                    </div>

                </div>
                <div className="order-food-review">
                    {
                        foodCart.map(fd =>
                            <ItemsCart
                                handleRemoveItem={handleRemoveItem}
                                foodItem={fd} ></ItemsCart>
                        )
                    }
                    {
                        !foodCart.length && <h1>No Items Added <a href="/items"> Keep Shopping</a></h1>
                    }
                    <p>Subtotal : {total}</p>
                    <p>Shipping Cost : {shippingCost}</p>
                    <p> Tax : {tax}</p>
                    <p>Delivery Fee : {delivery}</p>
                    <p>Total : {grandTotal}</p>
                    <Link to="/delivery">
                        <button
                            style={{ backgroundColor: "#F91944", border: "none" }}
                            className="btn-place-order btn btn-primary"
                            onClick={handlePlaceOrder}
                            disabled={address.disabled}

                        >Place Order</button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default ShowItemsCartReview;