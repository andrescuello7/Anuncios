import { Toast } from "react-bootstrap";

const Mensaje = ({datos}) => {
  return (
    <div>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">titulo</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
};

export default Mensaje;
