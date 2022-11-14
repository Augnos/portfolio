import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
            <Row className='h-100 align-items-center'>
                <Col className=''>
                    <h1>Hi, I'm <span className='font-purple'>Josh Valdez</span>.</h1>
                    <h4 className='font-blue fw-light'>Software Developer & Audio Engineer</h4>
                </Col>
            </Row>
    )
}
