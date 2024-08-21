import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config'
const auth = getAuth(app);
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (user, name, url) => {
        updateProfile(user, {
            displayName: name,
            photoURL: url
        })
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    //google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const fbLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }
    // logOut
    const logOut = () => {
        return signOut(auth)
    }

    const info = {
        user,
        loading,
        createUser,
        updateUser,
        userLogin,
        googleLogin,
        fbLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;