import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        TheCloudkicker &copy; {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
