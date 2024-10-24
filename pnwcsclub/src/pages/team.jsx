import React from 'react';
import { useRouteError } from "react-router-dom";
import '/src/styles/team.css';


export default function Team() {
    //error handling -- redirects to error page if error occurs, ie: invalid path/route
    const error = useRouteError();
    console.error(error);

    //basic placeholder team page, needs css and actual team members
    return (
        <div>
            <h1>The Team:</h1>
            <h2>President: Julian Sahagun</h2>
            <p>desc: pork</p>
            <h2>Peter Bizoukas</h2>
            <p>desc: guy</p>
            <h2>Kamil Zhu</h2>
            <p>desc:N/A</p>
            <h2>Ryan Mueller</h2>
            <p>desc: locked in</p>     
            <div className="andrewCard">
                <h2>John FAANG Pork</h2>
                <img src='/images/andrewGoofy.png'/>
                <p>Locked In</p>
            </div>
            <h2>Diya Kafle</h2>
            <p>hi</p>
            <h2>Micah Najacht</h2>
            <p>desc: Badger</p>

        </div>
        

    );
}
