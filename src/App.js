import ContextSlider  from "./context/context.js";
import Login from "./components/Login";
import Index from './pages/Index';
import IndexAdmin from './pages/Admin/IndexAdm';
import Cards from "./pages/Admin/Cards.jsx";
import './styles/App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { obtenerDatosSlider } from "./utils/Api.js";


function App() {
  
  const [sliderData, setSliderData] =useState([])

  useEffect( () => {
    obtenerDatosSlider(
    (response)=>{
      setSliderData(response.data)
    }, 
    (error)=>{
      console.error(error);
    }
    );
  },[]);
  return (
    <ContextSlider.Provider value={{sliderData, setSliderData}}>
      <BrowserRouter>
        <Routes>
            <Route path='/Proyecto-1-VM-Music-/admin/ultimos-Lanzamientos' element={ <Cards/> } />
            <Route path='/Proyecto-1-VM-Music-/admin' element={ <IndexAdmin/> } />
            <Route path='/Proyecto-1-VM-Music-/login' element={ <Login/> } />
            <Route path='/Proyecto-1-VM-Music-/' element={ <Index/> } />

        </Routes>
      </BrowserRouter>
    </ContextSlider.Provider>
  );
}

export default App;
