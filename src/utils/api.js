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


export { obtenerDatosSlider, actualizarSlider, nuevoSlider, eliminarSliderBD };
