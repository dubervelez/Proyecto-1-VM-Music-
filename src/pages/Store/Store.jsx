import React from 'react'
import Layout from '../Store/Layout'
import CardStore from '../../components/CardStore'
import '../../styles/store/store.scss'

function Store() {
  return (
    <Layout>

      <div className='contenedor-productos-mas-vendidos'> 
        <h2 className='titulo'>Mas Vendidos...</h2>
        <div className='contenedor-store-card' >
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
          <CardStore></CardStore>
        </div>
      </div>
    </Layout>
  )
}

export default Store