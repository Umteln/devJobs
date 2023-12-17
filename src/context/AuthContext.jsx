import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [query, setQuery] = useState('');
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            savedJobs: [],
        });
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    });

    return (
        <AuthContext.Provider
            value={{
                signUp,
                logIn,
                logOut,
                user,
                query,
                setQuery,
                like,
                setLike,
                saved,
                setSaved,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}
