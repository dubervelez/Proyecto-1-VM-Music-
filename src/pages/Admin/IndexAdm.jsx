import React from 'react'
import Slider from '../../components/Slider';
import '../../styles/admin.scss'

function Admin() {
  return (
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
          <input className='input-link' type='url' placeholder='URL imagen' />
        </label>
        <button className='btn-actualizar-slider' type='submit'>Actualizar datos</button>
      </form>
    </div>
    
  )
}

export default Admin