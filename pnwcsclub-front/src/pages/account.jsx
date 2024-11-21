import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import httpCommon from '../http-common';

const Account = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');


    useEffect(() => {
        const token = Cookies.get('authToken');
        if (!token) {
            window.location.href = '/login';
        } else {
            setLoggedIn(true);
            getUsername(token);
        }
    }, []);

    const handleLogout = () => { 
        httpCommon.post('/logout',
            { auth_token: Cookies.get('authToken') }
        );
        Cookies.remove('authToken');
        setLoggedIn(false);
        window.location.href = '/';

    };

    const getUsername = async (token) => {
        try {
            const response = await httpCommon.get('/username', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsername(response.data);
        } catch (error) {
            console.error('Error fetching username:', error);
        }
    };

    return (
        <div>
            <h1>Account page</h1>
            <h3>Hello, {username}</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Account;