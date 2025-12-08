import React, {useState} from 'react';
import sendMessage from '../../views/student/SendMessage';

const SendMessageComponenet = () => {
    const [formData, setFormData] = useState({
        studentId: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors]= useState({});
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
    }

     const validateForm = () => {
        const newErrors = {};
        
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.lastbName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    };

    
} 