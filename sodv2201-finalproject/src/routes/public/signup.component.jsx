import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

const SignUpContext = createContext();

export const SignUpProvider = ({}) => {
    const [userProfiles, setUserProfles] = useState([]);

    const value = {
        userProfile, 
        setUserProfles
    };

    return(
        <SignUpContext.Provider value = {value}>
            {children}
        </SignUpContext.Provider>
    );
};

export const useSignUp = () => {
    const context = useContext(SignUpContext)
    if(!context){
        throw new Error('useSignUp must be used within a SignUpProvider');
    }
    return context;
}