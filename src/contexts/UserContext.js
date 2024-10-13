import React, { createContext, useState } from 'react';

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: 'John Doe',
        email: 'johndoe@example.com',
        profilePicture: null,
        password: '', // Optional: Use for password management if needed
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};