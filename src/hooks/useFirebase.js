import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

initializeAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [userLoading, setUserLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // Login
    const signInUsingGoogle = () => {
        setUserLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    // Observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setUserLoading(false)
            }
        })
    }, [])


    return {
        user,
        userLoading,
        signInUsingGoogle,
        handleLogout
    }
};

export default useFirebase;