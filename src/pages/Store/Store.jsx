import CardStore from '../../components/CardStore'
import '../../styles/store/store.scss'
import ImagenRelleno from '../../Assets/images/relleno.jpg'
import ImagenRelleno2 from '../../Assets/images/relleno-2.jpg'
import { nanoid } from 'nanoid';
import { useProductos } from '../../context/contextStore.js'
import { Link } from 'react-router-dom';


function Store() {
  // contexto que almacena el listado de productos
  const {productos} = useProductos()

  //bjeto que almacena las diferentes formas de ordenar el listado de productos
  const ordenProductos = {
    masVendidos: (a, b) => b.ventas - a.ventas,
    default: (a, b) => b.ref - a.ref
  }

  return (
    <>
    
      <div className='imagen-relleno'>
        <img src={ImagenRelleno2} alt="" />
      </div>
      <div className='contenedor-productos-mas-vendidos'> 
        <div className='titulo-seccion-productos'>
          <h2 className='titulo'>Mas Vendidos</h2>
          <Link to='/Proyecto-1-VM-Music-/store/listado-productos' className='btn-ver-mas'>ver Todos...</Link>
        </div>
        <div className='contenedor-store-card' >
        {
          productos.sort( ordenProductos[`masVendidos`] ).map((producto, index)=>{
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
      </div>
      <div className='imagen-relleno'>
        <img src={ImagenRelleno} alt="" />
      </div>
      <div className='contenedor-productos-mas-vendidos'> 
        <div className='titulo-seccion-productos'>
          <h2 className='titulo'>Novedades...</h2>
          <Link to='/Proyecto-1-VM-Music-/store/listado-productos' className='btn-ver-mas'>ver Todos...</Link>
        </div>
        <div className='contenedor-store-card' >
          {
            productos.sort( ordenProductos[`default`] ).map((producto, index)=>{
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
      </div>
    </>
  )
}

export default Store