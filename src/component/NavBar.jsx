import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import xingIcon from '../assets/img/xing-icon.svg'
import githubIcon from '../assets/img/github-icon-1.svg'

const NavBar = () => {
    // useState = for variables and reactivity
    // useEffect = for conditional rendering and function calling 
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const sendEmail = () => {

    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/" className="logo-name">
                    <span className="name">
                        <span className="special-letter">C</span>arsten
                        <span className="special-letter"> H</span>öschele
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.xing.com/profile/Carsten_Hoeschele2/cv" target="_blank" rel="noreferrer"><img src={xingIcon} alt="" /></a>
                            <a href="https://github.com/carshoesch" target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                        </div>
                        <a to='#connect' href="mailto:carshoesch@gmail.com" className="navbar-connect-btn" onClick={sendEmail}>
                            <span>Email versenden</span>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar