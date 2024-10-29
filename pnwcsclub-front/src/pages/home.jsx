import React from 'react';
import http from '../http-common';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the PNW CS Club!</h1>
            <p>Our mission is to provide a community for students interested in computer science and related fields. We host events, workshops, and projects to help students learn and grow in the field of computer science.</p>
            <p>Check out our <a href="/projects">projects</a>, <a href="/events">events</a>, and <a href="/blog">blog</a> to learn more about what we do!</p>

            <button onClick={async () => {
                const response = await http.get('/api/test');
                console.log(response.data);
            }}>Test API</button>
        </div>
    );
}