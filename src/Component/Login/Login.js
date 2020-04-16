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
    const handleLogOut = () => {
        auth.signOut()
            
    }

    console.log(auth);

    //*************************************************** */
    const { register, handleSubmit, watch, errors } = useForm();
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
                    < form onSubmit={auth.createAccount}>

                        < input onBlur={auth.handleChange} name="name" ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span className="error">This field is required</span>}
                        < input onBlur={auth.handleChange} name="email" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span className="error">This field is required</span>}
                        {/* < input name="password" ref={register({ required: true })} placeholder="Password" />
                        {errors.password && <span className="error">This field is required</span>}
                        < input name="confirmPassword" ref={register({ required: true })} placeholder="Confirm Password"/>
                        {errors.confirmPassword && <span className="error">This field is required</span>} <br/> */}

                        <input onBlur={auth.handleChange}
                            name="password"
                            type="password"
                            placeholder="password"
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
                            placeholder="confirm password"
                            ref={register({
                                validate: value =>
                                    value === password.current || "The passwords do not match"
                            })}
                        />
                        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

                        {/* <button className="login-btn" onClick={onSubmit}>Login</button> */}
                        <input className="google-login-btn" type="submit" value="SignUp" />
                    </form >
                </div>

                {
                    auth.user ? <button className="google-login-btn" onClick={handleLogin}>Sign In Google</button> : <button className="google-login-btn" onClick={handleLogOut}>Sign Out</button> 
                        
                }
                <p style={{ marginRight: "90px" }}><a href="/loginAccount">Already have an account?</a></p>

            </div>

  )
        </div>
        //*************************************************** */

    );
};

export default Login;