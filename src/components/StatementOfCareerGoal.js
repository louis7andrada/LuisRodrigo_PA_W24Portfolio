import React from 'react';
import './StatementOfCareerGoal.css';

function StatementOfCareerGoal({ history }) {
    const statement = "I am dedicated to leveraging my skills in computer science and acting to create innovative, user-centric solutions. My goal is to work at the intersection of technology and entertainment, developing software that enhances storytelling and audience engagement.";

    return (
        <section className="statement-of-career-goal">
            <h1>Statement of Career Goal</h1>
            <p>{statement}</p>
            <button className="nav-btn" onClick={() => history.push('/')}>Back to Home</button>
        </section>
    );
}

export default StatementOfCareerGoal;
