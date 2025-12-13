import React from 'react';

const sendMessage = (formData, errors, isLoading, isSuccess, onChange, onSubmit) => {
    return (
        <div className = "send-message-container">
                        <div className="send-message-card">
                <div className="message-header">
                    <h1>Contact Admin</h1>
                    <p className="subtitle">Send a message to the administration team</p>
                </div>

                {isSuccess && (
                    <div className="success-message">
                        <span className="success-icon">✓</span>
                        <p>Your message has been sent successfully! We'll respond within 24-48 hours.</p>
                    </div>
                )}

                <form onSubmit={onSubmit} className="message-form">
                    <div className="form-group">
                        <label htmlFor="subject" className="form-label">
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={onChange}
                            placeholder="e.g., Course registration issue"
                            className={`form-input ${errors.subject ? 'error' : ''}`}
                            maxLength="200"
                        />
                        {errors.subject && (
                            <span className="error-message">{errors.subject}</span>
                        )}
                        <div className="char-count">
                            {formData.subject.length}/200 characters
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={onChange}
                            placeholder="Describe your issue or inquiry in detail..."
                            className={`form-textarea ${errors.message ? 'error' : ''}`}
                            rows="8"
                            maxLength="2000"
                        />
                        {errors.message && (
                            <span className="error-message">{errors.message}</span>
                        )}
                        <div className="char-count">
                            {formData.message.length}/2000 characters
                        </div>
                    </div>

                    {errors.submit && (
                        <div className="submit-error">
                            <span className="error-icon">⚠</span>
                            <span>{errors.submit}</span>
                        </div>
                    )}

                    <div className="form-actions">
                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </button>
                    </div>
                </form>

                <div className="message-guidelines">
                    <h3>Message Guidelines</h3>
                    <ul>
                        <li>Include your student ID in the message if needed</li>
                        <li>Be specific about your issues or questions</li>
                        <li>Response time: 24-48 hours during business days</li>
                        <li>For urgent matters, please visit the administration office</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default sendMessage;