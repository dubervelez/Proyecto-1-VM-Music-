import React from 'react'
import { useCarroCompras } from '../../context/contextStore';
import '../../styles/store/miCarrito.scss'

function MiCarrito() {
    const { carroCompra ,setCarroCompra } = useCarroCompras()
		console.log()
		
  return (
    <div className='contenedor-page-mi-carrito'>
			<div className='contenedor-listado'>
			<h1 className='titulo-listado'>Mi Carrito</h1>
			{
				carroCompra[2] && (
					Object.values(carroCompra[2]).map((value, index)=>{
						return(
								<div className='listado-de-productos'>
									<div className='producto-descripcion'>
											<img className='descripcion-img' src={value.imagen} alt="foto-producto" />
											<h2 className='descripcion-nombre'> <span>{value.producto}</span>  <br /> <span className='precio'>{value.precio}</span> </h2>
									</div>
									<div className='listado-info-cantidad'>
										<span className='btn-cantidad' >-</span>
										<span className='span-cantidad'> {value.cantidad}</span>
										<span className='btn-cantidad' >+</span>
									</div>
									<div className='total-compra'>
										<p className='total-compra--p'>{value.precio * value.cantidad}</p>
									</div>
								</div>
							)
					})
				)
							
			}
			</div>
      <div className='contenedor-total-compra'>
        <div className='valor-compra'>
          <p className='valor-compra-p'>TOTAL</p>
          <p className='valor-compra-p'>1252252</p>
        </div>
        <p className='descripcion-impuestos'>Impuestos incluidos. Gastos de envío calculados en la caja</p>
        <button className='btn-comprar-carrito'>Comprar</button>
      </div>
    </div>


    
  )
}


export default MiCarrito