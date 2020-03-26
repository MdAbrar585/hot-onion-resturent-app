import React, { useState } from 'react';
import fakeData from '../../fakeData';
import breakfast from '../../fakeData/breakfast';
import Lunch from '../Lunch/Lunch';

const Items = () => {
    // const foods = fakeData.slice(0, 18);
    
    
    
    const [dinner, setDinner] = useState([]);
    const [breakFast, setBreakfast] = useState([]);

    const [lunch, setLunch] = useState([]);

    const handleLunchButton = (lunch) => {
        console.log("clicked", lunch);
        const lunches = fakeData.filter(
            x => x.category === "lunch"
        );
        setLunch(lunches);
    }

    const handleDinnerButton = (dinner) => {
        console.log("clicked");
        const dinners = fakeData.filter(
            x => x.category === "dinner"
        );
        setLunch(dinners);
    }

    const handleBreakfastButton = (lunch) => {
        console.log("clicked", lunch);
        const breakfasts = fakeData.filter(
            x => x.category === "breakfast"
        );
        setLunch(breakfasts);
    }
    return (
        <div>
            <h1>This is items</h1>
            <p>{lunch.length}</p>
            <p>{dinner.length}</p>
            <p>{breakfast.length}</p>
            <button onClick={() => handleLunchButton(lunch)}>Lunch</button>
            <button onClick={() => handleDinnerButton(dinner)}>Dinner</button>
            <button onClick={() => handleBreakfastButton(lunch)}>Breakfast</button>

            {
                lunch.map(lunch =>
                <Lunch lunch={lunch}></Lunch>)
            }
            {/* {
                dinner.map(dinner =>
                <li>{dinner.name}</li>)
            } */}
            {/* {
                breakfast.map(breakfast =>
                <li>{breakfast.name}</li>)
            } */}

        </div>
    );
};

export default Items;