    import { useState, useEffect, React } from "react";
    import { Navbar, Nav, Container } from "react-bootstrap";
    import { HashLink } from 'react-router-hash-link';

    import { BrowserRouter as Router, useNavigate, Link } from "react-router-dom";
    import logo from "../assets/img/logo.png";
    export const NavBar = () => {
        const [activeLink, setActiveLink] = useState('inicio');
        const [scrolled, setScrolled] = useState(false);


        const onUpdateActiveLink = (value) => {
            setActiveLink(value);
            window.scrollTo(0, 0)
        }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Brand href="/">
                <img id="logo-img" src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Link to="/"><Nav.Link href="#inicio" className={activeLink === 'Inicio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('inicio')}>Inicio</Nav.Link></Link>
                <Link to="/Productos"><Nav.Link href="#productos" className={activeLink === 'Productos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('productos')}>Productos</Nav.Link></Link>
                <Link to="/Nosotros"><Nav.Link href="#maquinas" className={activeLink === 'Maquinas' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('maquinas')}>Sobre Nosotros</Nav.Link></Link>
                <Link to="/Actividad"><Nav.Link href="#actividad" className={activeLink === 'Actividad' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('actividad')}>Actividad</Nav.Link></Link>

                </Nav>
                <span className="navbar-text">
                <HashLink to='/Contacto'>
                    <button className="vvd"><span>Contactanos!</span></button>
                </HashLink>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    }