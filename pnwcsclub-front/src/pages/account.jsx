import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


const Account = () => {

    const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        const token = Cookies.get('authToken');
        if (!token) {
            window.location.href = '/login';
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('authToken');
        setLoggedIn(false);
        window.location.href = '/';
    };

    return (
        <div>
            <h1>Account</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Account;