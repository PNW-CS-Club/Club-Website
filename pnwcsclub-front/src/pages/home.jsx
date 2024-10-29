import React, { useState } from 'react';
import http from '../http-common';

export default function Home() {
    const [data, setData] = useState(null);

    const handleButtonClick = async () => {
        const response = await http.get('/test');
        setData(response.data);
    };

    return (
        <div>
            <h1>Welcome to the PNW CS Club!</h1>
            <p>Our mission is to provide a community for students interested in computer science and related fields. We host events, workshops, and projects to help students learn and grow in the field of computer science.</p>
            <p>Check out our <a href="/projects">projects</a>, <a href="/events">events</a>, and <a href="/blog">blog</a> to learn more about what we do!</p>

            <button onClick={handleButtonClick}>Test API</button>

            {data && (
                <div>
                    <h2>API Response:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}