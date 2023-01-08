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
import InfoProducto from "./pages/Store/InfoProducto.jsx";
import Layout from "./pages/Store/Layout.jsx";
import MiCarrito from "./pages/Store/MiCarrito.jsx";
import Productos from "./pages/Store/Productos.jsx";
function App() {
  
  const [sliderData, setSliderData] =useState([])
  const [cardsData, setCardsData] =useState([])
  const [carroCompra, setCarroCompra] =useState([{cantidadCarrito: 0 },{},{},{cantidadProductos: 0}])

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
            <Routes >
            <Route path='/Proyecto-1-VM-Music-/store/mi-carrito' element={ <Layout productosSelecionados={carroCompra[0].cantidadCarrito}> <MiCarrito /> </Layout> } />
            <Route path='/Proyecto-1-VM-Music-/store/listado-productos' element={ <Layout productosSelecionados={carroCompra[0].cantidadCarrito}> <Productos /> </Layout> } />
            <Route path='/Proyecto-1-VM-Music-/store/producto' element={ <Layout productosSelecionados={carroCompra[0].cantidadCarrito}> <InfoProducto /> </Layout> } />
            <Route path='/Proyecto-1-VM-Music-/store' element={ <Layout productosSelecionados={carroCompra[0].cantidadCarrito}> <Store /> </Layout>  } />
            <Route path='/Proyecto-1-VM-Music-/admin/ultimos-Lanzamientos' element={ <AdminCards/> } />
            <Route path='/Proyecto-1-VM-Music-/admin' element={ <IndexAdmin/> } />
            <Route path='/Proyecto-1-VM-Music-/login' element={ <Login/> } />
            <Route path='/Proyecto-1-VM-Music-' element={ <Index/> } />  
            </Routes>
          </BrowserRouter>
        </ContextCarroCompras.Provider>
        </ContextCards.Provider>
      </ContextSlider.Provider>
    </Auth0Provider>
  );
}

export default App;
