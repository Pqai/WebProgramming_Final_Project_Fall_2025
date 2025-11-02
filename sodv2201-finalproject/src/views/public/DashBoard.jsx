import React from "react";
import CourseCardList from "../../components/ui/CourseCardList/coursecardlist.component"


const DashBoard = () =>{

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}')
    const allOfTheUsers = JSON.parse(localStorage.getItem('bowValleyUsers') || '[]')
    const FindUserData = allOfTheUsers.find(user => user.username === currentUser.username) || {};

    return(
        <div>
            <div className = "dashboard">
                <div className = "displayYourInfo">
                    <h3>Profile Information</h3>
                    
                    <div className = "yourInfo">
                        <p> ${loginData.FirstName}</p>
                        <p> ${loginData.id}</p>
                        <p> ${loginData.status}</p>
                        <p> Software Development </p>


                    </div>

                    <div className ="yourInfo">
                        <h5>College Status</h5>{/*student or admin */}
                        <p> ${loginData.status}</p>

                    </div>

                    <div className ="yourInfo">
                        <h5>Department</h5>
                        <p> Software Development </p>

                    </div>

                    <CourseCardList/>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;