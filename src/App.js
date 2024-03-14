import { useState } from 'react';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import UserNavbar from './Components/UserNavbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {

  const[alert,setalert] = useState(null);

  const showalert = (message,type)=>{
    setalert({
    message : message,
    type : type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);
}


  return (
    <>
    <Router>
      <Routes>
        <Route exact  path="/" element={<><Navbar/><Home/><Footer /></>} />
        <Route exact  path="/user" element={<><Navbar/><UserNavbar/><Main showalert={showalert}/><Footer /></>} />
        <Route exact  path="/login" element={<><Navbar/><Alert alert={alert}/><Login showalert= {showalert}/><Footer /></>} />
      <Route exact  path="/signup" element={<><Navbar/><Alert alert={alert}/><Signup showalert={showalert}/><Footer /></>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
