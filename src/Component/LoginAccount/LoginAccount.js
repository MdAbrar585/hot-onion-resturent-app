import React from 'react';

import { useForm } from 'react-hook-form';
import './LoginAccount.css';
import Auth from '../Login/useAuth';


const LoginAccount = () => {
    const auth = Auth();

    const { register, handleSubmit, watch, errors } = useForm();



    const handleLoginWithPopUp = () => {
        auth.signInWithGoogle()
            .then(res => {
                window.location.pathname = '/showItemsCarts';
            })
    }
    const handleLogOut = () => {
        auth.signOut()      
    }

    return (
        <div className="login">
            <div className="login-forms">
            
            <form>
                <h1>Login In</h1>
               
                < input  name="email" ref={register({ required: true })} placeholder="Email" required />
                {errors.email && <span className="error">This field is required</span>}
                < input  name="password" ref={register({ required: true })} placeholder="Password" required/>
                {errors.password && <span className="error">This field is required</span>}
                {/* <button className="popup-btn">Login</button> */}
                <input style={{background:"#F91944"}} className="login-btn" type="submit" value="Login" />
                {
                    auth.user ?  <button className="popup-btn" onClick={handleLogOut}>Sign Out</button> :<button className="popup-btn" onClick={handleLoginWithPopUp}>Sign In Google</button> 
                        
                }
                {/* {
                    auth.user.error && <p>{auth.user.error}</p>
                } */}
                <p style={{marginLeft:"140px"}}><a href="/signUp">Don't have an account?</a></p>
            </form >
            </div>
          
        </div>
    );
};

export default LoginAccount;