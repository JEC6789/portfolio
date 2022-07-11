import React from "react";

function Navigation(props) {
    const {
        setSectionSelected
    } = props;

    return (
        <nav>
            <ul>
                <li><a href="#about-me" onClick={() => setSectionSelected("about")}>About Me</a></li>
                <li><a href="#projects" onClick={() => setSectionSelected("projects")}>Projects</a></li>
                <li><a href="#contact-me" onClick={() => setSectionSelected("contact")}>Contact Me</a></li>
                <li><a href="#resume" onClick={() => setSectionSelected("resume")}>Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;