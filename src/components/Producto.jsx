import '../styles/store/producto.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useCarroCompras } from '../context/contextStore'
import { nanoid } from 'nanoid';



function Producto({ producto, precio, cantidad, valorTotal, imagen, listaCaracteristicas, sumarCantidad, restarCantidad  }) {
  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

	const {carroCompra, setCarroCompra} = useCarroCompras();
	const [descripcionactiva, setDescripcionActiva ] = useState(false);
	
  const agregarAlCarrito = (numAgregados)=>{
	let cantidadProductos = numAgregados;
    setCarroCompra((prevState)=>{
	  return [
        { ...prevState[0], cantidadCarrito: carroCompra[0].cantidadCarrito + cantidadProductos  }, 
        {...prevState[1]},
        {...prevState[2], ['producto' + carroCompra[3].cantidadProductos]  : {producto: carroCompra[1].nombreProducto, precio: carroCompra[1].precio, imagen: carroCompra[1].imagen, cantidad: cantidadProductos}  },
		{ ...prevState[3], cantidadProductos: prevState[3].cantidadProductos + 1}
      ];
    })
  }

  
	
  return (
    <div className='contenedor-page-producto'>
			<div className='contenedor-columna-1'>
				<div className='contenedor-imagenes'>
					<div className='btn-image-miniatura'>
						<img src={`${imagen}`} alt="miniatur producto" />
					</div>
					<img src={`${imagen}`} alt="producto" title={`VM Music Store - ${producto}`}/>
				</div>
				<div className= {`contenedor-descripcion-producto ${descripcionactiva && 'activo'}`}>
					<h3 className='caracteristicas-titulo' >Descripcion <FontAwesomeIcon className='icon-descripcion-desplegar' icon={faPlus} 
						onClick={()=>{descripcionactiva ? setDescripcionActiva(false):setDescripcionActiva(true)}} /> 
					</h3>
					<p className='caracteristicas-nombre'>{producto}</p>
					<div className='caracteristicas-producto'>
						<ul className='caracteristicas-ul'>
							{
								listaCaracteristicas && listaCaracteristicas.map((el)=>{
									return <li key={nanoid()} className='caracteristicas-ul--li'>{el}</li>
								})
							}
						</ul>
					</div>
				</div>
			</div>
			<div className='contenedor-info-producto'>
				<h2 className='info-nombre'>{producto}</h2>
				<img title='medios de pago VM Music Store' className='img-medios-pago' src="https://buy4me.com.co/wp-content/uploads/2022/08/banner-medios-de-pago.png" alt="banner de medios de pago" />
				<div className='contenedor-precios'>
					<p className='info-precio'>Precio Unitario: <span className='info-precio-span'>{precio}</span> </p>
					<div className='info-cantidad'>
						<span className='label'>Cantidad:</span>
						<span className='btn-cantidad' onClick={restarCantidad}>-</span>
						<span className='span-cantidad'>{cantidad}</span>
						<span className='btn-cantidad' onClick={sumarCantidad}>+</span>
					</div>
					<p className='info-valorTotal'> {valorTotal}</p>
				</div>
				<div className='btn-acciones-producto'>
					<button className='btn-producto' >Comprar </button>
					<button className='btn-producto' onClick={()=>{agregarAlCarrito(cantidad)}}> <span className='btn-agregar'>Agregar <FontAwesomeIcon className='icon' icon={faCartShopping} /></span> <span className='btn-icono-cart' ><FontAwesomeIcon icon={faCartShopping} /></span> </button>
					<button className='btn-favoritos' > <FontAwesomeIcon className='icon-favoritos' icon={faHeart} /> </button>
				</div>
			</div>
		</div>
  )
}

export default Producto