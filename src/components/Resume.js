import React from 'react';
import './Resume.css';
import { useNavigate } from 'react-router-dom';

function Resume() {
    const navigate = useNavigate();

    const resumeSections = [
        {
            title: 'Education',
            content: `● ADVANCED DIPLOMA IN COMPUTER PROGRAMMING AND ANALYSIS — George Brown College. 2021 - 2024`
        },
        {
            title: 'Work Experience',
            content: `● RESEARCH ASSISTANT — UNIVERSITY OF TORONTO, FACULTY OF DENTISTRY - 2021 - 2023
● DATA ANALYST — UNIVERSITY OF TORONTO, FACULTY OF DENTISTRY - 2023 - Present`
        },
        {
            title: 'Skills',
            content: `● Programming Languages: Typescript, JAVA, Python, JavaScript, C#, MySQL and, SQL, IBM SPSS Syntax,
              Swift, 
● Professional: Data analysis, Database management, Software development, Graphic and Web design, 
                Photo and Video editing, Site and Social media management
● Interpersonal: Excellent coworker communication; Detail-oriented; Quickly adaptable to fast-paced 
                 and changing environments; Rapid critical thinking
● Software: IntelliJ, IBM SPSS, MongoDB, RedCap, Postman, Android Studio, Xcode, WebStorm, Pycharm,
            Adobe Photoshop, Illustrator and Lightroom, Visual Studio`
        },
        // Add more sections as needed
    ];

    return (
        <section className="resume">
            <h1>Resume</h1>
            {resumeSections.map((section, index) => (
                <div key={index} className="resume-section">
                    <h2>{section.title}</h2>
                    <pre>{section.content}</pre> {/* Use <pre> to preserve line breaks and white spaces */}
                </div>
            ))}
            <button className="nav-btn" onClick={() => navigate('/')}>Back to Home page</button>
        </section>
    );
}

export default Resume;
