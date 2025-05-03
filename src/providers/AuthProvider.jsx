import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const provider = new GoogleAuthProvider();

    const signInWithGooglePopUp = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const info = {
        currentUser,
        loading,
        setCurrentUser,
        signInWithGooglePopUp,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider