import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPython, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiFlask, SiMysql } from 'react-icons/si';
import { TbBrandHtml5, TbBrandJavascript, TbBrandCss3 } from 'react-icons/tb';
import { IconContext } from 'react-icons';

export default function Skills() {
  return (
    <Container fluid className='my-auto'>

      <Row className='m-3 text-start'>
        <h1 className=''>My Skills</h1>
        <p>I'm a tenured problem-solver, and I build responsive full-stack web applications. I use Python, Node.js, Flask, React, MySQL, MongoDB, Bootstrap, HTML and CSS. Below are my key technical skills that I bring to projects. </p>
      </Row>


      <Row className="justify-content-evenly">

        {/* MERN Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <IconContext.Provider value={{ color: "#afe9ff" }}>
              <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
                <FaReact className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </div>
            </IconContext.Provider>

            <Card.Body>
              <Card.Title>Full Stack MERN Development</Card.Title>
              <Card.Text>I use JavaScript on a daily basis to build websites and applications, mainly with the MERN stack of technologies: React, Node.js, MongoDB, and Express</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* Front End Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
              <IconContext.Provider value={{ color: "#afe9ff" }}>
                <TbBrandCss3 className="col-3 h-100" />
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#fbcfea" }}>
                <TbBrandHtml5 className="col-4 h-100" />
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#feffbe" }}>
                <TbBrandJavascript className="col-3 h-100" />
              </IconContext.Provider>
            </div>

            <Card.Body>
              <Card.Title>Front End Development</Card.Title>
              <Card.Text>Website development is agnostic of any programming language, and I build attractive and responsive frontends for websites using HTML, CSS, and JavaScript.</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* Design Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <IconContext.Provider value={{ color: "#bfb9fe" }}>
              <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
                <FaBootstrap className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </div>
            </IconContext.Provider>

            <Card.Body>
              <Card.Title>Front End Design</Card.Title>
              <Card.Text>CSS frameworks can save a lot of time when styling a website. I utilize Bootstrap and React Bootstrap to design and layout websites efficiently and attractively.</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* Python Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <IconContext.Provider value={{ color: "#feffbe" }}>
              <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
                <FaPython className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </div>
            </IconContext.Provider>

            <Card.Body>
              <Card.Title>Python Development</Card.Title>
              <Card.Text>I used Python to build a studio booking web application, which allows users to schedule and create events using Google Workspace resource calendars. You can see that project <a href='https://silversun.augnos.dev' className='text-sky' rel="noreferrer" target="_blank">here</a>.</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* Flask Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">
            <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
              <SiFlask className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
            </div>
            <Card.Body>
              <Card.Title>Full Stack Flask Development</Card.Title>
              <Card.Text>I use the micro-framework Flask to use Python as the backend of web applications. I use the template engine, Jinja, to pass code between the client and Flask, and MySQL as the database.</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        {/* Database Card */}
        <Col sm={12} md={6} lg={4}>
          <Card bg={"dark"} text={"light"} className="my-3 py-2 mx-3 border border-white">

            <IconContext.Provider value={{ color: "#fbcfea" }}>
              <div className='row justify-content-center align-items-center' style={{ height: '128px' }}>
                <SiMysql className="img img-fluid" style={{ width: '128px', marginLeft: "auto", marginRight: "auto" }} />
              </div>
            </IconContext.Provider>

            <Card.Body>
              <Card.Title>Database Development</Card.Title>
              <Card.Text>I have experience designing and querying databases. I've used MySQL with Python, and the NoSQL database MongoDB with React and MERN projects.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}
