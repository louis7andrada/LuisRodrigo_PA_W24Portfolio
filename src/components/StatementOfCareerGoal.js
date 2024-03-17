import React from 'react';
import './StatementOfCareerGoal.css';
import { useNavigate } from 'react-router-dom';

function StatementOfCareerGoal({ history }) {
    const statement = "As a Data Analyst at the Faculty of Dentistry at the University of Toronto, my journey from Research Assistant to my current role since 2021 has been driven by a persistent pursuit of innovation. With a steadfast belief in the power of analysis and a passion for artificial intelligence, I aim to fuse my expertise in data analysis with AI to revolutionize the field of computer science. My commitment to constant growth is fueled by a philosophy that embraces persistence, rigorous trial and error, and reflective outcome analysis. It's this foundation that I rely on to reach new heights in my career and support the advancement of technology in transformative ways."
    const navigate = useNavigate();
    return (
        <section className="statement-of-career-goal">
            <h1>Statement of Career Goal</h1>
            <p>{statement}</p>
            <button className="nav-btn" onClick={() => navigate('/')}>Back to Home page</button>
        </section>
    );
}

export default StatementOfCareerGoal;
