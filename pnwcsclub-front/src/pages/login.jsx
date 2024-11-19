import React, { useState, useEffect } from 'react';
import '/src/styles_pages/login.css';
import { authCode as validAuthCode } from '/src/components/login-auth.jsx';
import http from '../http-common';
import Cookies from "js-cookie";

/*
You will have a form that looks like this to create an account:
 * 
 *  Username: ********
 *  Password: ********
 *  Auth Code: ********
 */

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in
        // If so, redirect them to the home page
        const token = Cookies.get('authToken')
        if (token) {
            // Redirect to the home page
            setLoggedIn(true);
            console.log('User is already logged in');
        }
        else {
            console.log('User is not logged in');
        }
    } , []);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const checkAuthCode = (authCode) => {
        return authCode === validAuthCode;
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;

        try {
            const response = await http.post('/login', {
                username: username,
                password: password
            });
            if(response.data == "Login successful!") {
                alert('Login successful!');
               
                // Set the cookie {7 day expiration}
                Cookies.set('authToken', response.data.token, { expires: 7 });
                setLoggedIn(true);

                // Redirect to the account page
                window.location.href = '/account';
            } else {
                alert('Login failed. Please try again.');
            }

        } catch (err) {
            alert('Error logging in. Please try again later.');
        }
    };

    const handleLogout = () => {
        Cookies.remove('authToken');
        setLoggedIn(false);
        window.location.href = '/';
    };

    const createLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;

        try {
            const response = await http.post('/createLogin', {
                username: username,
                password: password
            });

            handleLogin(event);

        } catch (err) {
            alert('Error creating account. Please try again later.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const authCode = form.authCode.value;

        if (checkAuthCode(authCode)) {
            alert('Account created successfully!');
            createLogin(event);
        } else {
            alert('Invalid auth code. Please try again or contact an admin.');
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
                    <form onSubmit={handleLogin}>
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


            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}