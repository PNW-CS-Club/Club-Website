import React from 'react';

export default function Projects() {
    //The homepage of the PNW CS Club website
    return (
    <>
        <header></header>
        <body class=" text-center pb-8 h-screen">
            <h1 class="uppercase text-4xl font-title font-bold pt-8 tracking-wider"> projects</h1>
            <h3 class="mt-4 text-left ml-10 italic text-gray-700 font-body2">2024-2025</h3>
            <section class="bg-alice-blue mx-10 ">
                <h2 class="text-2xl font-title font-bold pt-4">CS Club Website</h2>
                <p class="text-lg font-body pt-4 px-4">Actively creating a website for the PNW CS Club to hold information about the club, events, and projects.</p>
                <p>Meeting Schedule: Every Thursday at 11AM in CLO 109</p>
            </section>
            <section class="bg-alice-blue mx-10 ">
                <h2 class="text-2xl font-title font-bold pt-8">Gatekeeper Project</h2>
                <p class="text-lg font-body pt-4">Project info...</p>
            </section>
            <section class="bg-alice-blue mx-10 ">
                <h2 class="text-2xl font-title font-bold pt-8">Duckietown Project</h2>
                <p class="text-lg font-body pt-4">Project info...</p>
            </section>
        </body>
        <footer class="h-32 bg-black">
            <section>
                <h2 class="text-gold font-title text-center py-4 font-bold">PNW CS Club</h2>
            </section>
        </footer>
        
    </>
    );
}
