import React from 'react';

export const LoginForm = () => {
    return (
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log in</button>
        </form>
    );
}

export const SignupForm = () => {
    return (
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
        </form>
    );
}
