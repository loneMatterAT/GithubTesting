import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome } from 'react-icons/fa'; // Home icon
import { FaList } from 'react-icons/fa'; // List icon
import { FaDesktop } from 'react-icons/fa'; // Computer icon
import { FaInfoCircle } from 'react-icons/fa'; // About icon
import { FaSignOutAlt } from 'react-icons/fa'; // Logout icon

function NavBar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img className='logo' src={props.logo}/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='logo-title' href="#action1">{props.navname}</Nav.Link>
            <NavDropdown className='nav-dropdown' id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Lion">Lion</NavDropdown.Item>
              <NavDropdown.Item href="#Fox">Fox</NavDropdown.Item>
              <NavDropdown.Item href="#Red Panda">Red Panda</NavDropdown.Item>
              <NavDropdown.Item href="#Polar Bear">Polar Bear</NavDropdown.Item>
              <NavDropdown.Item href="#Cat">Cat</NavDropdown.Item>
              <NavDropdown.Item href="#Dog">Dog</NavDropdown.Item>
              <NavDropdown.Item href="#Guinea Pig">Guinea Pig</NavDropdown.Item>
              <NavDropdown.Item href="#Racoon">Racoon</NavDropdown.Item>
              <NavDropdown.Item href="#Parrot">Parrot</NavDropdown.Item>
              <NavDropdown.Item href="#Axolotyl">Axolotyl</NavDropdown.Item>
              <NavDropdown.Item href="#Links">
                Links
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <div className="nav-options">
              <Nav.Link className="home" href="#action1"><FaHome /> Home</Nav.Link>
              <Nav.Link className="list" href="#action2"><FaList /> List</Nav.Link>
              <Nav.Link className="computers" href="#action3"><FaDesktop /> Computers</Nav.Link>
              <Nav.Link className="about" href="#action4"><FaInfoCircle /> About</Nav.Link>
              <Nav.Link className="logout" href="#action5"><FaSignOutAlt /> Logout</Nav.Link>
            </div>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;