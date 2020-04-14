import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";
import { Route,Redirect } from "react-router-dom";

//*****************/ Fire base Initialization ************************
firebase.initializeApp(firebaseConfig);
//*****************/ Fire base Initialization end ************************


const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

//*****************/ Redirect review item to login ************************
export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
//*****************/ Redirect review item to login end ************************



//*** Created Function******************* */
const getUser = user => {
    const { email, displayName, photoURL } = user;
   return { email, name: displayName, photo: photoURL };
}

//*************Editing Start****************/














const Auth = () => {
     const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email:'',
    photo: ''
  })
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleChange = event =>{
      // console.log(event.target.name,event.target.value);
      const newUserInfo = {
          ...user
      };
      newUserInfo[event.target.name] = event.target.value;
      console.log(newUserInfo);
      setUser(newUserInfo);
    };

    const signInWithGoogle = () => {
        //*****************/ sign in with popup Start ************************
        return firebase.auth().signInWithPopup(provider)
        .then(res => {
          const { displayName, photoURL, email } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedInUser);
          console.log(displayName, photoURL, email);
        })
        .catch(err => {
          console.log(err);
          console.log(err.message);
        })
        //*****************/ sign in with popup End ************************
    }

    const createAccount = (e) => {
      // if (user.isValid) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const { displayName, photoURL, email } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedInUser);
          console.log(displayName, photoURL, email);
        })
        .catch(err => {
          console.log(err);
          console.log(err.message);
        })
        console.log(user.email, user.password);
      // }
      e.preventDefault();
      e.target.reset();
    }

    const signInUser = e => {
      // if (user.isValid) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
         .then(res => {
          const { displayName, photoURL, email } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedInUser);
          console.log(displayName, photoURL, email);
        })
        .catch(err => {
          console.log(err);
          console.log(err.message);
        })
        // console.log(user.email, user.password);
      // }
      e.preventDefault();
      e.target.reset();
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
        signInWithGoogle,
        handleChange,
        createAccount,
        signInUser
    }
}

export default Auth;