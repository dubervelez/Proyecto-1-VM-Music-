import React, { useState, useRef, useEffect } from 'react';
import Layout from './Layout';
import Slider from '../../components/Slider';
import Mapbd from '../../components/Mapbd';
import axios from 'axios';
import '../../styles/admin/index.scss';

function Admin() {
  
  const [bdsliders, setBdSliders] = useState([]);

  useEffect(() => {
    const options = {method: 'GET', url: 'http://localhost:5000/admin/informacion-slider'};
  
    axios.request(options).then(function (response) {
      setBdSliders(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [bdsliders]);
  
  
  const form = useRef(null);
  
  const submitform = async (e)=>{
    e.preventDefault();
    let datosSlider = {};
    const datosFormulario = new FormData(form.current)
    datosFormulario.forEach((value, key)=>{
      datosSlider[key] = value
    });
    /*
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
    }); */

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



  


  return (
    <Layout>
      <div>
        <h1 className='titulo-admin-slider'>Actualizacion de imagenes</h1>
        <Slider></Slider>
        
        <form ref={form} className='form-slider' onSubmit={submitform}>
          <select required className='form-select' name="idSlider" >
            <option disabled >Seleccion el slider</option>
            <option className='form-select__option' >Slider No 1</option>
            <option className='form-select__option'>Slider No 2</option>
            <option className='form-select__option'>Slider No 3</option>
          </select>
          <label className='label-link' htmlFor='Slider'>
            <input required name='Slider' className='input-link' type='url' 
            placeholder='ingresa url imagen'/>
          </label>
          <button className='btn-actualizar-slider' type='submit ' >Actualizar datos</button>
        </form>

        <section className='contenedor-bd'>
          <div className="titulos">
              <p className="titulos-p-id">ID</p>
              <p className="titulos-p">Link Image</p>
          </div>
          {bdsliders.map((slide, index)=>{
            return <Mapbd key={index} slider={slide.idSlider} linkImagen={slide.Slider}></Mapbd>
          })}
        </section>

      </div>
    </Layout>
  )
}

export default Admin