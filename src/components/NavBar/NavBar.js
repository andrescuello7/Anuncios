import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import useNavbar from "../../UseForms/useNavbar";

const NavBar = ({ setRoutes, token }) => {
  const { user, Salir } = useNavbar({ token });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="#home">
          <i>
            <b>Comunidad</b>
          </i>
        </Navbar.Brand>
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
        {token && (
          <button className="btn btn-outline-primary m-2" onClick={handleShow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </button>
        )}
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <div>
          <Modal.Header className="ModalBorder">
            <Modal.Title>
              <i>
                <b>{user}</b>
              </i>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="Modal">
            <i>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </i>
          </Modal.Body>
          <div className="Modal">
            <button className="btn btn-info m-2" onClick={handleClose}>
              <b>Ver Perfil</b>
            </button>
            <button
              onClick={Salir}
              className="btn btn-danger m-2"
              type="submit"
            >
              <b>Cerrar</b>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NavBar;
