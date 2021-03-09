import axios from "axios";
import { useEffect, useState } from "react";

const useNavbar = ({token}) => {
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
      console.log('Iniciar sesion');
    }
  };
  const Salir = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return {
    user,
    Salir
  };
};

export default useNavbar;
