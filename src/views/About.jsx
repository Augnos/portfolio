import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    return (
        <Container fluid className='vh-fill bg-lavender text-midnight bg-gradient text-start'>

            <Row className='h-100 align-items-center justify-content-evenly'>
                <Col xs={8} lg={4} className="mb-3">
                    <img className='img img-fluid' src='images/augnos_dev.jpeg' />
                </Col>
                <Col xs={10} lg={6}>
                    <div className='text-center text-lg-start'>
                        <h1 className='text-purple'>Joshua Valdez</h1>
                        <h4 className='text-indigo fw-light'>Software Developer & Audio Engineer</h4>
                    </div>

                    <div className=''>
                        <p>I have 14 years of problem solving work experience, with roles in technical industries such as IT, audio engineering, semiconductor manufacturing, and nuclear power.</p>
                        <p>I've adopted the agile methodology as Facilities and Production manager, and was able to balance production recording and editing with a small team of engineers.</p>
                        <p>I'm passionate about developing full-stack web applications. Particularly, I'm interested in building tools and apps to help with management and organization. I'm especially interested in creating for the audio and visual media industries. </p>
                        <p>I'm looking for a challenging and exciting position, where my broad technical experience can be a powerful asset for your company.</p>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}
