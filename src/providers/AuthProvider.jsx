import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';
import axios from 'axios';
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signInWithGooglePopUp = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);

            if (user?.email) {
                axios.post("http://localhost:5000/jwt",
                    { user: user.email }, { withCredentials: true }
                ).then(({ data }) => console.log(data))
            } else {
                axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                    .then(({ data }) => console.log(data))
            }

            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const info = {
        currentUser,
        loading,
        setCurrentUser,
        createUser,
        signInUser,
        signInWithGooglePopUp,
        logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider