import React, { useContext } from 'react';
import './Delivery.css'
import image3 from '../../images/Image/Group 1152.png'
import image2 from '../../images/Image/Group 1151.png'
import image1 from '../../images/Image/ordercomplete.png'
import { UserContext } from '../../App';
const Delivery = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <nav className="d-flex justify-content-center menu-list">
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav>
            <div className="delivery-body">
                <div className="delivery-map">
                    <img src={image1} alt="" />
                </div>
                <div className="delivery-time">
                    <div className="delivery-time-img1 d-flex justify-content-center">
                        <img src={image2} alt="" />
                    </div>
                    <div className="delivery-location-details">
                        <h6>Your Location</h6>
                        <p>301,Chaya Neer Building</p>
                        <h6>Shop Address</h6>
                        <p>Candy, Anderkilla</p>
                    </div>
                    <div className="time">
                        <h4>8:30 PM</h4>
                        <p className="text-muted">Estimited Delivery Time</p>
                    </div>
                    <div className="delivery-driver">
                        <div className="driver-img">
                            <img src={image3} alt="" />
                        </div>
                        <div className="driver-name">
                            <h4 >{user}</h4>
                            <p className="text-muted">Your Rider</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Delivery;