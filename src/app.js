import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css'
const App = () => {
    const [currentSection, setCurrentSection] = useState('About Me');

    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    const handleNavigationClick = (section) => {
    setCurrentSection(section);
    };

    return (
        <div>
            <Header />
            <nav>
                {sections.map((section) => (
                    <button
                    key={section}
                    onClick={() => handleNavigationClick(section)}
                    className={currentSection === section ? 'active' : ''}
                    >
                        {section}
                    </button>
                ))}
            </nav>
            {currentSection === 'About Me' && <AboutMe />}
            {currentSection === 'Portfolio' && <Portfolio />}
            {currentSection === 'Contact' && <Contact />}
            <Footer />
        </div>
    );
};

export default App;