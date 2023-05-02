import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
      return  signInWithPopup(auth, googleProvider);
  
    }

    // Logout for all
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            console.log(user);
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
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;