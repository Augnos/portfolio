import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Navigation() {

  return (
    <Navbar collapseOnSelect bg="midnight" variant="dark" expand="lg">
      <Container fluid className='mx-md-5'>
        <Navbar.Brand className='text-lavender fs-4'>Josh Valdez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link eventKey="1" as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link eventKey="2" as={NavLink} to="/skills">Skills</Nav.Link>
            <Nav.Link eventKey="3" as={NavLink} to="/audio">Audio Experience</Nav.Link>
            <Nav.Link eventKey="4" as={NavLink} to="/projects">Dev Projects</Nav.Link>
            <Nav.Link eventKey="5" as={NavLink} to="/challenges">Code Challenges</Nav.Link>

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