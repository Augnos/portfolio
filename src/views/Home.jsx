import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <Container fluid className='vh-fill bg-lavender text-midnight bg-gradient'>
            <Row className='h-100 align-items-center'>
                <Col className=''>
                    <h1>Hi, I'm <span className='text-midnight'>Josh Valdez</span>.</h1>
                    <h4 className='text-indigo fw-light'>Software Developer & Audio Engineer</h4>
                </Col>
            </Row>
        </Container>
    )
}
