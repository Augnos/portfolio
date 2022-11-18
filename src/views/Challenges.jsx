import React from 'react'
import { Button, Container, Row, Col, } from "react-bootstrap";
import { Route, Routes, NavLink } from 'react-router-dom';
import ChallengeIndex from '../components/challenges/ChallengeIndex';
import BracketStacks from '../components/challenges/BracketStacks';
import TacoCat from '../components/challenges/TacoCat';

export default function Challenges() {
  return (
    <Container fluid className='vh-fill bg-lavender text-midnight bg-gradient'>
      <Row className='h-100'>

        {/* Side Nav */}
        <Col xl={2} lg={3} className="d-none d-lg-flex h-100 align-self-start flex-column text-start pt-3 bg-midnight text-light">
          <h4 className='text-sky'>Coding Challenges</h4>
          <p>Here are some common coding challenges, solved with JavaScript.</p>
          <NavLink to="/challenges/bracketstacks"><Button variant="outline-lavender" className='mb-2'>BracketStacks</Button></NavLink>
          {/* <NavLink to="/challenges/tacocat"><Button variant="outline-lavender" className='mb-2'>TacocaT</Button></NavLink> */}

        </Col>

        {/* Main Window */}
        <Routes>
          <Route index element={<ChallengeIndex />} />
          <Route path="bracketstacks" element={<BracketStacks />} />
          {/* <Route path="tacocat" element={<TacoCat />} /> */}
        </Routes>

      </Row>
    </Container>
  )
}
