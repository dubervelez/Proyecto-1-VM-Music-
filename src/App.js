import ContextSlider  from "./context/context.js";
import Login from "./components/Login";
import Index from './pages/Index';
import Admin from './pages/Admin/IndexAdm';
import './styles/App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { obtenerDatosSlider } from "./utils/Api.js";
import axios from 'axios';

function App() {
  
  const [sliderData, setSliderData] =useState([])

  

  return (
    <ContextSlider.Provider value={{sliderData, setSliderData}}>
      <BrowserRouter>
        <Routes>
            <Route path='/Proyecto-1-VM-Music-/login' element={ <Login/> } />
            <Route path='/Proyecto-1-VM-Music-/admin' element={ <Index/> } />
            <Route path='/Proyecto-1-VM-Music-/' element={ <Admin/> } />
        </Routes>
      </BrowserRouter>
    </ContextSlider.Provider>
  );
}

export default App;
