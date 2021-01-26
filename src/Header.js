import React from "react";
import "./Header.css"

function Header () {
    return (
        <div className="header">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
        </ul>



        <div className="header-text">
        <h2>Nicholas Esquilo Torres</h2>
        <h4>Full Stack Web Developer</h4>
        </div>

        <img id="headShot" alt ="header" src="\81776047_10221697260410574_8313677635481763840_n.jpg" />

        <div className="header-intro">
        <p>Hello! Thanks for checking out my portfolio.</p>
        <p>I am web developer based out of Tampa, Florida and have a passion for computers</p>
        </div>



        </div>

    )
}


export default Header;
