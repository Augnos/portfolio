import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Projects() {
  return (
    <Container fluid className='my-auto py-3'>

      {/* Title Row */}
      <Row className='m-3 text-start'>
        <h1 className='text-purple'>My Projects</h1>
        <p>These projects showcase complete functionality, and demonstrate what I can bring to your project. These projects were created from the ground up, and demonstrate front-end and back-end development. Contact me to get a complete code walkthrough.</p>
      </Row>

      {/* Project Row */}
      <Row className="justify-content-evenly">

        {/* Studio Card */}
        <Col sm={12} md={6} lg={6}>
          <a href='https://silversun.augnos.dev' rel="noreferrer" target="_blank" className='text-decoration-none'>
            <Card bg={"light"} text={"midnight"} className="my-3 bg-gradient bg-opacity-50">
              <div className='row justify-content-center align-items-center'>
                <img src='/images/silversun.png' alt="silversun studios project" className="img img-fluid silversun img-project" />
              </div>
              <Card.Body>
                <Card.Title className='text-orchid text-center'>Silversun Studios</Card.Title>
                <Card.Text>
                  <h6 className='text-center'>
                    Python, Flask, HTML5, CSS3, Bootstrap 5, Google Calendar API, AWS EC2
                  </h6>
                  <p>
                    This application was created for music and recording studios looking to schedule clients booking studio control rooms and recording spaces. The goal was to have an entirely automated booking process, with integrations with Google Calendar API.</p>
                  <p>
                    This was a real-world need while I worked at Pyramind Studios in San Francisco for nearly 4 years, and all booking and payments were scheduled manually by studio staff. The problem with other booking services is that the duration of the booking/appointment is always a set period of time, and studio rentals and bookings vary in duration, ranging from 2 hours to an entire day of rental. With this app, clients can create events through a web form, which creates events using calls to Google Calendar API.
                  </p>
                  <p>
                    A future version will implement a database like MySQL for login and registration, admin dashboards to customize website copy and images, payment handling via 3rd party payment services, and a credit system for users to exchange and use for studio time.
                  </p>

                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        {/* Linktree Card */}
        <Col sm={12} md={6} lg={6}>
          <a href='https://go.augnos.com' rel="noreferrer" target="_blank" className='text-decoration-none'>
            <Card bg={"light"} text={"midnight"} className="my-3 bg-gradient bg-opacity-50">
              <div className='row justify-content-center align-items-center'>
                <img src='/images/linktree.png' alt="linktree clone project" className="img img-fluid img-project" />
              </div>
              <Card.Body>
                <Card.Title className='text-orchid text-center'>Promo Link Tree</Card.Title>
                <Card.Text>
                  <h6 className='text-center'>
                    Python, Flask, HTML5, CSS3, Bootstrap 5, AWS EC2, Git, GitHub
                  </h6>
                  <p>
                    This application was created as a clone of a Linktree repository. Linktrees are used for social media profiles where typically only 1 link is allowed to be presented, such as Twitter and Instagram. Linktrees get around that limitation by presenting a simple website that hosts multiple important links for the user to share with visitors.
                  </p>
                  <p>
                    This was my first application, and I'm actively using it to this day. My brand, Augnos, revolves around music and photography, and I update my "Linktree clone" regularly with new links to my work and upcoming events.
                  </p>
                  <p>
                    Building this app introduced me to working with AWS EC2 instances, Linux and VIM, SSL Certificates, and web servers like NGINX.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

      </Row>
    </Container>
  )
}
