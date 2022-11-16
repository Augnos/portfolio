import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default () => {

    return (
        <Navbar bg="dark" variant="dark" expand="md" className='navbarstyle'>
            <Container>
                <Navbar.Brand as={NavLink} to="/" className='font-purple'>Josh Valdez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                        {/* <Nav.Link as={NavLink} to="/challenges">Coding Challenges</Nav.Link> */}
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://linkedin.com/in/augnos" target="_blank">LinkedIn</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/augnos" target="_blank">GitHub</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/document/d/1xloDQsroSO-r-9ffeNDCQsj8gCF9tQvWTDCHFc99PTM/edit?usp=sharing" target="_blank">Resume</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}