import axios from 'axios';

const obtenerDatosSlider = async(callbackSucces,callbackError)=>{
  const options = {method: 'GET', url: 'http://localhost:5000/admin/informacion-slider'};
  await axios.request(options).then(callbackSucces).catch(callbackError);
}

const actualizarSlider = async( datosSlider,callbackSucces,callbackError )=>{
    const options = {
        method: 'PATCH',
        url: 'http://localhost:5000/admin/modificar-slider',
        headers: {'Content-Type': 'application/json'},
        data: {
          idSlider: datosSlider.idSlider,
          Slider: datosSlider.Slider
        }
    };
    await axios.request(options).then(callbackSucces).catch(callbackError); 
}

const nuevoSlider = async( datosSlider,callbackSucces,callbackError )=>{
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/admin/creacion-slider',
        headers: {'Content-Type': 'application/json'},
        data: {idSlider: datosSlider.idSlider , Slider: datosSlider.Slider}
    }; 
  await axios.request(options).then(callbackSucces).catch(callbackError); 
    
}

const eliminarSliderBD = async(idSlider,callbackSucces,callbackError)=>{
  const options = {
    method: 'DELETE',
    url: 'http://localhost:5000/admin/eliminar-slider',
    headers: {'Content-Type': 'application/json'},
    data: {idSlider: idSlider}
  };
  
  axios.request(options).then(callbackSucces).catch(callbackError);
}


// Rutas para administracion de las CARDS ultimos Lanzamientos

const nuevaCard = async( datosCard,callbackSucces,callbackError )=>{
  const options = {
      method: 'POST',
      url: 'http://localhost:5000/admin/ultimos-lanzamientos/nuevo',
      headers: {'Content-Type': 'application/json'},
      data: {
        artista: datosCard.artista, 
        cancion: datosCard.cancion,
        imagen: datosCard.imagen,
        genero: datosCard.genero,
        album: datosCard.album,
        fecha: datosCard.fecha
      }
  }; 
  await axios.request(options).then(callbackSucces).catch(callbackError); 
}

const obtenerCards = async( callbackSucces,callbackError )=>{
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/admin/ultimos-lanzamientos/'
  };

  await axios.request(options).then(callbackSucces).catch(callbackError);

}

const eliminarCard = async ( datosCard, callbackSucces, callbackError )=>{

  const options = {
    method: 'DELETE',
    url: 'http://localhost:5000/admin/ultimos-lanzamientos/eliminar',
    headers: {'Content-Type': 'application/json'},
    data: { cancion: datosCard}
  };
  await axios.request(options).then(callbackSucces).catch(callbackError);

}

const editarCard = async (datosCard, callbackSucces, callbackError)=>{
  const options = {
    method: "PATCH",
    url: "http://localhost:5000/admin/ultimos-lanzamientos/editar",
    headers: {'Content-Type': 'application/json'},
    data: {
      id: datosCard.id,
      artista: datosCard.artista, 
      cancion: datosCard.cancion,
      imagen: datosCard.imagen,
      genero: datosCard.genero,
      album: datosCard.album,
      fecha: datosCard.fecha
    }
  }
  await axios.request(options).then(callbackSucces).catch(callbackError);
}


export { obtenerDatosSlider, actualizarSlider, nuevoSlider, eliminarSliderBD, nuevaCard, obtenerCards, eliminarCard,editarCard };
