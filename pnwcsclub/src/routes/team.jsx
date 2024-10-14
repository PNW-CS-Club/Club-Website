import React from 'react';
import { useRouteError } from "react-router-dom";

export default function Team() {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h1>The Team:</h1>
            <h2>President: [insert]</h2>
            <p>desc: loreum ipsum</p>
            <h2>name</h2>
            <p>desc: loreum ipsum</p>
        </div>
        

    );
}
