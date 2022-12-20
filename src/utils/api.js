import axios from 'axios';

const obtenerDatosSlider = async(setBdSliders)=>{
    const options = {method: 'GET', url: 'http://localhost:5000/admin/informacion-slider'};
  
    await axios.request(options).then(function (response) {
      setBdSliders(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}

const actualizarSlider = async(datosSlider)=>{
    const options = {
        method: 'PATCH',
        url: 'http://localhost:5000/admin/modificar-slider',
        headers: {'Content-Type': 'application/json'},
        data: {
          idSlider: datosSlider.idSlider,
          Slider: datosSlider.Slider
        }
    };
    await axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
    }); 
}

const nuevoSlider = async(datosSlider)=>{
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/admin/creacion-slider',
        headers: {'Content-Type': 'application/json'},
        data: {idSlider: datosSlider.idSlider , Slider: datosSlider.Slider}
    };
      
    await axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
    }); 
    
}

export { obtenerDatosSlider, actualizarSlider, nuevoSlider };
