import { Toast } from "react-bootstrap";

const Mensaje = ({datos}) => {
  return (
      <div className="cardData">
        <div className="">
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">titulo</strong>
          <small>11 mins ago</small>
        </div>
        <div>Hello, world! This is a toast message.</div>
      </div>
  );
};

export default Mensaje;
