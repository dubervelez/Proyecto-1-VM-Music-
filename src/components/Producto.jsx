import '../styles/store/producto.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function Producto({ producto, precio, cantidad, valorTotal  }) {

  return (
    <div className='contenedor-page-producto'>
			<div className='contenedor-imagenes'>
				<img src="https://cdn.shopify.com/s/files/1/0512/9116/0767/products/3eeda39d-7258-4095-bf08-008cea425230_600x.jpg?v=1605561857" alt="producto" />
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
					<button className='btn-producto' >Comprar</button>
					<button className='btn-producto' >Agregar al Carrito</button>
					<button className='btn-favoritos'> <FontAwesomeIcon className='icon-favoritos' icon={faHeart} /> </button>
				</div>
			</div>
		</div>
  )
}

export default Producto