/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = ()=>{
        return signOut(auth)
    }
    


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("currentUser", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
       return ()=>{ 
            unsubscribe
        }
    },[])

    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;