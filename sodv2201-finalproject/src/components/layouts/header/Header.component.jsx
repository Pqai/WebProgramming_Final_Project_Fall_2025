import React from 'react';
import {Link} from 'react-router-dom';
//import logoImage from '../../placeholder.png';
import logoImage from './placeholder.png';
import './Header.css';

const Header = () => {
    
    const isLoggedIn = false;//hiding specific buttons depending if you are logged in or not
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
                    <Link to ="/courses" className="nav-link">Courses</Link>

                    {isLoggedIn ? (
                        <Link to= "/profile">
                            <div className ="profile-circle">
                                {currentUser?.firstName?.charAt(0) || 'U'}
                            </div>
                            <span className = "profile-name">
                                {currentUser?.firstName || 'User'}

                            </span>
                        </Link>
                    ):(
                        <div className = "auth-buttons">
                            <Link to="/login" className="btn btn-outline">Login</Link>
                            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
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
