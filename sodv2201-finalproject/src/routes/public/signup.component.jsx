import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const generateStudentId = (department = 'SD', program = '') => {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    
    const storageKey = `studentCounter_${currentYear}`;
    let yearlyCounter = parseInt(localStorage.getItem(storageKey) || '1');
    
    const programCodes = {
        'diploma': 'D',
        'post-diploma': 'P', 
        'certificate': 'C'
    };
    
    const programCode = programCodes[program] || 'G';
    const sequentialId = yearlyCounter.toString().padStart(4, '0');
    
    yearlyCounter++;
    localStorage.setItem(storageKey, yearlyCounter.toString());
    
    return `SD${currentYear}${programCode}${sequentialId}`;
};

export const AuthProvider = ({ children }) => {
    const [userProfiles, setUserProfiles] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const signUp = (userData) => {
        const studentId = generateStudentId(userData.department, userData.program);
        
        const newUser = {
            ...userData,
            studentId,
            role: 'student',
            createdAt: new Date().toISOString(),
            isActive: true
        };
        
        setUserProfiles(prev => [...prev, newUser]);
        setCurrentUser(newUser);
        
        const existingUsers = JSON.parse(localStorage.getItem('sdDepartmentUsers') || '[]');
        localStorage.setItem('sdDepartmentUsers', JSON.stringify([...existingUsers, newUser]));
        
        return newUser;
    };

    return (
        <AuthContext.Provider value={{
            userProfiles,
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