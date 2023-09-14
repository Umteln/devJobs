import { useEffect, useState } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth, db } from 'lib/firebase';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { DASHBOARD, LOGIN } from '../libs/routes';
import isUsernameExists from './UsernameExists';

export const useAuth = () => {
    const [authUser, authLoading, error] = useAuthState(auth);
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const ref = doc(db, 'users', authUser.uid);
            const docSnap = await getDoc(ref);
            setUser(docSnap.data());
            setLoading(false);
        }

        if (!authLoading) {
            if (authUser) fetchData();
            else setLoading(false); // Not signed in
        }
    }, [authLoading]);

    return { user, isLoading, error };
};

export function useLogin() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function login({ email, password, redirectTo = DASHBOARD }) {
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Success, You are logged in');
            navigate(redirectTo);
        } catch (error) {
            alert('Error, logging in failed');
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return { login, isLoading };
}

export function useRegister() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function register({
        username,
        email,
        password,
        redirectTo = DASHBOARD,
    }) {
        setLoading(true);
        const usernameExists = await isUsernameExists(username);

        if (usernameExists) {
            alert('Username already exists');
            setLoading(false);
        } else {
            try {
                const res = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                await setDoc(doc(db, 'users', res.user.uid), {
                    id: res.user.uid,
                    username: username.toLowerCase(),
                    avatar: '',
                    date: Date.now(),
                });

                alert('Account created, logged in');
                navigate(redirectTo);
            } catch (error) {
                alert('Signing Up failed');
            } finally {
                setLoading(false);
            }
        }
    }

    return { register, isLoading };
}
export function useLogout() {
    const [signOut, isLoading, error] = useSignOut(auth);
    const navigate = useNavigate();

    async function logout() {
        if (await signOut()) {
            alert('Successfully logged out');
            navigate(LOGIN);
        }
    }

    return { logout, isLoading };
}
