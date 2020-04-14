import React, { useContext } from 'react';
import logo from '../../images/ICON/logo2.png'
import banner from '../../images/ICON/bannerbackground.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { useAuth } from '../Login/useAuth';



const Header = () => {
    const auth = useAuth();
    console.log(auth);
    return (
        <div>
            <nav className="nav-body">
                <div>
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <div className="icons d-flex justify-content-end">
                    <p><FontAwesomeIcon icon={faShoppingCart} /></p>
                    {/* <a href="/">Login</a>
                    <a href="/">Sign Up</a> */}
                    {
                        auth.user && <span>Welcome <br/> {auth.user.email}</span> 
                       
                        // <button className="btn btn-info">Login</button>
                    }
                    {
                        auth.user ? <button onClick={auth.signOut}>SignOut</button> : <a href="/login">Login</a>
                    }
                    <button className="btn btn-info">Sign Up</button>

                </div>
            </nav>
            <div className="banner">
                <img src={banner} alt="" />
            </div>
            {/* <nav>
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav> */}
        </div>
    );
};

export default Header;