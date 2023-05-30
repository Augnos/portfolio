import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SiUnrealengine, SiCplusplus, SiProtools, SiAbletonlive, SiWwise, SiFlask, SiReact, SiBootstrap } from 'react-icons/si';
import { FaNetworkWired } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function Skills() {
  return (
    <Container fluid className='my-auto py-3'>

      <Row className='m-3 text-start'>
        <h1 className=''>My Skills</h1>
        <p>I'm an audio professional with a variety of technical skills. My experience has primarily been involved with studio engineering and management, specifically with post-production projects.</p>
      </Row>


      <Row className="justify-content-evenly">

        {/* ProTools Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <IconContext.Provider value={{ color: "#B580FF" }}>
              <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
                <SiProtools className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </div>
            </IconContext.Provider>

            <Card.Body>
              <Card.Title>Avid Pro Tools Expert</Card.Title>
              <Card.Text>Certified Pro Tools Expert, with 5 years of studio engineering experience, primarily in dialogue and voiceover recording and editing, and music mixing and mastering.</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* Studio Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <IconContext.Provider value={{ color: "#FFFFFF" }}>
              <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
                <FaNetworkWired className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </div>
            </IconContext.Provider>

            <Card.Body>
              <Card.Title>Studio Manager</Card.Title>
              <Card.Text>Advanced knowledge of equipment management and inventory. Dante Level 3 certified. Experience building studios and routing audio over copper and LAN.</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* C++ Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <IconContext.Provider value={{ color: "#80BDFF" }}>
              <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
                <SiCplusplus className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </div>
            </IconContext.Provider>

            <Card.Body>
              <Card.Title>C++ Developer</Card.Title>
              <Card.Text>Uses C++ to build audio software, and JUCE framework to build audio plug-ins. Familiar with DSP and audio concepts, physics-based calculus, and acoustics.</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* Sound Design Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <IconContext.Provider value={{ color: "#DDDDDD" }}>
              <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
                <SiAbletonlive className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </div>
            </IconContext.Provider>

            <Card.Body>
              <Card.Title>Sound Designer</Card.Title>
              <Card.Text>Well versed with in sound synthesis and processing to design audio for games and visual media. Able to create new sounds using layering, pitch shifting, and time stretching of audio files.</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* Technical Sound Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
              <IconContext.Provider value={{ color: "#80BDFF" }}>
                <SiWwise className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "#DDDDDD" }}>
                <SiUnrealengine className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </IconContext.Provider>
            </div>

            <Card.Body>
              <Card.Title>Technical Sound Designer</Card.Title>
              <Card.Text>Familiar with Wwise middleware for game audio implementation. Basic knowledge of Unreal Engine 5.</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* Web Dev Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
              <IconContext.Provider value={{ color: "#80E3FF" }}>
                <SiReact className="col-3 h-100" />
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#B980FF" }}>
                <SiBootstrap className="col-4 h-100" />
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#FFFFFF" }}>
                <SiFlask className="col-3 h-100" />
              </IconContext.Provider>
            </div>

            <Card.Body>
              <Card.Title>Web Developer</Card.Title>
              <Card.Text>Designs webpages using React or Flask, and styles with Bootstrap CSS. Familiar with MySQL and REST API methods. Some experience with C#/.NET</Card.Text>
            </Card.Body>
          </Card>
        </Col>


      </Row>
    </Container>
  )
}
