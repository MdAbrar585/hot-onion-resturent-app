import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";

//*****************/ Fire base Initialization ************************
firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

//*** Created Function******************* */
const getUser = user => {
    const { email, displayName, photoURL } = user;
   return { email, name: displayName, photo: photoURL };
}

const Auth = () => {
    const [user, setUser] = useState(null) //for save user information 
    const provider = new firebase.auth.GoogleAuthProvider();

    const signInWithGoogle = () => {
        //*****************/ sign in with popup Start ************************
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const signedInUser = getUser(res.user);
                setUser(signedInUser);
                return res.user;
            })
            .catch(err => {
                console.log(err);
                setUser(null);
                return err.message;
            })
        //*****************/ sign in with popup End ************************
    }

    //*****************/ sign Out  Start ************************
    const signOut = () => {
        firebase.auth().signOut()
            .then(function () {
                setUser(null);
            })
            .catch(function (error) {

            });
    }
    //*****************/ sign Out  End ************************
    //************ */
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const currentUser = getUser(user);
                setUser(currentUser);
            } else {
                // No user is signed in.
            }
        });
    }, [])

    return {
        user,
        signOut,
        signInWithGoogle
    }
}

export default Auth;