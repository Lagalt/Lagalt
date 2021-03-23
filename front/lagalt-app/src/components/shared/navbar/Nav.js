import React from 'react'
import './StyleNav.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="navbar">
        <Link to="/">
        <h1 id="lagalt">Lagalt</h1>
        </Link>
        <ul className="nav-links">
            <Link to="/profile">
                <li id="li">Profile</li>
            </Link>
            <Link to="/projects">
                <li id="li">My Projects</li>
            </Link>
            <Link to="/chat">
                <li id="li">Chat</li>
            </Link>
            <Link to="login">
              <button>login</button>
            </Link>
        </ul>
    </div>
  );
}

export default About;