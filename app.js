import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

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