import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Audio() {
  return (
    <Container fluid className='my-auto py-3'>

      {/* Title Row */}
      <Row className='m-3 text-start'>
        <h1 className='text-purple'>Professional Experience</h1>
        <p>Here's a list of audio work I have done I have done professionally, as studio manager or as a freelance audio engineer.</p>
      </Row>

      {/* *************************** */}
      {/* **** Professional Work **** */}
      {/* *************************** */}
      <Row className="justify-content-evenly">


        {/************* Microsoft Cortana *************/}
        <Col sm={12} md={6} lg={6}>
          <Card bg={"light"} text={"midnight"} className="my-3 bg-gradient bg-opacity-50">

            <div className='mt-3 row justify-content-center align-items-center'>
              <img src='/images/cortana.png' alt="microsoft cortana logo" className="img img-fluid silversun img-project" />
            </div>

            <Card.Body>
              <Card.Title className='text-orchid text-center'>Microsoft Cortana (2018-2022)</Card.Title>
              <Card.Text>
                <h6 className='text-center'>
                  Project Manager, Lead Voiceover Editor
                </h6>
                <p>
                  Responsible for editing studio recordings of Cortana's US-Female and US-Male voices. Would handle many thousands of lines of dialog per year, and edited and delivered many tens of thousands of lines over the duration of the project.</p>
                <p>
                  Project management tasks included scheduling deadlines for recording and delivery of edits, collaborating to determine a suitable mastering chain as recording conditions and talent varied. Responsible for billing and invoicing for editing work completed, and managing payouts for talent, voice direction, and studio bookings.
                </p>
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>


        {/************* WestEd *************/}
        <Col sm={12} md={6} lg={6}>
          <Card bg={"light"} text={"midnight"} className="my-3 bg-gradient bg-opacity-50">

            <div className='mt-3 row justify-content-center align-items-center'>
              <img src='/images/azella.png' alt="azella logo" className="img img-fluid silversun img-project" />
            </div>

            <Card.Body>
              <Card.Title className='text-orchid text-center'>AZELLA (2018-2022)</Card.Title>
              <Card.Text>
                <h6 className='text-center'>
                  Production Manager, Recording Engineer, Voiceover Editor
                </h6>
                <p>
                  Produced audio assets for the Arizona English Language Learning Assessment (AZELLA). Responsible for acquiring and presenting talent to clients, booking sessions, recording and voice direction, editing assets, and managing billing and invoices for our studios and hired talent.</p>
                <p>
                  Lead a small team of engineers to reliable record and edit assets. Maintained archives of assets in house and securely in the cloud for test revisions, updates, and alternates, while adding new assets yearly.
                </p>
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>


        {/************* Pyramind Live *************/}
        <Col sm={12} md={6} lg={6}>
          <Card bg={"light"} text={"midnight"} className="my-3 bg-gradient bg-opacity-50">

            <div className='mx-3 row justify-content-center align-items-center'>
              <img src='/images/pyramindlive.jpg' alt="private suite podcast logo" className="img img-fluid silversun img-project" />
            </div>

            <Card.Body>
              <Card.Title className='text-orchid text-center'>Pyramind Live (2021-2022)</Card.Title>
              <Card.Text>
                <h6 className='text-center'>
                  Livestream Director, Live Sound Engineer
                </h6>
                <p>
                  <a href='https://www.youtube.com/@PyramindSF/streams'>Pyramind Live</a> was livestream music show, performed by students, alumni and special guests of Pyramind. Primarily directed livestream operations. Managed and maintained set of cameras and large video wall. Monitored livestream and on-site audio levels, and acted as VJ for performers. Would prepare multi-mic setups for non-DJ performances.</p>
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>


        {/************* Mentor My Mix *************/}
        <Col sm={12} md={6} lg={6}>
          <Card bg={"light"} text={"midnight"} className="my-3 bg-gradient bg-opacity-50">

            <div className='row justify-content-center align-items-center'>
              <img src='/images/mentormymix.png' alt="private suite podcast logo" className="mt-3 img img-fluid silversun img-project" />
            </div>

            <Card.Body>
              <Card.Title className='text-orchid text-center'>Mentor My Mix (2020-2022)</Card.Title>
              <Card.Text>
                <h6 className='text-center'>
                  Podcast Engineer, Editor, and Videographer
                </h6>
                <p>
                  <a href='https://podcasts.apple.com/us/podcast/mentor-my-mix-find-your-career-in-the-music-industry'>Mentor My Mix</a> is an interview-style video podcast, revolving around the music industry and spotlighting legendary figures in the San Francisco Bay Area and beyond. Primarily acted a set manager and videographer, as well as podcast editor for video and audio-only podcasts. Occasionally would manage livestreaming the podcast recordings via twitch.tv and YouTube Live.</p>
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>


        {/************* Private Suite Podcast *************/}
        <Col sm={12} md={6} lg={6}>
          <Card bg={"light"} text={"midnight"} className="my-3 bg-gradient bg-opacity-50">

            <div className='mt-3 row justify-content-center align-items-center'>
              <img src='/images/psp.jpg' alt="private suite podcast logo" className="img img-fluid silversun img-project" />
            </div>

            <Card.Body>
              <Card.Title className='text-orchid text-center'>Private Suite Podcast (2019-2020)</Card.Title>
              <Card.Text>
                <h6 className='text-center'>
                  Podcast Editor, Co-host
                </h6>
                <p>
                  <a href='https://podcasts.apple.com/us/podcast/private-suite-podcast'>Private Suite Podcast</a> was a volunteer news podcast revolving around music, visual art, and popular culture surrounding the Vaporwave scene. Primary acted as podcast editor for about 50 episodes of its run, and was a co-host for group episodes. My first edited episode was #54. 猫 シ CORP.</p>
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>

      </Row>

      {/* ************************** */}
      {/* ***** Freelance Work ***** */}
      {/* ************************** */}

      {/* put freelance work here
      
      
      <Row className='m-3 text-start'>
        <h1 className='text-purple'>Freelance Work</h1>
        <p>A list of music I have had the privelige and opportunity to work on.</p>
      </Row> */}


    </Container>
  )
}
