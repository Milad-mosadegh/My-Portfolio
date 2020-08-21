import React from 'react'
import './navStyle.css'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function MyNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="dark-bg nav-dis ">
                <Navbar.Brand className="logo" >
                    <Link to="/">Milad <span>Mosadegh</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link className="links" to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="links" to="/skill">Skill</Link></Nav.Link>
                        <Nav.Link><Link className="links" to="/certificate">Certificate</Link></Nav.Link>
                        <Nav.Link><Link className="links" to="/projects">Projects</Link></Nav.Link>
                        <Nav.Link><Link className="links" to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                    <NavDropdown title="Follow Me" id="basic-nav-dropdown" className="mr-5">
                        <NavDropdown.Item className="drop-link " href="https://github.com/Milad-mosadegh" target="_blank">
                            <span className="fa fa-github"></span>
                            <span>Github</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="drop-link " href="https://www.linkedin.com/in/milad-mosadegh-1b6b9b10b/" target="_blank">
                            <span className="fa fa-linkedin"></span>
                            <span>LinkeIn</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="drop-link " href="https://www.xing.com/profile/Milad_Mosadegh" target="_blank">
                            <span className="fa fa-xing"></span>
                            <span>Xing</span>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="drop-link " href="https://www.instagram.com/miladmossadegh/" target="_blank">
                            <span className="fa fa-instagram"></span>
                            <span>Instagram</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="drop-link " href="https://www.facebook.com/milad.mosaddegh.5" target="_blank">
                            <span className="fa fa-facebook"></span>
                            <span>Facebook</span>
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Link className="links p-4 border-right" to="/followme">Follow Me</Link> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar
