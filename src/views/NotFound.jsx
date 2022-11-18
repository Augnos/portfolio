import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function NotFound() {
    return (
        <Container fluid className='vh-fill bg-lavender text-midnight bg-gradient'>
            <Row className='h-100 align-items-center'>
                <Col className=''>
                    <h1 className='text-purple' style={{fontSize: "15rem"}}>404</h1>
                    <p>Route not found :(</p>
                </Col>
            </Row>
        </Container>
    )
}
