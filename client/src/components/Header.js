import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>CIA File Redacter</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/files">
                                <Nav.Link>
                                    <i className="fas fa-book" /> Files
                        </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;