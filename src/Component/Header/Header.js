import React, { useContext } from 'react';
import logo from '../../images/ICON/logo2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { useAuth } from '../Login/useAuth';
import { Link } from 'react-router-dom';



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
                        auth.user ? <Link to="/loginAccount"> <button className="my-button" onClick={auth.signOut}>SignOut</button> </Link>: <a  className="my-button" href="/loginAccount">Login</a> 
                        
                    }
                   <Link to="/signUp"> <button className="my-button">SignUp</button></Link>
                       </div>
                    {/* <a href="/">Login</a>
                    <a href="/">Sign Up</a> */}

                </div>
            </nav>
            
            {/* <nav>
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav> */}
        </div>
    );
};

export default Header;