import { Form, Toast } from "react-bootstrap";
import useHome from "../../UseForms/useHome";
import useNavbar from "../../UseForms/useNavbar";

const Home = ({ token }) => {
  const { handleSubmit, handleChange, texto } = useHome();
  const { user } = useNavbar({ token });
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
          <form className="formText p-2" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="titulo"
              placeholder="Titulo"
              className="mt-2"
            />
            <div className="d-flex">
              <textarea 
                type="texto"
                onChange={handleChange}
                name="texto"
                placeholder="Ingrese info..."
                className="form-control mt-2"
              />
              <button className="btn btn-success m-2" type="submit">
                <b><i>Subir</i></b>
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="m-2">{extract}</div>
    </div>
  );
};

export default Home;
