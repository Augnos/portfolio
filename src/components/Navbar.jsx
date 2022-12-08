import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Navigation() {

  return (
    <Navbar bg="midnight" variant="dark" expand="lg">
      <Container fluid className='mx-md-5'>
        <Navbar.Brand as={NavLink} to="/" className='text-lavender fs-4'>Josh Valdez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/about">About</Nav.Link> */}
            <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/challenges">Coding Challenges</Nav.Link>

            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://linkedin.com/in/augnos" target="_blank">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/augnos" target="_blank">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://drive.google.com/open?id=1pIvvcQO_FMqqXnflyQ578Mhd9zZVLyXy&authuser=josh%40augnos.com&usp=drive_fs" target="_blank">Resume</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}