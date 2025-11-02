import React from 'react';

import './SignUp.css';

const Login = ({ loginData, errors, isLoading, onChange, onSubmit }) => {
    return (
        <div className="page-container">            
            <main className="main-content">
                <div className="signup-container">
                    <div className="signup-form">
                        <h1>Log in</h1>
                        <p className="subtitle">Join Bow Valley College - Software Development Department</p>
                        
                        <form onSubmit={onSubmit}>
                            {/* Account Information */}
                            <div className="form-section">
                                <h3>Account Information</h3>
                                
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={loginData.username}
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
                                            value={loginData.password}
                                            onChange={onChange}
                                            className={errors.password ? 'error' : ''}
                                        />
                                        {errors.password && <span className="error-message">{errors.password}</span>}
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="submit-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging In...' : 'Log In'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;