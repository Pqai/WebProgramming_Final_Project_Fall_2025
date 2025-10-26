import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const generateStudentId = (department = 'SD', program = '') => {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    
    // Get or initialize sequential counter for this year
    const storageKey = `studentCounter_${currentYear}`;
    let yearlyCounter = parseInt(localStorage.getItem(storageKey) || '1');
    
    // Program codes
    const programCodes = {
        'diploma': 'D',
        'post-diploma': 'P', 
        'certificate': 'C'
    };

export const AuthProvider = ({ children }) => {
    const [userProfiles, setUserProfiles] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const signUp = (userData) => {
        const newUser = {
            ...userData,
            studentId: generateStudentId(), // You'll need to create this function
            role: 'student',
            createdAt: new Date().toISOString()
        };
        
        setUserProfiles(prev => [...prev, newUser]);
        setCurrentUser(newUser);
        return newUser;
    };

    return (
        <AuthContext.Provider value={{
            userProfiles,
            setUserProfiles,
            currentUser,
            signUp,
            login: setCurrentUser,
            logout: () => setCurrentUser(null)
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

const generateStudentId = () => {
    return 'STU' + Date.now().toString().slice(-6);
};