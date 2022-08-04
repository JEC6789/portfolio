import React, { useState } from "react";

function Project() {
    const [projects] = useState([
        {
            name: "Run Buddy",
            link: "https://github.com/JEC6789/run-buddy",
            imageType: "light",
            collab: false,
            languages: "HTML / CSS",
            multiline: false
        },
        {
            name: "Robot Gladiators",
            link: "https://github.com/JEC6789/robot-gladiators",
            imageType: "dark",
            collab: false,
            languages: "JS / HTML",
            multiline: false
        },
        {
            name: "Password Generator",
            link: "https://github.com/JEC6789/password-generator",
            imageType: "light",
            collab: false,
            languages: "JS / CSS / HTML",
            multiline: false
        },
        {
            name: "Coding Quiz",
            link: "https://github.com/JEC6789/coding-quiz",
            imageType: "light",
            collab: false,
            languages: "JS / HTML / CSS",
            multiline: false
        },
        {
            name: "Weather Dashboard",
            link: "https://github.com/JEC6789/weather-dashboard",
            imageType: "light",
            collab: false,
            languages: "JS / CSS / HTML",
            multiline: false
        },
        {
            name: "TravelFog",
            link: "https://github.com/Auzzie1790/travelfog",
            imageType: "light",
            collab: true,
            languages: "JS / HTML",
            multiline: false
        },
        {
            name: "Chat Like It's 2010",
            link: "https://github.com/Auzzie1790/chat_like_its_2010",
            imageType: "dark",
            collab: true,
            languages: "Node / Express / WebSocket / JS",
            multiline: true
        },
        {
            name: "Poke Fight",
            link: "https://github.com/acattet/Poke-Fight-",
            imageType: "light",
            collab: true,
            languages: "MongoDB / Express / React / Node",
            multiline: true
        }
    ]);

    return (
        <>
            {projects.map((image, i) => (
                <article className={image.imageType} key={image.name}>
                    <a href={image.link}>
                        <img src={require(`../../assets/images/${i}.png`)} alt=""/>
                        <div className={!image.multiline ? ("") : ("multiline")}>{image.name}{!image.multiline ? (" ") : (<br/>)}<small>{!image.collab ? (<></>) : (<>(Collaboration) - </>)}{image.languages}</small></div>
                    </a>
                </article>
            ))}
        </>
    );
}

export default Project;