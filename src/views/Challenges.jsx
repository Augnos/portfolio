import React from 'react'
import { Container, Row, Col, } from "react-bootstrap";
import { Route, Routes, NavLink } from 'react-router-dom';
import BracketStacks from '../components/challenges/BracketStacks';
import TacoCat from '../components/challenges/TacoCat';

export default function Challenges() {
  return (
    <Container fluid className='mt-3'>

      <Col className="mx-auto bg-lavender text-center">

        <Routes>
          <Route index element={
            <div className='m-auto'>
              <h1>Coding Challenges</h1>
              <p>Here are some commonly asked coding challenges and algorithms, solved with <span className='text-orchid fw-bold'>JavaScript</span> and displayed with <span className='text-primary fw-bold'>React</span> and <span className='text-royal fw-bold'>Bootstrap</span>.</p>
            </div>
          } />
        </Routes>

        <Row className='justify-content-center mb-3'>
          <p>Choose below to load challenge.</p>
          <NavLink to="/challenges/bracketstacks" className='col-auto'>
            <div className='btn btn-royal text-lavender fs-5' >BracketStacks</div>
          </NavLink>
          <NavLink to="/challenges/tacocat" className='col-auto'>
            <div className='btn btn-royal text-lavender fs-5' >TacocaT</div>
          </NavLink>
        </Row>

        <Routes>
          <Route path="bracketstacks" element={<BracketStacks />} />
          <Route path="tacocat" element={<TacoCat />} />
        </Routes>

      </Col>
    </Container>
  )
}
