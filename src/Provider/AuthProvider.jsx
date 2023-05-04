import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Sign-up & with  email and password.
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // Login with google
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
      setLoading(true);
      return  signInWithPopup(auth, googleProvider);
  
    }

    // Login with Github
    const gitHubProvider = new GithubAuthProvider();

    const gitHubSignIn = ()=>{
        setLoading(true);
        return  signInWithPopup(auth, gitHubProvider);
  
    }

    // Logout for all
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    //update user data

     const updateUser = (user,name,photo)=>{
         setLoading(true);
        return updateProfile(user, {
             displayName:name,
             photoURL:photo
         });
     }

///////////////////////////////////////////////////
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      
            setUser(loggedUser);
           
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        gitHubSignIn,
        logOut,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;