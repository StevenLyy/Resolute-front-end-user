import React, {useEffect} from "react"
import {NavLink} from 'react-router-dom';
import "../style/Navbar.css"

const Navbar = () => {
    function clearLocalStorage() {
        window.location.reload();
        localStorage.clear();
    }
    if(localStorage.getItem('token') === null) {
        return (
            <nav className="nav">
                <NavLink to="/" className="site-title">Homepage</NavLink>
                <ul>
                    <li>
                        <NavLink to="/login" className={({isActive}) => isActive ? "active" : undefined}>Login</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
    else{
        return (
            <nav className="nav">
                <NavLink to="/" className="site-title">Homepage</NavLink>
                <ul>
                    <li>
                        <NavLink to={"/user/"+localStorage.getItem('id')} className={({isActive}) => isActive ? "active" : undefined}>
                            My routines
                        </NavLink>
                    </li>
                    <li onClick={() => clearLocalStorage()}>
                        <NavLink to="/" className={({isActive}) => isActive ? "active" : undefined}>Logout</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}


export default Navbar;