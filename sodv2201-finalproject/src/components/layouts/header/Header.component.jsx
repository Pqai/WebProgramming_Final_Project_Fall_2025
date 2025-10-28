import React from 'react';
import {Link} from 'react-router-dom';
import logoImage from './placeholder.png';
import './Header.css';

 const Header = () => {
    
    const isLoggedIn = false;
    const currentUser = null;

    return (
        <header className ="header">
            <nav className = "header-container">

                <Link to ="/" className="logo">
                    <img src ={logoImage} alt="replaceSoon"/>
                    <span className ="logo-text">Bow Valley</span>
                </Link>

                <div className ="navigation">
                    <Link to="/programs" className ="nav-link">Programs</Link>
                    <Link to ="/courses" className="nav-Link">Courses</Link>

                    {isLoggedIn ? (
                        <Link>
                            <div className ="profile-circle">
                                {currentUser?.firstName?.charAt(0) || 'U'}
                            </div>
                            <span className = "profile-name">
                                {currentUser?.firstName || 'User'}

                            </span>
                        </Link>
                    ):(
                        <div className = "auth-buttons">
                            <Link to="/login" className="btn btn-outline"></Link>
                            <Link to="/signup" className="btn btn-primary"></Link>
                        </div>   
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;

//on the header, access to the home page, acess to your profile must be on there
//could add more 
//make a css