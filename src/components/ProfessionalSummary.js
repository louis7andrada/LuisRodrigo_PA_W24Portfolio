import React from 'react';
import './ProfessionalSummary.css';
import { useNavigate } from 'react-router-dom';

function ProfessionalSummary({ history }) {
    const professionalSummary = {
        title: "Professional Summary",
        content: "Louis Andrada is an accomplished Data Analyst at the Faculty of Dentistry, University of Toronto, boasting a proven track record of rapid progression from Research Assistant to Data Analyst since 2021. With a fervent aspiration to delve into and contribute to the field of artificial intelligence, he seeks to amalgamate his extensive data analysis expertise with the dynamic domain of computer science. Louis epitomizes persistence, embracing a meticulous approach to trial, error, and outcome analysis, underscoring a steadfast belief in self-efficacy. His journey reflects a committed pursuit of excellence and a passionate vision for harnessing data-driven insights to pioneer advancements in AI research and development."
    };
    const navigate = useNavigate();
    return (
        <section className="professional-summary">
            <h2>{professionalSummary.title}</h2>
            <p>{professionalSummary.content}</p>
            <button className="nav-btn" onClick={() => navigate('/')}>Back to Home page</button>
        </section>
    );
}

export default ProfessionalSummary;
