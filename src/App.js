import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css';

//Componentes
import Header from '../src/components/NavBar/NavBar';
import Home from '../src/components/Home/Home';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';

//UseForm
import useHome from "../src/UseForms/useHome";
import useLogin from "../src/UseForms/useLogin";

function App() {
  const [ routes, setRoutes ] = useState("home")
  const [ token, setToken ] = useState(localStorage.getItem('token'))
  return (
    <div>
      <Header setRoutes={setRoutes} token={token} />
      {routes == "home" && <Home token={token} />}
      {routes == "login" && <Login setRoutes={setRoutes} token={token} setToken={setToken} />}
      {routes == "register" && <Register setRoutes={setRoutes} token={token} setToken={setToken} />}
    </div>
  );
}

export default App;
