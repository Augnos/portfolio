import React from 'react';
import { Col } from 'react-bootstrap';

export default function ChallengeIndex() {
    return (
        <Col xl={10} lg={9} className="w-75 my-auto mx-auto">
            <h1>Coding Challenges</h1>
            <h3>Here are some commonly asked coding challenges and algorithms,</h3>
            <h3>solved with <span className='text-orchid fw-bold'>JavaScript</span> and displayed with <span className='text-primary fw-bold'>React</span> and <span className='text-royal fw-bold'>Bootstrap</span>.</h3>
        </Col>
    )
}
