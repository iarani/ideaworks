import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import tiwlogo from '../images/TIW-Final-Logo.png';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Container >
                <Navbar collapseOnSelect expand="lg" style={{paddingLeft:'0', paddingRight: '0'}}>
                <Navbar.Brand href="/"><img src = { tiwlogo } width='200' alt='Logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link eventKey={1} href="/about" style={styles.navitem}>story</Nav.Link>
                    <Nav.Link eventKey={2} href="/contact" style={styles.navitem}>contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Container>

            
        )
    }
}

const styles = {
    navitem: {
        color: '#333333',
        fontSize: '1.75rem', fontWeight: '500',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    },
};