import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactForm from '../ContactForm/ContactForm';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <ContactForm></ContactForm>
        </div>
    );
};

export default HomePage;