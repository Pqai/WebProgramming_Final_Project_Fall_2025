import React from 'react';

import './SignUp.css';

const Login = ({ formData, errors, isLoading, onChange, onSubmit }) => {
    return (
        <div className="page-container">            
            <main className="main-content">
                <div className="signup-container">
                    <div className="signup-form">
                        <h1>Student Sign Up</h1>
                        <p className="subtitle">Join Bow Valley College - Software Development Department</p>
                        
                        <form onSubmit={onSubmit}>
                            {/* Personal Information Section */}
                            <div className="form-section">
                                <h3>Personal Information</h3>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={onChange}
                                            className={errors.firstName ? 'error' : ''}
                                        />
                                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={onChange}
                                            className={errors.lastName ? 'error' : ''}
                                        />
                                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={onChange}
                                            className={errors.email ? 'error' : ''}
                                        />
                                        {errors.email && <span className="error-message">{errors.email}</span>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={onChange}
                                            className={errors.phone ? 'error' : ''}
                                        />
                                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="birthday">Birthday</label>
                                    <input
                                        type="date"
                                        id="birthday"
                                        name="birthday"
                                        value={formData.birthday}
                                        onChange={onChange}
                                        className={errors.birthday ? 'error' : ''}
                                    />
                                    {errors.birthday && <span className="error-message">{errors.birthday}</span>}
                                </div>
                            </div>

                            {/* Academic Information */}
                            <div className="form-section">
                                <h3>Academic Information</h3>
                                
                                <div className="form-group">
                                    <label htmlFor="department">Department</label>
                                    <select
                                        id="department"
                                        name="department"
                                        value={formData.department}
                                        onChange={onChange}
                                    >
                                        <option value="SD">Software Development (SD)</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="program">Program</label>
                                    <select
                                        id="program"
                                        name="program"
                                        value={formData.program}
                                        onChange={onChange}
                                        className={errors.program ? 'error' : ''}
                                    >
                                        <option value="">Select a program</option>
                                        <option value="diploma">Diploma (2 years)</option>
                                        <option value="post-diploma">Post-Diploma (1 year)</option>
                                        <option value="certificate">Certificate (6 months)</option>
                                    </select>
                                    {errors.program && <span className="error-message">{errors.program}</span>}
                                </div>
                            </div>

                            {/* Account Information */}
                            <div className="form-section">
                                <h3>Account Information</h3>
                                
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={onChange}
                                        className={errors.username ? 'error' : ''}
                                    />
                                    {errors.username && <span className="error-message">{errors.username}</span>}
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={onChange}
                                            className={errors.password ? 'error' : ''}
                                        />
                                        {errors.password && <span className="error-message">{errors.password}</span>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={onChange}
                                            className={errors.confirmPassword ? 'error' : ''}
                                        />
                                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="submit-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;