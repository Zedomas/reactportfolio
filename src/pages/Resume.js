import React from 'react'
import Container from 'react-bootstrap/Container';

function Resume(props) {
    return(
        <Container fluid={false}>
            <h2>Resume</h2>
            <iframe src="https://resume.creddle.io/embed/fest79r81oh" width="850" height="1100" seamless></iframe>
        </Container>

    )
}

export default Resume