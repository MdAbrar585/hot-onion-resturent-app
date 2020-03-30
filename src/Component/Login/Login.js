import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    console.log(auth);
    return (
        <div>
            <h1>Login page</h1>
            {
                auth.user ? <button onClick={auth.signOut}>Sign Out</button> :
                    <button onClick={auth.signInWithGoogle}>Sign In Google</button>
            }
        </div>
    );
};

export default Login;