import React from 'react'
import Layout from './Layout';
import Slider from '../../components/Slider';
import Mapbd from '../../components/Mapbd';
import '../../styles/admin.scss'

function Admin() {
  const bdsliders = [{
    'Slider': 'https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg'
  },{'Slider':'https://cdn.pixabay.com/photo/2017/11/07/00/18/guitar-2925274_960_720.jpg'}, 
    {'Slider':'https://images.pexels.com/photos/3967765/pexels-photo-3967765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}]
  
    let contador=1;

  return (
    
    <Layout>
      <div>
        <h1 className='titulo-admin-slider'>Actualizacion de imagenes</h1>
        <Slider></Slider>
        <form className='form-slider'>
          <select className='form-select' name="imagenes slider">
            <option className='form-select__option'>Slider 1</option>
            <option className='form-select__option'>Slider 2</option>
            <option className='form-select__option'>Slider 3</option>
          </select>
          <label className='label-link'>
            <input className='input-link' type='url' placeholder='ingresa url imagen' />
          </label>
          <button className='btn-actualizar-slider' type='submit'>Actualizar datos</button>
        </form>
        <section className='contenedor-bd'>
          <div className="titulos">
              <p className="titulos-p-id">ID</p>
              <p className="titulos-p">Link Image</p>
          </div>
          {bdsliders.map((slide)=>{
            console.log(slide)
            return<Mapbd slider={`Slider No. ${contador++}`} linkImagen={slide.Slider}></Mapbd>
          })}
        </section>
      </div>
    </Layout>
  )
}

export default Admin