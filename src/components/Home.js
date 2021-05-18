import React from "react";
import { Link } from 'react-router-dom';
import "../Home.css";


function Home () {
    return (
        <div className="header">
        <ul>
            <li><Link to="/" style={{textDecoration: 'none'}}>Home</Link></li>
            <li><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li>
            <li>Contact</li>
            <li>Projects</li>
        </ul>


        <div>
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
        </div>
    )
}

export default Home;