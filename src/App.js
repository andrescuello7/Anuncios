import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css';

//Componentes
import Header from '../src/components/NavBar/NavBar';
import Home from '../src/components/Home/Home';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';

function App() {
  const [ routes, setRoutes ] = useState("home")
  const [ token, setToken ] = useState(localStorage.getItem('token'))
  return (
    <div>
      <Header setRoutes={setRoutes} token={token} />
      {routes == "home" && <Home />}
      {routes == "login" && <Login setRoutes={setRoutes} setToken={setToken} />}
      {routes == "register" && <Register setRoutes={setRoutes} setToken={setToken} />}
    </div>
  );
}

export default App;
