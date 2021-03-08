import { Form, Toast } from "react-bootstrap";
import useHome from "../../UseForms/useHome";
import useLogin from "../../UseForms/useLogin";
import Mensaje from "../Mensaje/Mensaje";

const Home = ({ token }) => {
  const { handleSubmit, handleChange, texto } = useHome();
  const { user } = useLogin({token});
  const extract = texto.map((text, i) => (
    <div key={i}>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{text.titulo}</strong>
          <small>{text.createdAt}</small>
        </Toast.Header>
        <Toast.Body>{text.texto}</Toast.Body>
      </Toast>
    </div>
  ));
  return (
    <div>
      <div>
        {token && (
          <Form className="formText" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <b>Titulo</b>
              </Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                name="titulo"
                placeholder="Titulo"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <b>Texto</b>
              </Form.Label>
              <Form.Control
                type="texto"
                onChange={handleChange}
                name="texto"
                placeholder="Ingrese info"
              />
            </Form.Group>
            <button className="btn btn-primary w-100" type="submit">
              Iniciar Sesion
            </button>
          </Form>
        )}
      </div>
      <div className="m-2">{extract}</div>
    </div>
  );
};

export default Home;
