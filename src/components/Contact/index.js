import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers.js";

function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        if(e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                if(!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage("");
                }
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
        console.log("errorMessage", errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h2>Contact</h2>
            <div className="content">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" data-testid="submit">Submit</button>
                </form>
                <div className="hatnote">The bootcamp assignment where I need to convert my portfolio to React also requires that I put a contact section in here. However, it does not require this section to be functional for the time being. If you actually want to contact me for any reason, feel free to use one of the links in the footer.</div>
            </div>
        </section>
    );
}

export default ContactForm;