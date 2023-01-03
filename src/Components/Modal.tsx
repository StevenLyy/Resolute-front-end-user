import React, { useState } from 'react';
import {LoginForm, SignupForm} from './Forms';

function Modal() {
    const [showLogin, setShowLogin] = useState(true);

    const handleToggleForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="modal">
            {showLogin ? (
                <LoginForm/>
            ) : (
                <SignupForm />
            )}
            <button onClick={handleToggleForm}>
                {showLogin ? 'Sign up' : 'Log in'}
            </button>
        </div>
    );
}

export default Modal;