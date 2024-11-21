import React, { useState, useEffect } from 'react';
import '/src/styles_pages/login.css';
import http from '../http-common';
import Cookies from 'js-cookie';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        authCode: ''
    });

    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            window.location.href = '/account';
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Basic validation for password match
        if (!isLogin && formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        try {
            if (isLogin) {
                // Handle login
                const loginResponse = await http.post('/login', {
                    username: formData.username,
                    password: formData.password
                });
    
                console.log('Login response:', loginResponse.data);
    
                if (loginResponse.data.message === "Login successful!") {
                    Cookies.set('authToken', loginResponse.data.token, { expires: 7 });
                    window.location.href = '/account';
                } else {
                    alert('Login failed. Please try again.');
                }
            } else {
                // Handle account creation
                const createResponse = await http.post('/createLogin', {
                    username: formData.username,
                    password: formData.password,
                    authCode: formData.authCode
                });
        
                if (createResponse.data === "Login created successfully!") {
                    // If account creation is successful, attempt to log in
                    const loginResponse = await http.post('/login', {
                        username: formData.username,
                        password: formData.password
                    });
    
                    console.log('Login response after account creation:', loginResponse.data);
    
                    if (loginResponse.data.message === "Login successful!") {
                        Cookies.set('authToken', loginResponse.data.token, { expires: 7 });
                        window.location.href = '/account';
                    } else {
                        alert('Account created but login failed. Please try logging in.');
                        setIsLogin(true);
                    }
                } else {
                    alert('Error creating account. Please try again or contact an admin.');
                }
            }
        } catch (err) {
            console.error('Error:', err);
            if (!isLogin && err.response?.data) {
                alert("Error creating account! Please try again or contact an admin.");
            } else {
                alert(isLogin ? 'Login failed. Please try again.' : 'Error creating account. Please try again.');
            }
        }
    };

    return (
        <div className="login-page">
            {isLogin ? (
                <div className="login-form">
                    <h1>Login: </h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                <div className="creation-form">
                    <h1>Sign-up: </h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Confirm Password:
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Auth Code:
                            <input
                                type="text"
                                name="authCode"
                                value={formData.authCode}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <button type="submit">Create Account</button>
                    </form>
                </div>
            )}

            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Create a New Account' : 'Login Page'}
            </button>
        </div>
    );
}