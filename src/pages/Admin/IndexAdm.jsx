import React, { useState, useRef, useEffect } from 'react';
import Layout from './Layout';
import Slider from '../../components/Slider';
import Mapbd from '../../components/Mapbd';
import { obtenerDatosSlider, actualizarSlider, nuevoSlider, eliminarSliderBD } from '../../utils/Api';
import useSlider from '../../hooks/useSlider'
import { ToastContainer, toast } from 'react-toastify';
import {Dialog, DialogTitle, DialogActions, Button } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/admin/index.scss';
import { nanoid } from 'nanoid';

function IndexAdmin() {
  
  const {setSliderData} = useSlider();
  const form = useRef(null);
  const [operacion, setOperacion] = useState(false)
  const [bdsliders, setBdSliders] = useState([]);
  const [openDialogo, setOpenDialogo] = useState(false)
  const [idEliminar, setIdEliminar] = useState("")

  useEffect( () => {
    obtenerDatosSlider(
    (response)=>{
      setBdSliders(response.data);
      setSliderData(response.data)
    }, 
    (error)=>{
      console.error(error);
    }
    );
  },[setSliderData]);

  const submitform = async ()=>{
    let datosSlider = {};
    const datosFormulario = new FormData(form.current)
    datosFormulario.forEach((value, key)=>{
      datosSlider[key] = value
    });
    if (operacion) {
      await nuevoSlider(datosSlider,
      (response)=>{
        console.log(response.data);
        toast.success('Imagen Creada con Exito',{theme: "light"});
      }, 
      (error)=>{
        console.error(error);
      });
    }else{
      await actualizarSlider(datosSlider,
        (response)=>{
          console.log(response.data);
          toast.success('Datos actualizados con exito',{
            theme: "dark",
          });
        }, 
        (error)=>{
          console.error(error);
        }
      );
    }
  }

  const eliminarSlider = async (idSlider)=>{
    await eliminarSliderBD(idSlider, 
      (response)=>{
        console.log(response.data);
        toast.success('Imagen eliminada',{theme: "dark"});
      }, 
      (error)=>{
        console.error(error);
        toast.error('Error al eliminar imagen',{theme: "light"})
      }
      );
    setOpenDialogo(false)  
    
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
              <select className='form-select' name="idSlider" defaultValue="" required>
                <option disabled value="">Seleccion el slider</option>
                {bdsliders.map((slide, index)=>{
                  return <option key={index} className='form-select__option' >{slide.idSlider}</option>
                })}
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
            <button className='btn-actualizar-slider' type='submit' >{!operacion ? "Actualizar": "Crear Imagen"}</button>
          </div>
            <div className="contenedor-funciones">
              <p className={`funcion-p ${!operacion ? 'activo': ''}`} onClick={()=>{setOperacion(false)}} >Actualizar</p>
              <p className={`funcion-p ${operacion ? 'activo': ''}`} onClick={()=>{setOperacion(true)}}>Agregar Imagen</p>
            </div>
            <ToastContainer position="bottom-center" autoClose={1000}  />
        </form>

        <section className='contenedor-bd'>
          <div className="titulos">
              <p className="titulos-p-id">ID</p>
              <p className="titulos-p">Link Image</p>
          </div>
          {bdsliders.map((slide, index)=>{
            return <Mapbd key={nanoid()} slider={slide.idSlider} linkImagen={slide.Slider} eliminarSlider={()=>{setOpenDialogo(true); setIdEliminar(slide.idSlider)}}></Mapbd>
          })}
          <Dialog  open={openDialogo} aria-labelledby="alert-dialog-title" >
            <DialogTitle id="alert-dialog-title">
            {"¿Desea eliminar la imagen del Slider?"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={()=>{setOpenDialogo(false)}} variant="outlined" color="error">Cancelar</Button>
              <Button onClick={()=>{eliminarSlider(idEliminar)}} autoFocus variant="outlined" color="success">Aceptar</Button>
            </DialogActions>
          </Dialog>
        </section>

      </div>
    </Layout>
  )
}

export default IndexAdmin