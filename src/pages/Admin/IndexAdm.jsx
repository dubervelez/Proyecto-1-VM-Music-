import React, { useState, useRef, useEffect } from 'react';
import Layout from './Layout';
import Slider from '../../components/Slider';
import Mapbd from '../../components/Mapbd';
import axios from 'axios';
import { obtenerDatosSlider, actualizarSlider, nuevoSlider } from '../../utils/Api';
import '../../styles/admin/index.scss';

function Admin() {
  
  const form = useRef(null);
  const [operacion, setOperacion] = useState(false)
  
  const [bdsliders, setBdSliders] = useState([]);
  useEffect( () => {
    obtenerDatosSlider(setBdSliders);
  }, [bdsliders]);
  
  const submitform = async (e)=>{
    e.preventDefault();
    let datosSlider = {};
    const datosFormulario = new FormData(form.current)
    datosFormulario.forEach((value, key)=>{
      datosSlider[key] = value
    });
    if (operacion) {
      await nuevoSlider(datosSlider);
    }else{
      await actualizarSlider(datosSlider);
    }
  }


  return (
    <Layout>
      <div>
        <h1 className='titulo-admin-slider'>Administracion Slider</h1>
        <Slider></Slider>
        
        <form ref={form} className='form-slider' onSubmit={submitform}>
          <div className='contenedor-form'>
            {!operacion ?(
            <>
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
            </>):(
            <>
              <label className='label-link-nuevo' htmlFor='idSlider'>
                <input required name='idSlider' className='input-link' type='text' 
                placeholder='No del Slider'/>
              </label>
              <label className='label-link-nuevo' htmlFor='Slider'>
                <input required name='Slider' className='input-link' type='url' 
                placeholder='ingresa url imagen'/>
              </label>
            </>
            )}
            <button className='btn-actualizar-slider' type='submit ' >{!operacion ? "Actualizar": "Crear Imagen"}</button>
          </div>
            <div className="contenedor-funciones">
              <p className={`funcion-p ${!operacion ? 'activo': ''}`} onClick={()=>{setOperacion(false)}} >Actualizar</p>
              <p className={`funcion-p ${operacion ? 'activo': ''}`} onClick={()=>{setOperacion(true)}}>Agregar Imagen</p>
            </div>
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