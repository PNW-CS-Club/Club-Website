import React from 'react';
import { useRouteError } from "react-router-dom";
import '/src/styles_pages/team.css';
import TeamCard from '/src/components/TeamCard';


export default function Team() {
    //error handling -- redirects to error page if error occurs, ie: invalid path/route
    const error = useRouteError();
    console.error(error);

    //basic placeholder team page, needs css and actual team members
    return (
        <div className="team-section">
            <h1 className='h1--team'>The Team🤖🎉</h1>
            <div className="div--cards">
                <TeamCard name="Julian Sahagun" role="President" about="About: pork fr" />
                <TeamCard name="Peter Bizoukas" about="About: guy" />
                <TeamCard name="Kamil Zhu" about="About: N/A" />
                <TeamCard name="Ryan Mueller" about="About: locked in" />
                <TeamCard name="Andrew McDowell" about="About: locked in" img="/images/andrewGoofy.png" />
                <TeamCard name="Diya Kafle" about="About: hi" />
                <TeamCard name="Micah Najacht" about="About: Badger" />
            </div>
        </div>
        

    );
}
