import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/store/cardStore.scss'
import { useCarroCompras } from '../context/contextStore';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CardStore({ categoria, producto, precio, estado, miniatura }) {

  const { carroCompra ,setCarroCompra } = useCarroCompras();

  // Obtención de los datos del producto al cual se le ha hecho click
  const datosCompra = (productoNombre, productoPrecio, productoImagen)=>{
    console.log("el producto es:", productoNombre, "...y el precio es: ", productoPrecio); 
    setCarroCompra((prevState) => {
      return [prevState[0], { ...prevState[1], 
        nombreProducto: productoNombre, 
        precio:         productoPrecio,
        cantidad:       1,
        valorTotal:     productoPrecio,
        imagen:         productoImagen,
        caracteristicas: ["caracteristicas1", 'caracteristicas2','caracteristicas3','caracteristicas4', 'caracteristicas5' ]
      }];
    }) 
  }

  // Actualización de la cantidad almacenada en el carrito
  const cantidadCarrito = ()=>{
    setCarroCompra((prevState) => {
      return [{ ...prevState[0], cantidadCarrito: carroCompra[0].cantidadCarrito + 1  }, prevState[1]];
    }) 
  }

  return (
    <div className='contenedor-card' >
        <Link to={'/Proyecto-1-VM-Music-/store/producto'}>
          <div className='contenedor-imagen' onClick={()=>{datosCompra(producto, precio, miniatura)} }>
              <img className='imagen' src={`${miniatura}`} alt="miniatura-producto" />
          </div>
        </Link>
        <div className='card-contenido'>
            <p className='contenido-categoria'>{categoria}</p>
            <p className='contenido-producto'>{producto}</p>
            <p className='contenido-precio'>{precio}</p>
            <div className='contenido-disponibilidad'>
              <p className='disponibilidad'>{estado}</p>
              <span className='span-agregar-carro'><FontAwesomeIcon className='icon-agregar-carro' icon={faCartPlus} onClick={cantidadCarrito} /></span> 
            </div>
        </div>
    </div>
  )
}

export default CardStore