import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Github from '../assets/icons/github.png'
import Linkedin from '../assets/icons/linkedin.png'
import Contact from '../assets/icons/contact.png'

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-center p-3">
                    <a href="https://www.linkedin.com/in/robertposton91/" target="_blank" rel="noopener noreferrer"><img className="footer-links" src={Linkedin}></img></a>
                    <a href="www.github.com/zedomas" target="_blank" rel="noopener noreferrer"> <img className="footer-links" src={Github}></img></a>
                    <a href="mailto:robertallenposton@gmail.com" target="_blank" rel="noopener noreferrer"> <img className="footer-links" src={Contact}></img></a>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer