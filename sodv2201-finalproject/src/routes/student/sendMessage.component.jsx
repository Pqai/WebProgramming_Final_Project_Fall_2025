import React, {useState} from 'react';
import sendMessage from '../../views/student/SendMessage';

const SendMessageComponenet = () => {
    const [formData, setFormData] = useState({
        subject: '',
        message: ''
    });

    const [errors, setErrors]= useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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
            if (!formData.message.trim()) newErrors.message = 'Message is required';
            if (!formData.message.length > 2000) newErrors.email = 'Message maximum is 2000 characters';
        
            return newErrors;
    }    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsLoading(true);
        
        try {
            const studentId = 1;
            const messageData = {
                ...formData,
                studentId
            };
            
            const response = await submitMessage(messageData);
            
            if (response.success) {
                setIsSuccess(true);
                setFormData({
                    subject: '',
                    message: '',
                    studentId: ''
                });
                
                // Clear the success message after 3 seconds
                setTimeout(() => setIsSuccess(false), 3000);
            } else {
                throw new Error(response.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setErrors({ submit: error.message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SendMessagePage 
            formData={formData}
            errors={errors}
            isLoading={isLoading}
            isSuccess={isSuccess}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}; 

export default SendMessageComponenet;