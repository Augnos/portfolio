import React from 'react'
import { Button, Container, Row, Col, } from "react-bootstrap";
import { Route, Routes, NavLink } from 'react-router-dom';
import ChallengeIndex from '../components/challenges/ChallengeIndex';
import BracketStacks from '../components/challenges/BracketStacks';
import TacoCat from '../components/challenges/TacoCat';

export default function Challenges() {
  return (
    <Container fluid className='bg-midnight'>
      <Row className='h-100'>

        {/* Side Nav */}
        <Col xl={2} lg={3} className="d-none d-lg-flex vh-100 flex-column text-start pt-3 bg-midnight text-light">
          <h4 className='text-sky'>Coding Challenges</h4>
          <p>Tap below to load challenge.</p>
          <NavLink to="/challenges/bracketstacks"><Button variant="outline-lavender" className='mb-2'>BracketStacks</Button></NavLink>
          <NavLink to="/challenges/tacocat"><Button variant="outline-lavender" className='mb-2'>TacocaT</Button></NavLink>
        </Col>

        {/* Main Window */}
        <Col xl={10} lg={9} className="">
          <Routes>
            <Route index element={<ChallengeIndex />} />
            <Route path="bracketstacks" element={<BracketStacks />} />
            <Route path="tacocat" element={<TacoCat />} />
          </Routes>
        </Col>

      </Row>
    </Container>
  )
}
