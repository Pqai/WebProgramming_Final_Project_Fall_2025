import { useState } from "react";
import Modal from "react-modal";

const CourseCard = ({course}) => {

    const {name, start_date, end_date, fees, description} = course
    return(
        <div className = 'course-container'>
            
            <h2>{name}</h2>
            <br/>
            <div>
                <p>Start Date:</p>
                <p>{start_date}</p>
            <br/>
            <p>End Date:</p>
            <p>{end_date}</p>
            <p>{fees}</p>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default CourseCard;