import React, {useState} from 'react';
import Login from '../../views/public/LogIn';

const LoginComponent = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) =>{
    const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

        const validateForm = () => {
        const newErrors = {};

        if (!loginData.username.trim()) newErrors.username = 'Username is required';
        if (!loginData.password) newErrors.password = 'Password is required';
        if (loginData.password !== loginData.confirmPassword) {//make this connect to the backend later
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsLoading(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
                        
            const logIn = { //logIn
                ...loginData,
                //studentId,
                role: 'student',
                loggedInAt: new Date().toISOString()
            };
            
            // Save to localStorage
            const existingUsers = JSON.parse(localStorage.getItem('bowValleyUsers') || '[]');
            localStorage.setItem('bowValleyUsers', JSON.stringify([...existingUsers, logIn]));
            
            console.log('User Logged in:', logIn);
            //alert(`Registration successful! Your Student ID is: ${studentId}`);
            alert(`Logging in successful user logged in is${loginData.username}`);

            

            setLoginData({
                username: '', password: ''
            });
            
            
        } catch (error) {
            console.error('Signup error:', error);
            alert('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Login
            loginData = {loginData}
            errors={errors}
            isLoading={isLoading}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
};

export default LoginComponent;