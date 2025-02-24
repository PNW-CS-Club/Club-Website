import React from 'react';

export default function Projects() {
    //The homepage of the PNW CS Club website
    return (
    <>
        <header></header>
        <body class=" text-center pb-8 h-screen bg-cream ">
            <h1 class="uppercase text-6xl font-title font-bold pt-8 text-dark-green tracking-wider"> projects</h1>
            <h3 class="mt-4 text-left ml-10 italic text-gray-700 font-body2">2024-2025</h3>
            <section class=" mx-10 ">
                <h2 class="text-2xl font-title font-bold pt-4">CS Club Website</h2>
                <p class="text-lg font-body pt-4 px-4">Actively creating a website for the PNW CS Club to hold information about the club, events, and projects.</p>
                <p class="font-bold">Meeting Schedule: Every Monday at 2PM in CLO 310</p>
            </section>
            <section class=" mx-10 ">
                <h2 class="text-2xl font-title font-bold pt-8">Gatekeeper Project</h2>
                <p class="text-lg font-body pt-4">Project info...</p>
            </section>
            <section class=" mx-10 ">
                <h2 class="text-2xl font-title font-bold pt-8">Duckietown Project</h2>
                <p class="text-lg font-body pt-4">Project info...</p>
            </section>
        </body>
        <footer class="h-32 bg-dark-green">
            <section>
                <h2 class="text-cream font-title text-center py-4 font-bold">PNW CS Club</h2>
            </section>
        </footer>
        
    </>
    );
}
