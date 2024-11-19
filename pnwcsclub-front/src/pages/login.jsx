import React, { useState } from 'react';
import '/src/styles_pages/login.css';
import { authCode as validAuthCode } from '/src/components/login-auth.jsx';

/*
You will have a form that looks like this to create an account:
 * 
 *  Username: ********
 *  Password: ********
 *  Auth Code: ********
 */

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [authCode, setAuthCode] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const checkAuthCode = (authCode) => {
        // Replace 'yourAuthCode' with the actual auth code you want to check against
        return authCode === validAuthCode;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const authCode = form.authCode.value;

        if (checkAuthCode(authCode)) {
            alert('Account created successfully!');
            // Add your account creation logic here
        } else {
            alert('Invalid auth code.');
        }
    };

    return (
        <div className="login-page">
            <button onClick={toggleForm}>
                {isLogin ? 'Create a New Account' : 'Login Page'}
            </button>
            {isLogin ? (
                <div className="login-form">
                    <h1>Login: </h1>
                    <form>
                        <label>
                            Username:
                            <input type="text" name="username" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                <div className="creation-form">
                    <h1>Sign-up: </h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username:
                            <input type="text" name="username" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" />
                        </label>
                        <label>
                            Confirm Password:
                            <input type="password" name="confirmPassword" />
                        </label>
                        <label>
                            Auth Code:
                            <input type="text" name="authCode" />
                        </label>
                        <button type="submit">Create Account</button>
                    </form>
                </div>
            )}
        </div>
    );
}