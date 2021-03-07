import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'

const NavBar = ({setRoutes}) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setRoutes("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => setRoutes("login")}>Login</Nav.Link>
            <Nav.Link onClick={() => setRoutes("register")}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
