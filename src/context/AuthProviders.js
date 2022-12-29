import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config'


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider ()

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    
    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
    }

   
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user justify');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    } , [])

    const authInfo = {
        createUser,
        signIn,
        signInWithGoogle,
        user,
        logOut,
        updateUser,
        loading,
        providerLogin

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;