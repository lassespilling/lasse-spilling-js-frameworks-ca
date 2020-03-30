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
                <Navbar
                    bg="dark"
                    variant="dark rounded"
                    expand="sm"
                    fixed="top"
                >
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
                        <Nav className="mx-auto">
                            <NavLink
                                to="/"
                                exact
                                className="nav-link rounded d-flex"
                            >
                                <i className="i-home mr-3 mt-1 h4"></i>
                                <span className="h4">Games</span>
                            </NavLink>
                        </Nav>
                        <Nav className="mx-auto">
                            <NavLink
                                to="/contact"
                                className="nav-link rounded d-flex"
                            >
                                <i className="i-contact mr-3 mt-1 h4"></i>
                                <span className="h4">Contact</span>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </FadeIn>
    );
};

export default Navigation;
