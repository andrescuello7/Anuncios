import axios from "axios";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

const useHome = () => {
  const [input, setInput] = useState({});
  const handleSubmit = async (e) => {
    //e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/api/subir",
        input
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };

  const [texto, setTexto] = useState([]);
  useEffect(() => {
    Subir();
  }, []);
  const Subir = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/subir");
      setTexto(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  

  return {
    handleSubmit,
    handleChange,
    texto,
  };
};

export default useHome;
