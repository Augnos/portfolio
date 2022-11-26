import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



export default function Home() {
  return (
    <Container fluid className='my-auto text-center justify-content-evenly flex-column'>

      <Row className=''>
        <h1>Hi, I'm <span className='text-royal'>Josh Valdez</span>.</h1>
        <h4 className='text-indigo fw-light'>Full-stack Web Developer</h4>
        <h5 className='text-indigo fw-light'>San Francisco</h5>
      </Row>
      <Row className="row d-lg-none d-flex text-center">
        <Col as={NavLink} className="btn btn-royal text-lavender m-1" to="/about">About</Col>
        <Col as={NavLink} className="btn btn-royal text-lavender m-1" to="/skills">Skills</Col>
      </Row>
      <Row className="row d-lg-none d-flex text-center">
        <Col as={NavLink} className="btn btn-royal text-lavender m-1" to="/projects">Projects</Col>
        <Col as={NavLink} className="btn btn-royal text-lavender m-1" to="/challenges">Challenges</Col>
      </Row>


    </Container>
  )
}
