import { Outlet, Link } from "react-router-dom"


export const Header = () => {
    return(
        <>
            <nav className = "header_wrap">
                <ul className = "header_container">
                    <li>
                        <img src =""/><a></a>
                    </li>
                    
                    <li className = "hader_list">
                        <Link to = "/">Profile</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

//on the header, access to the home page, acess to your profile must be on there
//could add more 
//make a css