import React from 'react';
import { FaEnvelope, FaDiscord, FaGlobe } from 'react-icons/fa'; 


//mypnwlife page - https://mypnwlife.pnw.edu/feeds?type=club&type_id=35477
//discord - https://discord.gg/Xf5VQyqbbs  -- never exipre, no limit
//email (club president) - jasahagun@pnw.edu (i think)

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-title">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Contact Us
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 text-center font-body">
                    For more information or if you have any questions, please contact us at:
                </p>

                <ul className="space-y-6 font-body">
                    <li className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors">
                        <FaEnvelope className="text-2xl text-blue-500" />
                        <span className="text-gray-700">Email: </span>
                        <a href="mailto:jasahagun@pnw.edu" 
                           className="text-blue-600 hover:text-blue-800 hover:underline">
                            jasahagun@pnw.edu
                        </a>
                    </li>

                    <li className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors font-body">
                        <FaDiscord className="text-2xl text-indigo-500" />
                        <span className="text-gray-700">Discord: </span>
                        <a href="https://discord.gg/Xf5VQyqbbs" 
                           className="text-indigo-600 hover:text-indigo-800 hover:underline"
                           target="_blank" 
                           rel="noopener noreferrer">
                            PNW Computer Science Club
                        </a>
                    </li>

                    <li className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors font-body">
                        <FaGlobe className="text-2xl text-green-500" />
                        <span className="text-gray-700">MyPNWLife: </span>
                        <a href="https://mypnwlife.pnw.edu/feeds?type=club&type_id=35477" 
                           className="text-green-600 hover:text-green-800 hover:underline"
                           target="_blank" 
                           rel="noopener noreferrer">
                            MyPNWLife Page
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}