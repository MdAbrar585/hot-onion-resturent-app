import React, { useRef } from 'react';
import Auth from './useAuth';
import './Login.css'
import logo from '../../images/ICON/logo2.png'
import { useForm } from 'react-hook-form';

const Login = () => {
    const auth = Auth();
    const handleLogin = () => {
        auth.signInWithGoogle()
            .then(res => {
                window.location.pathname = '/showItemsCarts';
            })
    }
    console.log(auth);

    //*************************************************** */
    const { register, handleSubmit, watch, errors } = useForm();

    //***********************edition Start**************************** */

    const onSubmit = data => { console.log(data) }

    console.log(watch('example')) // watch input value by passing the name of it

    const password = useRef({});
    password.current = watch("password", "");
    return (
        <div className="body-login">
            <div className="login-form">
                <div className="login-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="login-form-body">
                    < form onSubmit={handleSubmit(onSubmit)} >

                        < input name="name" ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span className="error">This field is required</span>}
                        < input name="email" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span className="error">This field is required</span>}
                        {/* < input name="password" ref={register({ required: true })} placeholder="Password" />
                        {errors.password && <span className="error">This field is required</span>}
                        < input name="confirmPassword" ref={register({ required: true })} placeholder="Confirm Password"/>
                        {errors.confirmPassword && <span className="error">This field is required</span>} <br/> */}

                        <input
                            name="password"
                            type="password"
                            ref={register({
                                required: "You must specify a password",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}


                        <input
                            name="password_repeat"
                            type="password"
                            ref={register({
                                validate: value =>
                                    value === password.current || "The passwords do not match"
                            })}
                        />
                        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

                        <button className="login-btn" onClick={onSubmit}>Login</button>
                        {/* <input type="submit" /> */}
                    </form >
                </div>

                {
                    auth.user ? <button className="google-login-btn" onClick={auth.signOut}>Sign Out</button> :
                        <button className="google-login-btn" onClick={handleLogin}>Sign In Google</button>
                }

            </div>

  )
        </div>
        //*************************************************** */

    );
};

export default Login;