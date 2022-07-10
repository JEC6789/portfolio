import React, { useState } from "react";

function Project() {
    const [projects] = useState([
        {
            name: "Robot Gladiators",
            imageType: "dark",
            collab: false,
            languages: "JS / HTML"
        }
    ]);

    return (
        <article className="dark">
            <a href="https://github.com/JEC6789/robot-gladiators">
                <img src={require(`./assets/images/robot-gladiators.png`)} alt=""/>
                <div>Robot Gladiators <small>JS / HTML</small></div>
            </a>
        </article>
    );
}

export default Project;