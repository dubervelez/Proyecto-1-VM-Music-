import React, { useEffect } from 'react'
import Layout from '../Store/Layout'
import CardStore from '../../components/CardStore'
import '../../styles/store/store.scss'
import ImagenRelleno from '../../Assets/images/relleno.jpg'
import ImagenRelleno2 from '../../Assets/images/relleno-2.jpg'
import { obtenerProductos } from '../../utils/ApiStore.js'
import { useState } from 'react'
import { nanoid } from 'nanoid';
import { useCarroCompras } from '../../context/contextStore'
import { Link } from 'react-router-dom';

function Store() {
  // hook que almacena los datos de la base de datos - pendiente cambia por un context
  const [productosData, setProductosData] = useState([])
  

  const datadePrueba = {
    "producto": "amplificador Orange",
    "categoria": "Amplificadores",
    "precio": "275.500",
    "stock": "4",
    "estado": "ultimas existencias",
  "miniatura": "https://cdn.shopify.com/s/files/1/0512/9116/0767/products/2db5b8b5-9f97-4eb1-9762-a3f407a81158_200x.jpg?v=1605561857"
  };

  const {carroCompra, setCarroCompras} = useCarroCompras();

  useEffect(() => {
    const cargaDatos =  async ()=>{
      await obtenerProductos(
        (response)=>{
          setProductosData(response.data)
        },
        (error)=>{
          console.error(error)
        }
      )
    }
    cargaDatos();
  }, [])
  
  // pendiente funcionalidad para guardar los datos del producto al hacer clic en la card
  const [first, setfirst] = useState(2)
  const datosCompra = (producto, precio)=>{
    console.log("el producto es:", producto, "...y el precio es: ", precio);
    setfirst(25)
    console.log(first)
  }
  return (
    <Layout productosSeleccionados='1'>
      <div className='imagen-relleno'>
        <img src={ImagenRelleno2} alt="" />
      </div>
      <div className='contenedor-productos-mas-vendidos'> 
        <h2 className='titulo'>Mas Vendidos</h2>
        <div className='contenedor-store-card' >
        {
          productosData.map((producto, index)=>{
            return(  
            <Link key={nanoid()} className='link-producto' to="/Proyecto-1-VM-Music-/store/producto" >
              <CardStore 
                categoria={producto.categoria} 
                producto={producto.producto} 
                precio={producto.precio}
                estado={producto.estado}
                miniatura={producto.miniatura}
                clickProducto={datosCompra}
                />
            </Link>) 
          })
        }
        </div>
        <button className='btn-ver-mas'>ver Todos...</button>
      </div>
      <div className='imagen-relleno'>
        <img src={ImagenRelleno} alt="" />
      </div>
      <div className='contenedor-productos-mas-vendidos'> 
        <h2 className='titulo'>Novedades...</h2>
        <div className='contenedor-store-card' >
          <Link className='link-producto' to="/Proyecto-1-VM-Music-/store/producto">
            <CardStore
              categoria={datadePrueba.categoria} 
              producto={datadePrueba.producto} 
              precio={datadePrueba.precio}
              estado={datadePrueba.estado}
              miniatura={datadePrueba.miniatura}
              />
          </Link>
          <CardStore
            categoria={datadePrueba.categoria} 
            producto={datadePrueba.producto} 
            precio={datadePrueba.precio}
            estado={datadePrueba.estado}
            miniatura={datadePrueba.miniatura}
            />
          <CardStore 
            categoria={datadePrueba.categoria} 
            producto={datadePrueba.producto} 
            precio={datadePrueba.precio}
            estado={datadePrueba.estado}
            miniatura='https://cdn.shopify.com/s/files/1/0512/9116/0767/products/rumble112cabinet_1_200x.png?v=1605549610'
            />
          <CardStore
            categoria={datadePrueba.categoria} 
            producto={datadePrueba.producto} 
            precio={datadePrueba.precio}
            estado={datadePrueba.estado}
            miniatura='https://cdn.shopify.com/s/files/1/0512/9116/0767/products/preview2_2_200x.jpg?v=1605553028'
            />
          <CardStore
            categoria={datadePrueba.categoria} 
            producto={datadePrueba.producto} 
            precio={datadePrueba.precio}
            estado={datadePrueba.estado}
            miniatura="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/thumb_200x.jpg?v=1605551015"
            />
          
        </div>
        <button className='btn-ver-mas'>ver Todos...</button>
      </div>
    </Layout>
  )
}

export default Store