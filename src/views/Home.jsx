import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <Container fluid className='my-auto py-3'>
      <Row className='text-start align-items-center justify-content-evenly mb-3'>
        {/* Image Column */}
        <Col xs={6} lg={3} className="d-flex justify-content-center">
          <img className='profile-pic img img-fluid' alt="Joshua Valdez" src='images/augnos_dev.jpg' />
        </Col>

        {/* Bio Column */}
        <Col xs={10} lg={6} >
          <div className='text-center text-lg-start my-3'>
            <h1>Hi, I'm <span className='text-royal'>Josh Valdez</span>.</h1>
            <h4 className='text-indigo fw-light'>Sound Engineer & Audio Programmer</h4>
          </div>
          <div className=''>
            <p>I've been working professionally in studio environments since 2018, primarily as recording and audio engineer for dialog and voiceover post-production. During that time, I was also the studio and facilities manager, and provided music education and training for students in recording studio environments.</p>
            <p>Since 2022, I've added programming to my skills by attending Coding Dojo web development bootcamp in San Jose. I code in <strong>C++</strong>, and <strong>Python</strong>, but I'm also familiar with <strong>JavaScript</strong> and <strong>C#</strong> for full-stack web development. Currently, I'm continuing to expand my C++ knowledge by building audio plug-ins and software with the <strong>JUCE</strong> framework.</p>
            <p>Prior to building a career in audio, I was a nuclear electronics technican for the US Navy aboard submarines, and worked in the semiconductor industry as a manufacturing technician.</p>
            <p>I'm a lifelong creative, and passionate about audio, sound, and music. I intend to continue on my audio career path, building software and tools to help creatives build better audio.</p>
            <p>When I'm not working, you can find me <a href='https://augnos.com' target='_blank' rel="noreferrer">taking pictures</a> at music events, <a href='https://augnos.bandcamp.com' target='_blank' rel="noreferrer">creating music</a> as Augnos, or <a href='https://youtube.com/playlist?list=PL2kx06r7L2r3fyord-gK2-Bxl26bRCizc' target='_blank' rel="noreferrer">DJing</a> around California.</p>
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
