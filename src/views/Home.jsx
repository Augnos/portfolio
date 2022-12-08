import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <Container fluid className='my-auto py-3'>
      <Row className='text-start align-items-center justify-content-evenly mb-3'>
        {/* Image Column */}
        <Col xs={10} lg={4} className="d-flex justify-content-center">
          <img className='profile-pic img img-fluid' alt="Joshua Valdez" src='images/augnos_dev.jpeg' />
        </Col>

        {/* Bio Column */}
        <Col xs={10} lg={6} >
          <div className='text-center text-lg-start my-3'>
            <h1>Hi, I'm <span className='text-royal'>Josh Valdez</span>.</h1>
            <h4 className='text-indigo fw-light'>Software Developer & Audio Engineer</h4>
          </div>
          <div className=''>
            <p>I'm a web devoloper with a strong background in audio engineering and operations management. I code in <strong>JavaScript</strong>, <strong>C#</strong>, and <strong>Python</strong>.</p>
            <p>I have 14 years of problem solving experience, with past roles in semiconductor manufacturing, nuclear power, and most recently audio and education.</p>
            <p>I'm a lifelong creative, and passionate about coding. I'm particularly interested in building for audio and music, photography, and visual media.</p>
            <p>When I'm not coding, you can find me <a href='https://augnos.com' target='_blank'>taking pictures</a> at a show, or <a href='https://augnos.bandcamp.com' target='_blank'>making vaporwave music</a>.</p>
          </div>
        </Col>
      </Row>
      <Row className="row d-flex justify-content-center text-center">
        <Col xs={10} lg={6} as={NavLink} className="btn btn-royal text-white mb-3" to="/projects">Check out my projects!</Col>
      </Row>
      <Row className="row d-flex justify-content-center text-center">
        <Col xs={10} lg={6} as={NavLink} className="btn btn-orchid text-white" to="/challenges">Play with the Coding Challenges!</Col>
      </Row>
    </Container>
  )
}
