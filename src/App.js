import ContextSlider  from "./context/context.js";
import { ContextCards } from "./context/contextCards.js";
import { ContextCarroCompras } from "./context/contextStore.js";
import Login from "./components/Login";
import Index from './pages/Index';
import IndexAdmin from './pages/Admin/IndexAdm';
import AdminCards from "./pages/Admin/Cards.jsx";
import './styles/App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { obtenerCards, obtenerDatosSlider } from "./utils/Api.js";
import { Auth0Provider } from "@auth0/auth0-react";
import Store from "./pages/Store/Store.jsx";

function App() {
  
  const [sliderData, setSliderData] =useState([])
  const [cardsData, setCardsData] =useState([])
  const [carroCompra, setCarroCompra] =useState(0)

  useEffect( () => {
    obtenerDatosSlider(
    (response)=>{
      setSliderData(response.data)
    }, 
    (error)=>{
      console.error(error);
    }
    );
    obtenerCards((response)=>{
      setCardsData(response.data)
    }, 
    (error)=>{
      console.error(error);
    })
  },[]);


  return (
    <Auth0Provider
    domain="music-vm.us.auth0.com"
    clientId="wmbhM2q0u5PHM0PF8sMkbQv6XuI1rLk8"
    redirectUri={window.location.origin} 
    >
      <ContextSlider.Provider value={{sliderData, setSliderData}}>
        <ContextCards.Provider value={{cardsData, setCardsData}}>
        <ContextCarroCompras.Provider value={{carroCompra, setCarroCompra}}>
          <BrowserRouter>
            <Routes>
              <Route path='/Proyecto-1-VM-Music-/admin/ultimos-Lanzamientos' element={ <AdminCards/> } />
              <Route path='/Proyecto-1-VM-Music-/store' element={ <Store /> } />
              <Route path='/Proyecto-1-VM-Music-/admin' element={ <IndexAdmin/> } />
              <Route path='/Proyecto-1-VM-Music-/login' element={ <Login/> } />
              <Route path='/Proyecto-1-VM-Music-/' element={ <Index/> } />  
            </Routes>
          </BrowserRouter>
        </ContextCarroCompras.Provider>
        </ContextCards.Provider>
      </ContextSlider.Provider>
    </Auth0Provider>
  );
}

export default App;
