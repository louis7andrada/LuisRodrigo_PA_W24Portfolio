import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bio.css';

import profilePicture from '../images/IMG_8777.jpeg'; //

function Bio() {
    const bioData = {
        name: "Louis Andrada",
        location: "Toronto, ON",
        bio: "Data Analyst at the Faculty of Dentistry at the University of Toronto. With a career beginning in 2021 as a Research Assistant, Louis quickly advanced to his current position through dedication and skill. Passionate about the potential of artificial intelligence, he aspires to blend his expertise in data analysis with AI research and development. Embodying persistence and a firm believer in the power of trial, error, and outcome analysis, Louis is committed to achieving his dreams and encourages others to believe in their own potential.",
        interests: "Interests include machine learning, Data analysis, theater, and music composition."
    };

    const navigate = useNavigate();

    return (
        <section className="bio">
            <img src={profilePicture} alt="Louis Andrada" className="bio-image" />
            <h1>{bioData.name}</h1>
            <p><strong>Location:</strong> {bioData.location}</p>
            <p>{bioData.bio}</p>
            <p><strong>Interests:</strong> {bioData.interests}</p>
        </section>
    );
}

export default Bio;
