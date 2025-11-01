import { useState } from "react";
import Modal from "react-modal";
import './CourseCard.css';

const CourseCard = ({course}) => {

    const {name, start_date, end_date, fees, description} = course
    return(
        <div className="course-card">
            <h2 className="course-name">{name}</h2>
            
            <div className="course-details">
                <div className="date-section">
                    <div className="date-item">
                        <span className="date-label">Start Date:</span>
                        <span className="date-value">{start_date}</span>
                    </div>
                    <div className="date-item">
                        <span className="date-label">End Date:</span>
                        <span className="date-value">{end_date}</span>
                    </div>
                </div>
                
                <div className="fees-section">
                    <span className="fees">{fees}</span>
                </div>
                
                <p className="course-description">{description}</p>
                
                <button className="enroll-btn">View Details</button>
            </div>
        </div>
    );
};

export default CourseCard;