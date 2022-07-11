import React from "react";
import Navigation from "../Navigation";

function Header(props) {
    const {
        sectionSelected,
        setSectionSelected
    } = props;
    
    return (
        <header>
            <h1>JEC<sup>6<sub>7<sub>8<sub>9</sub></sub></sub></sup></h1>
            <Navigation sectionSelected={sectionSelected} setSectionSelected={setSectionSelected}></Navigation>
        </header>
    );
}

export default Header;