import React, { useState } from 'react'
import Producto from '../../components/Producto'
import Layout from './Layout'
import CardStore from '../../components/CardStore'

function InfoProducto() {
    const productoData = {
		"producto": "amplificador Orange",
		"categoria": "Amplificadores",
		"precio": "275500",
		"stock": "4",
		"estado": "ultimas existencias",
        "imagen1": 'https://cdn.shopify.com/s/files/1/0512/9116/0767/products/3eeda39d-7258-4095-bf08-008cea425230_600x.jpg?v=1605561857'
	}

    const [cantidadProducto, setCantidadProducto] = useState(1)
    const [valorTotal, setValorTotal] = useState(cantidadProducto * productoData.precio)

  return (
    <Layout>
        <Producto
        imagen={productoData.imagen1}
        producto={productoData.producto}
        precio={productoData.precio}
        cantidad={cantidadProducto}
        valorTotal={valorTotal}
        ></Producto>
        <div className='contenedor-store-card' >

          <CardStore
              categoria={productoData.categoria} 
              producto={productoData.producto} 
              precio={productoData.precio}
              estado={productoData.estado}
              miniatura="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/thumb_200x.jpg?v=1605551015"
            />
          <CardStore
              categoria={productoData.categoria} 
              producto={productoData.producto} 
              precio={productoData.precio}
              estado={productoData.estado}
              miniatura="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/thumb_200x.jpg?v=1605551015"
            />
          <CardStore
              categoria={productoData.categoria} 
              producto={productoData.producto} 
              precio={productoData.precio}
              estado={productoData.estado}
              miniatura="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/thumb_200x.jpg?v=1605551015"
            />
          <CardStore
              categoria={productoData.categoria} 
              producto={productoData.producto} 
              precio={productoData.precio}
              estado={productoData.estado}
              miniatura="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/thumb_200x.jpg?v=1605551015"
            />
          <CardStore
              categoria={productoData.categoria} 
              producto={productoData.producto} 
              precio={productoData.precio}
              estado={productoData.estado}
              miniatura="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/thumb_200x.jpg?v=1605551015"
            />
        </div>
    </Layout>
  )
}

export default InfoProducto