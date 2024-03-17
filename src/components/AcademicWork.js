import React from 'react';
import './AcademicWork.css';
import { useNavigate } from 'react-router-dom';

function AcademicWork({ history }) {
    const projects = [
        {
            title: 'JoTrack - Job searching and AI resume building website',
            description: 'An interactive web application for searching and applying to vast options of jobs with the help of AI.',
            technologies: ['TypeScript', 'TailWind CSS', 'OpenAI API'],
        },
    ];
    const navigate = useNavigate();
    return (
        <section className="academic-work">
            <h2>Academic Work Experience</h2>
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Technologies Used: {project.technologies.join(', ')}</p>
                </div>
            ))}
            <button className="nav-btn" onClick={() => navigate('/')}>Back to Home page</button>
        </section>
    );
}

export default AcademicWork;
