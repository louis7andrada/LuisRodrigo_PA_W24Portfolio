import React from 'react';
import './CoverLetter.css';
import { useNavigate } from 'react-router-dom';

function CoverLetter({ history }) {
    const coverLetterContent = {
        recipient: "Hiring Manager",
        company: "Leading university",
        date: "March 16, 2024",
        body: `
Dear HR Contractor,

Ever since I was young, working at a leading university has been one of my foremost aspirations. I am excited to apply for the role of Research Administrator that is currently advertised. With my tenure as a Data Analyst at the Faculty of Dentistry, University of Toronto, since 2021, and prior experience as a Research Assistant, coupled with an Advanced Diploma in Computer Programming and Analysis, I am confident in my ability to contribute significantly to your esteemed team of researchers.

In my current role at the University of Toronto, I have acquired in-depth knowledge of organizing databases for user and service data storage, and have honed my skills in developing precise, organized graphs for academic papers. My academic journey has also endowed me with robust team skills and leadership abilities, enabling me to effectively guide and organize research and personnel.

My passion lies in the realm of AI development and research, and I am keen on merging this interest with my analytical expertise to contribute to the evolving field of computer science. I am convinced that my persistent nature, combined with a methodical approach to trial, error, and outcome analysis, equips me well to fulfill the responsibilities of the Research Administrator role.

I appreciate your time and consideration and am enthusiastic about the possibility of contributing to your university’s research endeavors. I look forward to discussing how my goals and skills align with the expectations of this position, as well as understanding the university's vision and aspirations.

Please feel free to contact me at (437)996-3911 or luis.andrada@utoronto.ca for any further information or to arrange a meeting.

Best regards,

Louis Andrada
    `
    };
    const navigate = useNavigate();
    return (
        <section className="cover-letter">
            <h2>Cover Letter</h2>
            <address>
                {coverLetterContent.recipient}<br />
                {coverLetterContent.company}<br />
                {coverLetterContent.date}
            </address>
            <pre>{coverLetterContent.body}</pre>
            <button className="nav-btn" onClick={() => navigate('/')}>Back to Home page</button>
        </section>
    );
}

export default CoverLetter;
