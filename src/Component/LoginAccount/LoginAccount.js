import React from 'react';

import { useForm } from 'react-hook-form';
import './LoginAccount.css';
import Auth from '../Login/useAuth';

const LoginAccount = () => {
    const auth = Auth();
    const { register, handleSubmit, watch, errors } = useForm();

    const handleLogin = () => {
        auth.signInUser()
            .then(res => {
                window.location.pathname = '/showItemsCarts';
            })
    }

    return (
        <div className="login">
            <div className="login-forms">
            
            < form onSubmit={handleLogin}>
                <h1>Login In</h1>
               
                < input onBlur={auth.handleChange} name="email" ref={register({ required: true })} placeholder="Email" required />
                {errors.email && <span className="error">This field is required</span>}
                < input onBlur={auth.handleChange} name="password" ref={register({ required: true })} placeholder="Password" required/>
                {errors.password && <span className="error">This field is required</span>}

                {/* <button className="login-btn" onClick={onSubmit}>Login</button> */}
                <input className="login-btn" type="submit" value="Login" />
                {
                    auth.user.error && <p>{auth.user.error}</p>
                }
                <p style={{marginLeft:"140px"}}><a href="/login">Don't have an account?</a></p>
            </form >
            </div>
          
        </div>
    );
};

export default LoginAccount;