import React, { createContext, useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        profilePicture: '',
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const currentUser = auth.currentUser;

            if (currentUser) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setUser({
                            username: userData.username,
                            email: userData.email,
                            profilePicture: userData.profilePicture,
                        });
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};