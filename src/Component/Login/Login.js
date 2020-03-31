import React from 'react';
import Auth from './useAuth';
import './Login.css'
import logo from '../../images/ICON/logo2.png'

const Login = () => {
    const auth = Auth();
    const handleLogin = () =>{
        auth.signInWithGoogle()
        .then(res=>{
            window.location.pathname = '/showItemsCarts';
        })
    }
    console.log(auth);
    return (
        <div className="body">
            <div className="login-form"></div>
            <div className="login-logo">
            <img src={logo} alt=""/>
            </div>
            {
                auth.user ? <button onClick={auth.signOut}>Sign Out</button> :
                    <button onClick={handleLogin}>Sign In Google</button>
            }
        </div>
    );
};

export default Login;