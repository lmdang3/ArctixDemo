import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './Navbar.css'; // Import the custom CSS file
// import About from '../../pages/about/about.tsx';

const AppNavbar = () => {
    return (
        <Navbar className="container-fluid hero" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" className="ml-6">Lam Dang</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link> {/* Use Link to navigate */}
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
