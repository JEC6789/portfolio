import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [contactSelected, setContactSelected] = useState("about");

    return (
        <>
            <Header contactSelected={contactSelected} setContactSelected={setContactSelected}></Header>
            <main>
                {
                    (() => {
                        if(contactSelected === "about") {
                            return (
                                <>
                                    <section className="infobox">
                                        <img src={require(`./assets/images/profile.png`)} width="150" alt="The profile picture that JEC6789 uses in most places nowadays" />
                                        <table className="rows">
                                            <tbody>
                                                <tr>
                                                    <th>Name</th>
                                                    <td>Jonathan Cushing</td>
                                                </tr>
                                                <tr>
                                                    <th>Birth Date</th>
                                                    <td>January 14, 2002</td>
                                                </tr>
                                                <tr>
                                                    <th>Languages</th>
                                                    <td>English: 5/5<br/>HTML: 2/5<br/>CSS: 1/5<br/>JavaScript: 0.5/5<br/>C++: 0/5<br/>Spanish: 0/5</td>
                                                </tr>
                                                <tr>
                                                    <th>Places I've worked</th>
                                                    <td>None (yet)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </section>
                                    <section id="about-me">
                                        <h2>About Me</h2>
                                        <div className="content">
                                            <h3>The Now Now</h3>
                                            <p>Sup everyone. I'm currently taking a coding bootcamp to learn more about web development and reinforce the skills in HTML and CSS I already have, and all the projects listed below were created as part of the bootcamp. Once that's over in August, I'll hopefully have the required skills to become a web developer for whoever might be interested in me.</p>
                                            <p>So you might be wondering how I got here. Let's talk about that.</p>
                                            <h3>How I Got Here</h3>
                                            <div className="hatnote">This section is a work in progress.</div>
                                            <p>Starting off with when I was five or six years old, my parents told me I had been diagnosed with autism, though I had no idea what this meant at the time and I more or less forgot about it for a good while. In the meantime, I built up a large collection of <a href="https://en.wikipedia.org/wiki/Webkinz">Webkinz</a> and Lego sets, played some flash games that I came across online, and had an unending passion for anything related to weather.</p>
                                            <p>On December 31, 2012, I did not yet realize it, but the course of my life was about to change forever. A ton of people were invited over to our house to celebrate New Year's Eve as per usual, but someone brought their laptop over and was playing <i>Minecraft</i> on it. As the kind of person who's never enjoyed parties, I decided to watch what this person was doing. They had a world opened up that was completely flat, barring a hole that was dug in the ground and a black, rectangular frame with some swirly purple substance inside of it. During their time at my house, they made the aforementioned hole larger, placed down <a href="https://minecraft.fandom.com/wiki/Redstone_Dust">some red dust</a> that I initially thought was blood, built a basic trap and tested it out, and at one point they went into the purple swirly stuff and were transported to <a href="https://images.wikia.com/minecraft_gamepedia/images/archive/1/11/20170430193114%21Nether.png">a rather hellish landscape</a>.</p>
                                            <p><i>Minecraft</i> was a clear step up from building Lego sets. Whereas the creativity provided by Lego sets is limited by the physical space around you as well as the number of Lego pieces you got in any given set, <i>Minecraft</i> provides infinite worlds that are only limited by the amount of storage space on your device. I slowly lost interest in Lego sets, and I got <i>Minecraft</i> for my birthday in 2014. When I had to choose a username to use in the game, I just put in my initials followed by a random string of numbers, which is where JEC6789 came from.</p>
                                            <p>Looking for more information on the many quirks of the game, I came across the <a href="https://minecraft.fandom.com/wiki/Minecraft_Wiki">Minecraft Wiki</a>, where I was able to find this information and more over the next several months. At one point however, I came across an article that had one small detail that was incorrect, and as such, I made my first edit to the site. After this first edit, </p>
                                        </div>
                                    </section>
                                </>
                            );
                        } else if(contactSelected === "projects") {
                            return (
                                <section id="projects">
                                    <h2>Projects</h2>
                                    <div className="content project-section">
                                        <article className="light">
                                            <a href="https://github.com/JEC6789/run-buddy">
                                                <img src={require(`./assets/images/run-buddy.jpg`)} alt=""/>
                                                <div>Run Buddy <small>HTML / CSS</small></div>
                                            </a>
                                        </article>
                                        <article className="dark">
                                            <a href="https://github.com/JEC6789/robot-gladiators">
                                                <img src={require(`./assets/images/robot-gladiators.png`)} alt=""/>
                                                <div>Robot Gladiators <small>JS / HTML</small></div>
                                            </a>
                                        </article>
                                        <article className="light">
                                            <a href="https://github.com/JEC6789/password-generator">
                                                <img src={require(`./assets/images/password-generator.png`)} alt=""/>
                                                <div>Password Generator <small>JS / CSS / HTML</small></div>
                                            </a>
                                        </article>
                                        <article className="light">
                                            <a href="https://github.com/JEC6789/coding-quiz">
                                                <img src={require(`./assets/images/coding-quiz.png`)} alt=""/>
                                                <div>Coding Quiz <small>JS / HTML / CSS</small></div>
                                            </a>
                                        </article>
                                        <article className="light">
                                            <a href="https://github.com/JEC6789/weather-dashboard">
                                                <img src={require(`./assets/images/weather-dashboard.png`)} alt=""/>
                                                <div>Weather Dashboard <small>JS / CSS / HTML</small></div>
                                            </a>
                                        </article>
                                        <article className="light">
                                            <a href="https://github.com/Auzzie1790/travelfog">
                                                <img src={require(`./assets/images/travelfog.png`)} alt=""/>
                                                <div>TravelFog <small>(Collaboration) - JS / HTML</small></div>
                                            </a>
                                        </article>
                                        <article className="dark">
                                            <a href="https://github.com/Auzzie1790/chat_like_its_2010">
                                                <img src={require(`./assets/images/chat-like-it's-2010.png`)} alt=""/>
                                                <div className="multiline">Chat Like It's 2010<br/><small>(Collaboration) - Node / Express / WebSocket / JS</small></div>
                                            </a>
                                        </article>
                                    </div>
                                </section>
                            );
                        } else if(contactSelected === "contact") {
                            return (
                                <section>contact section</section>
                            );
                        }
                    })()
                }
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;