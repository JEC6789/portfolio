import React from "react";
import Navigation from "../Navigation";

function Header(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;
    
    return (
        <header>
            <h1>JEC<sup>6<sub>7<sub>8<sub>9</sub></sub></sub></sup></h1>
            <Navigation contactSelected={contactSelected} setContactSelected={setContactSelected}></Navigation>
        </header>
    );
}

export default Header;