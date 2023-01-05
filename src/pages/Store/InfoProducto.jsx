import Producto from '../../components/Producto'
import CardStore from '../../components/CardStore'
import { useCarroCompras } from '../../context/contextStore';
import imagenRelleno from '../../Assets/images/relleno3.PNG'

function InfoProducto() {
    const productoData = {
		"producto": "amplificador Orange",
		"categoria": "Amplificadores",
		"precio": "275500",
		"stock": "4",
		"estado": "ultimas existencias",
        "imagen1": 'https://cdn.shopify.com/s/files/1/0512/9116/0767/products/3eeda39d-7258-4095-bf08-008cea425230_600x.jpg?v=1605561857'
	}

    const { carroCompra ,setCarroCompra } = useCarroCompras()

    console.log(carroCompra)
  return (
    <>
      <Producto
        imagen={carroCompra[1].imagen}
        producto={carroCompra[1].nombreProducto}
        precio={carroCompra[1].precio}
        cantidad={carroCompra[1].cantidad}
        valorTotal={carroCompra[1].valorTotal}
        listaCaracteristicas = {carroCompra[1].caracteristicas}
      >
      </Producto>
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
      
    </>

  )
}

export default InfoProducto