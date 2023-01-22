import Producto from '../../components/Producto'
import CardStore from '../../components/CardStore'
import { useCarroCompras, useProductos } from '../../context/contextStore';
import imagenRelleno from '../../Assets/images/relleno3.PNG'
import { nanoid } from 'nanoid';

function InfoProducto() {
  const { productos } = useProductos()   
  const { carroCompra ,setCarroCompra } = useCarroCompras()
  const sumarCantidad = ()=>{
    setCarroCompra((prevState) => {
      return [
        prevState[0], 
        { ...prevState[1], 
          cantidad: prevState[1].cantidad++,
        }, 
        prevState[2],prevState[3] ];
    })
  }
  const restarCantidad = ()=>{
    setCarroCompra((prevState) => {
      const cantidad = Math.max(prevState[1].cantidad--, 1)
      return [
        prevState[0], 
        { ...prevState[1], 
          cantidad: cantidad,
        }, 
        prevState[2],prevState[3] ];
    })
  }
    
  return (
    <>
      <Producto
        imagen={carroCompra[1].imagen}
        producto={carroCompra[1].nombreProducto}
        precio={carroCompra[1].precio}
        cantidad={carroCompra[1].cantidad}
        valorTotal={carroCompra[1].valorTotal}
        listaCaracteristicas = {carroCompra[1].caracteristicas}
        sumarCantidad={sumarCantidad}
        restarCantidad={restarCantidad}
      >
      </Producto>
      <div className='contenedor-store-card' >
        {
          productos.map((producto, index)=>{
            if (index < 5) {            
              return(  
                <CardStore key={nanoid()}
                  categoria={producto.categoria} 
                  producto={producto.producto} 
                  precio={producto.precio}
                  estado={producto.estado}
                  miniatura={producto.miniatura}
                  />
              )
            }
          })
        }  
      </div>
      
    </>

  )
}

export default InfoProducto