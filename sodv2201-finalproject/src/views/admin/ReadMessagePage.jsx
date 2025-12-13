import React from "react";
import './ReadMessagePage.css'

const ReadMessagePage = ({ 
    messages, 
    isLoading, 
    unreadCount, 
    respondedCount,
    getStatusBadge,
    formatDate,
    formatFullDate,
    onMarkAsRead, 
    onRespond 
}) => {
return (
        <div className="message-management-container">
            <div className="admin-header">
                <div className="header-content">
                    <h1>Student Messages</h1>
                    <p className="header-subtitle">Manage and respond to student inquiries</p>
                </div>
                <div className="message-stats">
                    <div className="stat-item">
                        <span className="stat-number">{messages.length}</span>
                        <span className="stat-label">Total</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number unread">{unreadCount}</span>
                        <span className="stat-label">Unread</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number responded">{respondedCount}</span>
                        <span className="stat-label">Responded</span>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="messages-content">
                {isLoading ? (
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                        <p>Loading messages...</p>
                    </div>
                ) : messages.length === 0 ? (
                    <div className="empty-state">
                        <h3>No Messages</h3>
                        <p>No student messages have been submitted yet.</p>
                    </div>
                ) : (
                    <div className="messages-grid">
                        {/* Messages List */}
                        <div className="messages-list">
                            {messages.map((message) => {
                                const statusConfig = getStatusBadge(message.status);
                                
                                return (
                                    <div 
                                        key={message.message_id} 
                                        className={`message-card ${message.status}`}
                                    >
                                        <div className="message-header">
                                            <div className="message-info">
                                                <div className="message-title-row">
                                                    <h3 className="message-subject">{message.subject}</h3>
                                                    <span className={`status-badge ${statusConfig.className}`}>
                                                        {statusConfig.icon} {statusConfig.label}
                                                    </span>
                                                </div>
                                                <div className="message-meta">
                                                    <div className="student-info">
                                                        <span className="student-name">
                                                            {message.first_name} {message.last_name}
                                                        </span>
                                                        <span className="student-id">
                                                            {message.student_id}
                                                        </span>
                                                    </div>
                                                    <div className="message-dates">
                                                        <span className="sent-date">
                                                            Sent: {formatFullDate(message.submitted_at)}
                                                        </span>
                                                        {message.responded_at && (
                                                            <span className="response-date">
                                                                Responded: {formatDate(message.responded_at)}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="message-actions">
                                                {message.status === 'unread' && (
                                                    <button 
                                                        onClick={() => onMarkAsRead(message.message_id)}
                                                        className="action-btn mark-read-btn"
                                                        title="Mark as read"
                                                    >
                                                        Mark Read
                                                    </button>
                                                )}
                                                <button 
                                                    onClick={() => onRespond(message)}
                                                    className="action-btn respond-btn"
                                                    title="Respond to message"
                                                >
                                                    Respond
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReadMessagePage;