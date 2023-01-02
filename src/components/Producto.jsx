import '../styles/store/producto.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faMoneyCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useCarroCompras } from '../context/contextStore'

function Producto({ producto, precio, cantidad, valorTotal, imagen  }) {
	const {carroCompra, setCarroCompras} = useCarroCompras();
	const [descripcionactiva, setDescripcionActiva ] = useState(false);
	
  return (
    <div className='contenedor-page-producto'>
			<div className='contenedor-columna-1'>
				<div className='contenedor-imagenes'>
					<div className='btn-image-miniatura'>
					<img src="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/3eeda39d-7258-4095-bf08-008cea425230_600x.jpg?v=1605561857" alt="producto" />
					<img src="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/3eeda39d-7258-4095-bf08-008cea425230_600x.jpg?v=1605561857" alt="producto" />
					<img src="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/3eeda39d-7258-4095-bf08-008cea425230_600x.jpg?v=1605561857" alt="producto" />
					</div>
					<img src={imagen} alt="producto" />
				</div>
				<div className= {`contenedor-descripcion-producto ${descripcionactiva && 'activo'}`}>
					<h3 className='caracteristicas-titulo' >Descripcion <FontAwesomeIcon className='icon-descripcion-desplegar' icon={faPlus} 
						onClick={()=>{descripcionactiva ? setDescripcionActiva(false):setDescripcionActiva(true)}} /> 
					</h3>
					<p className='caracteristicas-nombre'>{producto}</p>
					<div className='caracteristicas-producto'>
						<ul className='caracteristicas-ul'>
							<li className='caracteristicas-ul--li'>Parlante inalámbrico </li>
							<li className='caracteristicas-ul--li'>Modelo S-101</li>
							<li className='caracteristicas-ul--li'>Color blanco</li>
							<li className='caracteristicas-ul--li'>Con entrada auxiliar 3.5 mm</li>
							<li className='caracteristicas-ul--li'>Entrada USB</li>
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
						<span className='btn-cantidad'>-</span>
						<span className='span-cantidad'>{cantidad}</span>
						<span className='btn-cantidad'>+</span>
					</div>
					<p className='info-valorTotal'> {valorTotal}</p>
				</div>
				<div className='btn-acciones-producto'>
					<button className='btn-producto' >Comprar </button>
					<button className='btn-producto' > <span className='btn-agregar'>Agregar <FontAwesomeIcon className='icon' icon={faCartShopping} /></span> <span className='btn-icono-cart' ><FontAwesomeIcon icon={faCartShopping} /></span> </button>
					<button className='btn-favoritos'> <FontAwesomeIcon className='icon-favoritos' icon={faHeart} /> </button>
				</div>
			</div>
		</div>
  )
}

export default Producto