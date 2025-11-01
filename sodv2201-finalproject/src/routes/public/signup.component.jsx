import React, {useState} from 'react';
import SignUp from '../../views/public/SignUp';

const SignUpComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthday: '',
        department: 'SD',//because we will only have a software development department
        program: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.birthday) newErrors.birthday = 'Birthday is required';
        if (!formData.program) newErrors.program = 'Program selection is required';
        if (!formData.username.trim()) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
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
            
            const studentId = generateStudentId(formData.program);
            
            const newUser = {
                ...formData,
                studentId,
                role: 'student',
                createdAt: new Date().toISOString()
            };
            
            // Save to localStorage
            const existingUsers = JSON.parse(localStorage.getItem('bowValleyUsers') || '[]');
            localStorage.setItem('bowValleyUsers', JSON.stringify([...existingUsers, newUser]));
            
            console.log('User created:', newUser);
            alert(`Registration successful! Your Student ID is: ${studentId}`);
            

            setFormData({
                firstName: '', lastName: '', email: '', phone: '', birthday: '',
                department: 'SD', program: '', username: '', password: '', confirmPassword: ''
            });
            
            
        } catch (error) {
            console.error('Signup error:', error);
            alert('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const generateStudentId = (program = '') => {
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

    // Pass everything to the view component
    return (
        <SignUp 
            formData={formData}
            errors={errors}
            isLoading={isLoading}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
};

export default SignUpComponent;