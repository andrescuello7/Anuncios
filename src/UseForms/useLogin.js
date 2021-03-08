import axios from "axios";
import { useEffect, useState } from "react";

const useLogin = ({token}) => {
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
      console.log(error);
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

export default useLogin;
