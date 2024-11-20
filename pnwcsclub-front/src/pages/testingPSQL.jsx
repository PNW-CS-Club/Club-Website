import React, { useState } from 'react';
import http from '../http-common';

const TestingPSQL = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleButtonClick = async () => {
        try {
            const response = await http.get('/test');
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };


    const testLogin = async () => {
        try {
            const response = await http.post('/login', {
                username: 'test',
                password: 'test'
            });
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    const getLogin = async () => {
        try {
            const response = await http.get('/getLogin');
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Test</button>
            <button onClick={testLogin}>Test Login</button>
            <button onClick={getLogin}>Get Login</button>
            
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {data && <div>{data}</div>}
        </div>
    );
};

export default TestingPSQL;