import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import About from './About';

const SwitchView = ({ view }) => {
    switch (view) {
        case 'Experience':
            return (
                <Experience/>
            );
        case 'Education':
            return (
                <Education/>
            );
        case 'Skills':
            return (
                <Skills/>
            );
        case 'About Me':
            return (
                <About/>
            );
        default:
            return ;
    }
};

export default SwitchView;