import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';



export const AuthContext = createContext(null);
//akana children bosaica ar karon buji nai valo moto
const AuthProvider = ({ children }) => {

    const allContexts = useFirebase();

    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;