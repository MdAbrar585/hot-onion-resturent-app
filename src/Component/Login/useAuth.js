import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";

//*****************/ Fire base Initialization ************************
firebase.initializeApp(firebaseConfig);


const Auth = () => {
    const [user, setUser] = useState(null) //for save user information 
    const provider = new firebase.auth.GoogleAuthProvider();

    const signInWithGoogle = () => {
        //*****************/ sign in with popup Start ************************
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { email, displayName, photoURL } = res.user;
                const signedInUser = { email, name: displayName, photo: photoURL };
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


    return {
        user,
        signOut,
        signInWithGoogle
    }
}

export default Auth;