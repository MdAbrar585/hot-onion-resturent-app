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
                <div className="logo">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <div className="p-root d-flex flex-row">
                   <div className="p-2">
                   <p className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></p>
                   </div>
                   <div className="p-2">
                   {
                        auth.user && <span>Welcome <br/> {auth.user.name}</span> 
                       
                        // <button className="btn btn-info">Login</button>
                    }
                   </div>
                   <div className="p-2">
                   {
                        auth.user ? <button className="my-button" onClick={auth.signOut}>SignOut</button> : <a  className="my-button" href="/login">Login</a>
                        
                    }
                    <button className="my-button">SignUp</button>
                       </div>
                    {/* <a href="/">Login</a>
                    <a href="/">Sign Up</a> */}

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