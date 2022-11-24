import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Projects() {
  return (
    <Container fluid className='my-auto'>
        
        {/* Title Row */}
        <Row className='m-3 text-start'>
          <h1 className='text-purple'>My Projects</h1>
          <p>These projects showcase complete functionality, and demonstrate what I can bring to your project. These projects were created from the ground up, and demonstrate front-end, back-end, security, and database development. All of these projects are full-stack web projects that are built so that you can demo them easily. Contact me to get a complete code walkthrough.</p>
        </Row>

        {/* Project Row */}
        <Row className="justify-content-evenly">

          {/* Studio Card */}
          <Col sm={12} md={6} lg={4}>
            <a href='https://silversun.augnos.dev' target="_blank" className='text-decoration-none'>
              <Card bg={"light"} text={"midnight"} className="my-3 py-2 mx-3 bg-gradient bg-opacity-50">
                <div className='row justify-content-center align-items-center'>
                  <img src='/images/silversun.png' className="img img-fluid img-project" />
                </div>
                <Card.Body>
                  <Card.Title className='text-orchid text-center'>Silversun Studios</Card.Title>
                  <Card.Text>Automated booking site for audio recording studios. A demo created with Python and Flask.</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>

          {/* Linktree Card */}
          <Col sm={12} md={6} lg={4}>
            <a href='https://go.augnos.com' target="_blank" className='text-decoration-none'>
              <Card bg={"light"} text={"midnight"} className="my-3 py-2 mx-3 bg-gradient bg-opacity-50">
                <div className='row justify-content-center align-items-center'>
                  <img src='/images/linktree.png' className="img img-fluid img-project" />
                </div>
                <Card.Body>
                  <Card.Title className='text-orchid text-center'>Linktree Clone</Card.Title>
                  <Card.Text>A stylish, mobile-friendly, and regularly updated site displaying links relevant to my personal brand. Created with Python and Flask.</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>

        </Row>
    </Container>
  )
}
