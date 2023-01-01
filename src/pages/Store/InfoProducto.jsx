import React, { useState } from 'react'
import Producto from '../../components/Producto'
import Layout from './Layout'

function InfoProducto() {
    const productoData = {
		"producto": "amplificador Orange",
		"categoria": "Amplificadores",
		"precio": "275500",
		"stock": "4",
		"estado": "ultimas existencias"
	}

    const [cantidadProducto, setCantidadProducto] = useState(1)
    const [valorTotal, setValorTotal] = useState(cantidadProducto * productoData.precio)

  return (
    <Layout>
        <Producto
        producto={productoData.producto}
        precio={productoData.precio}
        cantidad={cantidadProducto}
        valorTotal={valorTotal}
        ></Producto>
    </Layout>
  )
}

export default InfoProducto