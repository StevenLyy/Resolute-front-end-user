import React from 'react';
import "../style/Navbar.css"


export const LoginForm = () => {
    return (
        <form className="modal-box">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log in</button>
        </form>
    );
}

export const SignupForm = () => {
    return (
        <form className="modal-box">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
        </form>
    );
}
