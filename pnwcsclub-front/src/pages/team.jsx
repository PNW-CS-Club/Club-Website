import React from 'react';
import { useRouteError } from "react-router-dom";
import '/src/styles_pages/team.css';
import TeamCard from '/src/components/TeamCard';

export default function Team() {
    //error handling -- redirects to error page if error occurs, ie: invalid path/route
    const error = useRouteError();
    console.error(error);

    const teamMembers = [
        { name: "Julian Sahagun", role: "President", about: "Leading the team with a vision for the future." },
        { name: "Peter Bizoukas", },
        { name: "Kamil Zhu", },
        { name: "Ryan Mueller", role: "FAANG Co-Leader", },
        { name: "Andrew McDowell", role:"FAANG Leader", img: "/images/andrewGoofy.png" },
        { name: "Diya Kafle", },
        { name: "Micah Najacht", }
    ];

    return (
        <div className="team-section">
            <h2 className="section-title">Our Team</h2>
            <div className="div--cards">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
}
