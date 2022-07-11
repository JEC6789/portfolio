import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
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
                                <About></About>
                            );
                        } else if(contactSelected === "projects") {
                            return (
                                <section id="projects">
                                    <h2>Projects</h2>
                                    <div className="content project-section">
                                        <Project></Project>
                                        </div>
                                </section>
                            );
                        } else if(contactSelected === "contact") {
                            return (
                                <ContactForm></ContactForm>
                            );
                        } else if(contactSelected === "resume") {
                            return (
                                <Resume></Resume>
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