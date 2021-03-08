import { Navbar, Nav } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const NavBar = ({ setRoutes, token }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    GET(token);
  }, [token]);
  const GET = async () => {
    try {
      const headers = { "x-auth-token": token };
      const { data } = await axios.get("http://localhost:4000/api/usuarios", {
        headers,
      });
      setUser(data.usuario.name);
    } catch (error) {
      console.log(error);
    }
  };
  const Salir = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><i>Anuncios</i></Navbar.Brand>
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
