import React from 'react';
import { useAuth } from '../Login/useAuth';
import { useForm } from 'react-hook-form';

const LoginAccount = () => {
    const auth = useAuth();
    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <div>
            {
                auth.user && <p>Welcome{auth.user.name}</p>
            }
            < form onSubmit={auth.signInUser}>

                < input onBlur={auth.handleChange} name="name" ref={register({ required: true })} placeholder="Name" />
                {errors.name && <span className="error">This field is required</span>}
                < input onBlur={auth.handleChange} name="email" ref={register({ required: true })} placeholder="Email" />
                {errors.email && <span className="error">This field is required</span>}
                < input onBlur={auth.handleChange} name="password" ref={register({ required: true })} placeholder="Password" />
                {errors.password && <span className="error">This field is required</span>}

                {/* <button className="login-btn" onClick={onSubmit}>Login</button> */}
                <input type="submit" value="Login" />
                {
                    auth.user.error && <p>{auth.user.error}</p>
                }
            </form >
        </div>
    );
};

export default LoginAccount;