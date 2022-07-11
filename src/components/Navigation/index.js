import React from "react";

function Navigation(props) {
    const {
        setContactSelected
    } = props;

    return (
        <nav>
            <ul>
                <li><a href="#about-me" onClick={() => setContactSelected("about")}>About Me</a></li>
                <li><a href="#projects" onClick={() => setContactSelected("projects")}>Projects</a></li>
                <li><a href="#contact-me" onClick={() => setContactSelected("contact")}>Contact Me</a></li>
                <li><a href="#resume" onClick={() => setContactSelected("resume")}>Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;