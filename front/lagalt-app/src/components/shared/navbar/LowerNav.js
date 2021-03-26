import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from 'react-bootstrap'
import './StyleNav.css'


function LowerNav() {
    return (
        <div>
            <Nav text-center fill variant="tabs" defaultActiveKey="all">
                <Nav.Item>
                    <Nav.Link className="navLink" eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" eventKey="programming">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" eventKey="movies-art">Movies and Art</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" eventKey="music">Music</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" eventKey="other">Other</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default LowerNav;