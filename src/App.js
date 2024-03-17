import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Bio from './components/Bio';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import AcademicCredentials from './components/AcademicCredentials';
import AcademicWork from './components/AcademicWork';
import ProfessionalSummary from './components/ProfessionalSummary';
import StatementOfCareerGoal from './components/StatementOfCareerGoal';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <Router>
        <div className="app">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Bio />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/cover-letter" element={<CoverLetter />} />
              <Route path="/academic-credentials" element={<AcademicCredentials />} />
              <Route path="/academic-work" element={<AcademicWork />} />
              <Route path="/professional-summary" element={<ProfessionalSummary />} />
              <Route path="/statement-of-career-goal" element={<StatementOfCareerGoal />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
