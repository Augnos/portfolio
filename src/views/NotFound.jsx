import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function NotFound() {
    return (
        <Container fluid className='my-auto text-center'>
            <Row className='h-100 align-items-center'>
                <Col className=''>
                    <h1 className='text-purple' style={{fontSize: "15rem"}}>404</h1>
                    <p>Route not found :(</p>
                </Col>
            </Row>
        </Container>
    )
}
