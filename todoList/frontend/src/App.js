import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Privateroute from './Privateroute';
import Publicroute from './Publicroute';
import Login from './Pages/Login';
import SingUp from './Pages/SingUp';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Publicroute />}>
            <Route index element={<SingUp />} />
            <Route path="/SingUp" element={<SingUp />} />
            <Route path="/Login" element={<Login />} />
          </Route>

          <Route path="/" element={<Privateroute />}>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path='/Navbar' element={<Navbar />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  );
}


export default App;
