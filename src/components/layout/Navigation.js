import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import FadeIn from "react-fade-in";

const Navigation = () => {
    return (
        <FadeIn>
            <Container className="container-nav">
                <Navbar bg="dark" variant="dark rounded" expand="sm">
                    <NavLink to="/" exact>
                        <Navbar.Brand>
                            <div className="logoScale">
                                <img
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="logo"
                                />
                            </div>
                            <i></i>
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="/" exact className="nav-link rounded">
                                <i className="i-home"></i>
                                <span>Games</span>
                            </NavLink>
                        </Nav>
                        <Nav className="ml-auto">
                            <NavLink to="/contact" className="nav-link rounded">
                                <i className="i-contact"></i>
                                <span>Contact</span>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </FadeIn>
    );
};

export default Navigation;
