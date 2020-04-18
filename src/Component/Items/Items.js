import React, { useState } from 'react';
import fakeData from '../../fakeData';
import breakfast from '../../fakeData/breakfast';
import FoodCart from '../FoodCart/FoodCart';
import './Items.css'
import { useEffect } from 'react';


const Items = () => {
    // const foods = fakeData.slice(0, 18);

    const lunch = fakeData.filter(
        x => x.category === "lunch"
    );
    const [defaults, setDefault] = useState(lunch);

    const [category, setCategory] = useState([]);

    const [active, setActive] = useState(
        {
            lunchActive: true,
            dinnerActive: false,
            breakfastActive: false
        }
    )

    useEffect(() => {
        const data = fakeData.filter(item => item.category === "lunch")
        setCategory(data)
    }, [setCategory, fakeData])

    const handleLunchButton = (category) => {
        console.log("clicked", category);
        const lunches = fakeData.filter(
            x => x.category === "lunch"
        );
        let prev = active;
        prev.breakfastActive = false
        prev.lunchActive = true
        prev.dinnerActive = false
        setActive(prev)
        setCategory(lunches);
    }

    const handleDinnerButton = (category) => {
        console.log("clicked");
        const dinners = fakeData.filter(
            x => x.category === "dinner"
        );
        let prev = active;
        prev.breakfastActive = false
        prev.lunchActive = false
        prev.dinnerActive = true
        setActive(prev)
        setCategory(dinners);
    }

    const handleBreakfastButton = (category) => {
        console.log("clicked", category);
        const breakfasts = fakeData.filter(
            x => x.category === "breakfast"
        );
        let prev = active;
        prev.breakfastActive = true
        prev.lunchActive = false
        prev.dinnerActive = false
        setActive(prev)
        setCategory(breakfasts);
        // setDefault(null);
    }




    const { lunchActive, dinnerActive, breakfastActive } = active;

    return (
        <div className="item-body">


            <div className="d-flex justify-content-center food-menu">
                {/* <button onClick={() => handleBreakfastButton(category)}>Breakfast</button> */}
                <span className={breakfastActive ? 'active' : 'btn'} onClick={() => handleBreakfastButton(category)}>Breakfast</span>
                <span className={lunchActive ? 'active' : 'btn'} onClick={() => handleLunchButton(category)}>Lunch</span>
                <span className={dinnerActive ? 'active' : 'btn'} onClick={() => handleDinnerButton(category)}>Dinner</span>
            </div>
            {/* <div>
                <div className="hover-row row">
                    {
                        defaults.map(food =>
                            <div className="cart-style col-md-4">
                                <FoodCart food={food}></FoodCart>
                            </div>
                        )
                    }
                </div>
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
            <button className="check-buttn" disabled={true}>Check Out Your Food</button>



        </div>
    );
};

export default Items;