import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Projects() {
    return (
        <Container>
            <Row className='align-items-center'>
                <Col>

                    <Row className='m-3 text-start'>
                        <h1>My Projects</h1>
                        <p>These projects showcase complete functionality, and demonstrate what I can bring to your project. These projects were created from the ground up, and demonstrate front-end, back-end, security, and database development. All of these projects are full-stack web projects that are built so that you can demo them easily. Contact me to get a complete code walkthrough.</p>
                    </Row>


                    {/* Studio Card */}
                    <Row className="justify-content-evenly">
                        <Col sm={12} md={6} lg={4}>

                            <a href='https://silversun.augnos.dev' target="_blank" className='text-decoration-none'>
                                <Card bg={"black"} text={"light"} className="my-3 py-2 mx-3">
                                    
                                    <div className='row justify-content-center align-items-center'>
                                        <img src='https://silversun.augnos.dev/static/img/photos/lg_studio_a_engineer.jpg' className="img img-fluid"/>
                                    </div>

                                    <Card.Body>
                                        <Card.Title>Silversun Studios</Card.Title>
                                        <Card.Text>Automated booking site for audio recording studios. A demo created with Python and Flask.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>




    )
}
