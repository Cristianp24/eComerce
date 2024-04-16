import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Form from './views/formLogin/Form';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'



    

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <div>
      {pathname !== "/" && pathname !== "/login" && (
        <Navbar />
      )}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Form />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>

      </div>
     
    </>
  )
}

export default App
