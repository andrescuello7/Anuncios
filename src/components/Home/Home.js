import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [texto, setTexto] = useState("");
  const [textoTwo, setTextoTwo] = useState("");
  const [num, setNum] = useState(0);
  useEffect(() => {
    Subir();
  }, []);
  const Subir = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/subir")
      setTexto(data.[num].titulo)
      setTextoTwo(data.[num].texto)
      setNum(num + 1)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-2">
      <p>{texto}</p>
      <p>{textoTwo}</p>
    </div>
  );
};

export default Home;