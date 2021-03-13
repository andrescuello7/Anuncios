import { Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const Login = ({ setRoutes, setToken }) => {
  const [input, setInput] = useState({});
  useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/auth",
        input
      );
      localStorage.setItem("token", data);
      setToken(data);
      setRoutes("home");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };
  return (
    <div className="form w-100">
      <Form className="formText" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <b>Email</b>
          </Form.Label>
          <Form.Control
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Ingrese email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <b>Contraseña</b>
          </Form.Label>
          <Form.Control
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Ingrese Contraseña"
          />
        </Form.Group>
        <button className="btn btn-primary w-100" type="submit">
          Iniciar Sesion
        </button>
        <div className="mt-2">
          <a onClick={() => setRoutes("register")}>Aun no tienes cuenta?, click me</a>
        </div>
      </Form>
    </div>
  );
};

export default Login;
