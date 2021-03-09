import { Navbar, Nav } from "react-bootstrap";
import useNavbar from "../../UseForms/useNavbar";

const NavBar = ({ setRoutes, token }) => {
  const { user, Salir } = useNavbar({token})
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><i><b>Comunidad</b></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setRoutes("home")}>Home</Nav.Link>
            {!token && (
              <Nav.Link onClick={() => setRoutes("login")}>Login</Nav.Link>
            )}
            {!token && (
              <Nav.Link onClick={() => setRoutes("register")}>
                Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <div className="m-2">
          <i>
            <b>{user}</b>
          </i>
        </div>
        {token && (
          <button onClick={Salir} className="btn btn-dark" type="submit">
            Cerrar Sesion
          </button>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
