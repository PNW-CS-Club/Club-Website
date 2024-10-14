import React from 'react';
import { useRouteError } from "react-router-dom";

export default function Team() {
    //error handling -- redirects to error page if error occurs, ie: invalid path/route
    const error = useRouteError();
    console.error(error);

    //basic placeholder team page, needs css and actual team members
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
