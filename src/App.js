import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
    const [sectionSelected, setSectionSelected] = useState("about");

    return (
        <>
            <Header sectionSelected={sectionSelected} setSectionSelected={setSectionSelected}></Header>
            <main>
                {
                    (() => {
                        if(sectionSelected === "about") {
                            return (
                                <About></About>
                            );
                        } else if(sectionSelected === "projects") {
                            return (
                                <section id="projects">
                                    <h2>Projects</h2>
                                    <div className="content project-section">
                                        <Project></Project>
                                        </div>
                                </section>
                            );
                        } else if(sectionSelected === "contact") {
                            return (
                                <ContactForm></ContactForm>
                            );
                        } else if(sectionSelected === "resume") {
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