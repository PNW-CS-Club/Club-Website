import React, { useState } from 'react';
import '/src/styles_pages/login.css';

/*
You will have a fourm that looks like this to create an account:
 * 
 *  Username: ********
 *  Password: ********
 *  Auth Code: ********
 */

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
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
                    <form>
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