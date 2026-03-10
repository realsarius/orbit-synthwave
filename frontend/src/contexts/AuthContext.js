import React, { useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateEmail as updateFirebaseEmail,
    updatePassword as updateFirebasePassword,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function authUnavailable() {
        return Promise.reject(new Error("Firebase auth is not configured."));
    }

    function signup(email, password) {
        if (!auth) {
            return authUnavailable();
        }
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        if (!auth) {
            return authUnavailable();
        }
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        if (!auth) {
            return Promise.resolve();
        }
        return signOut(auth);
    }

    function resetPassword(email) {
        if (!auth) {
            return authUnavailable();
        }
        return sendPasswordResetEmail(auth, email);
    }

    function updateEmail(newEmail) {
        if (!auth || !auth.currentUser) {
            return authUnavailable();
        }
        return updateFirebaseEmail(auth.currentUser, newEmail);
    }

    function updatePassword(newPassword) {
        if (!auth || !auth.currentUser) {
            return authUnavailable();
        }
        return updateFirebasePassword(auth.currentUser, newPassword);
    }

    useEffect(() => {
        if (!auth) {
            setCurrentUser(null);
            setLoading(false);
            return () => {};
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
