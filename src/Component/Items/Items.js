import React, { useState } from 'react';
import fakeData from '../../fakeData';
import breakfast from '../../fakeData/breakfast';
import FoodCart from '../FoodCart/FoodCart';
import './Items.css'


const Items = () => {
    // const foods = fakeData.slice(0, 18);


    const lunch = fakeData.filter(
        x => x.category === "lunch"
    );
    const [defaults, setDefault] = useState(lunch);


    const [category, setCategory] = useState([]);

    const handleLunchButton = (category) => {
        console.log("clicked", category);
        const lunches = fakeData.filter(
            x => x.category === "lunch"
        );
        setCategory(lunches);
    }

    const handleDinnerButton = (category) => {
        console.log("clicked");
        const dinners = fakeData.filter(
            x => x.category === "dinner"
        );
        setCategory(dinners);
    }

    const handleBreakfastButton = (category) => {
        console.log("clicked", category);
        const breakfasts = fakeData.filter(
            x => x.category === "breakfast"
        );
        setCategory(breakfasts);
    }


    return (
        <div className="item-body">


            <div className="d-flex justify-content-center food-menu">
                {/* <button onClick={() => handleBreakfastButton(category)}>Breakfast</button> */}
                <span onClick={() => handleBreakfastButton(category) }>Breakfast</span>
                <span onClick={ () => handleLunchButton(category) }>Lunch</span>
                <span onClick={() => handleDinnerButton(category) }>Dinner</span>
            </div>

            {/* <div className="hover-row row">
                {
                    defaults.map(food =>
                        <div className="cart-style col-md-4">
                            <FoodCart food={food}></FoodCart>
                        </div>
                    )
                }
            </div> */}
            <div className="hover-row row">
                {
                    category.map(food =>
                        <div className="cart-style col-md-4">
                            <FoodCart food={food}></FoodCart>
                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default Items;