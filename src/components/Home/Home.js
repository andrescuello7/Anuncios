import { Form, Toast } from "react-bootstrap";
import useHome from "../../UseForms/useHome";
import useNavbar from "../../UseForms/useNavbar";
import Mensaje from "../Mensaje/Mensaje";

const Home = ({ token }) => {
  const { handleSubmit, handleChange, texto } = useHome();
  const { user } = useNavbar({ token });
  const extract = texto.map((text, i) => (
    <div key={i} className="cardData mt-2">
      <div>
        <div className="separar">
          <strong className="mr-auto">{text.titulo}</strong>
          <small className="ml-4">{text.createdAt}</small>
        </div>
      </div>
      <div>{text.texto}</div>
    </div>
  ));
  return (
    <div>
      <div className="w-100">
        {token && (
          <form className="muro p-2" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="titulo"
              placeholder="Titulo"
              className=""
            />
            <div className="d-flex">
              <textarea
                type="texto"
                onChange={handleChange}
                name="texto"
                placeholder="Ingrese info..."
                className="form-control mt-1"
              />
              <button className="btn btn-success m-2" type="submit">
                <b>
                  <i>Subir</i>
                </b>
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="w-100">
        <div className="muroPublique">{extract}</div>
      </div>
    </div>
  );
};

export default Home;
