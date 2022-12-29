import React from 'react'
import Layout from '../Store/Layout'
import CardStore from '../../components/CardStore'
import '../../styles/store/store.scss'
import ImagenRelleno from '../../Assets/images/relleno.jpg'
import ImagenRelleno2 from '../../Assets/images/relleno-2.jpg'

function Store() {
  return (
    <Layout>
      <div className='imagen-relleno'>
        <img src={ImagenRelleno2} alt="" />
      </div>
      <div className='contenedor-productos-mas-vendidos'> 
        <h2 className='titulo'>Mas Vendidos</h2>
        <div className='contenedor-store-card' >
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
        </div>
        <button className='btn-ver-mas'>ver Todos...</button>
      </div>
      <div className='imagen-relleno'>
        <img src={ImagenRelleno} alt="" />
      </div>
      <div className='contenedor-productos-mas-vendidos'> 
        <h2 className='titulo'>Novedades...</h2>
        <div className='contenedor-store-card' >
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
        </div>
        <button className='btn-ver-mas'>ver Todos...</button>
      </div>
    </Layout>
  )
}

export default Store