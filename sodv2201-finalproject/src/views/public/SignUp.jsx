import React, {useState} from 'react';
import { useSignUp } from '../../routes/public/signup.component';
import './SignUp.css'
//function

export const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthday: '',
        department: 'SD',
        program: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [userProfiles, setUserProfiles] = useState([]);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        console.log('Form submitted:', formData);
        
        const studentId = generateStudentId(formData.program);
        
        const newUser = {
            ...formData,
            studentId,
            role: 'student',
            createdAt: new Date().toISOString()
        };
        
        setUserProfiles(prev => [...prev, newUser]);
        
        // Save to localStorage
        const existingUsers = JSON.parse(localStorage.getItem('bowValleyUsers') || '[]');
        localStorage.setItem('bowValleyUsers', JSON.stringify([...existingUsers, newUser]));
        
        alert(`Registration successful! Your Student ID is: ${studentId}`);
        
        // Clear form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            birthday: '',
            department: 'SD',
            program: '',
            username: '',
            password: '',
            confirmPassword: ''
        });
        
        // Redirect to login or home page
        // window.location.href = '/login';
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


    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1>Student Sign Up</h1>
                <p>Join Bow Valley College - Software Development Department</p>
                
                <form onSubmit={handleSubmit}>
                    {/* Personal Information Section */}
                    <div className="form-section">
                        <h3>Personal Information</h3>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.firstName && <span className="error">{errors.firstName}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.lastName && <span className="error">{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.phone && <span className="error">{errors.phone}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthday">Birthday *</label>
                            <input
                                type="date"
                                id="birthday"
                                name="birthday"
                                value={formData.birthday}
                                onChange={handleChange}
                                required
                            />
                            {errors.birthday && <span className="error">{errors.birthday}</span>}
                        </div>
                    </div>

                    {/* Academic Information */}
                    <div className="form-section">
                        <h3>Academic Information</h3>
                        
                        <div className="form-group">
                            <label htmlFor="department">Department *</label>
                            <select
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                            >
                                <option value="SD">Software Development (SD)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="program">Program *</label>
                            <select
                                id="program"
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a program</option>
                                <option value="diploma">Diploma (2 years)</option>
                                <option value="post-diploma">Post-Diploma (1 year)</option>
                                <option value="certificate">Certificate (6 months)</option>
                            </select>
                            {errors.program && <span className="error">{errors.program}</span>}
                        </div>
                    </div>

                    {/* Account Information */}
                    <div className="form-section">
                        <h3>Account Information</h3>
                        
                        <div className="form-group">
                            <label htmlFor="username">Username *</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            {errors.username && <span className="error">{errors.username}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="password">Password *</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password *</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};