import React from 'react';
import './AcademicCredentials.css';
import { useNavigate } from 'react-router-dom';

function AcademicCredentials({ history }) {
    const credentials = [
        {
            degree: 'Advanced diploma in Computer Programming and Analysis',
            institution: 'George Brown College',
            year: '2024',
            details: 'Specialization in Data Analysis'
        },
    ];
    const navigate = useNavigate();
    return (
        <section className="academic-credentials">
            <h2>Academic Credentials</h2>
            <ul>
                {credentials.map((credential, index) => (
                    <li key={index}>
                        <strong>{credential.degree}</strong> - {credential.institution} ({credential.year})
                        <p>{credential.details}</p>
                    </li>
                ))}
            </ul>
            <button className="nav-btn" onClick={() => navigate('/')}>Back to Home page</button>
        </section>
    );
}

export default AcademicCredentials;
