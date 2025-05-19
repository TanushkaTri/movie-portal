import React, { createContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut 
} from 'firebase/auth';
import { getAuth, updateProfile } from "firebase/auth";
import auth from '../fireBase/firebase.config';

// Google Auth Provider
const provider = new GoogleAuthProvider();

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false); // Состояние для роли администратора

    // Sign out user
    const logOut = () => {
        setLoading(true);
        signOut(auth);
    };

    // Create user with email and password
    const createuser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Log in user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google login user
    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    };

    // Update profile
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    // Password reset email
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // User information to send to other components
    const user_Information_Send = {
        user, setUser, logOut, createuser, googleSignIn, signIn, updateUser, passwordReset, loading, isAdmin
    };

    // Monitor user authentication state
    useEffect(() => {
        const observer = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                const token = await currentUser.getIdTokenResult();
                setIsAdmin(token.claims.admin === true); // Проверка роли администратора
            } else {
                setIsAdmin(false);
            }
        });
        
        return () => {
            observer();
        };
    }, []);

    return (
        <AuthContext.Provider value={user_Information_Send}>
            {children}
        </AuthContext.Provider>
    );
}