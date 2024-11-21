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

    
    return (
        <div>
            <h1>Testing PSQL/Backend</h1>
            <p>not currently testing much, so this is simply to confirm connection to backend.</p>
            <button onClick={handleButtonClick}>Test</button>

            
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {data && <div>{data}</div>}
        </div>
    );
};

export default TestingPSQL;