import { nanoid } from 'nanoid';
import { useCarroCompras, useProductos } from '../../context/contextStore';
import '../../styles/store/miCarrito.scss'
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { actualizarVentas, crearCompra, editarProductos } from '../../utils/ApiStore';
import { sumarCantidad, restarCantidad } from '../../funtions/funcionesReutilizables';


function MiCarrito() {
  const {productos, setProductos} = useProductos()
  const { carroCompra ,setCarroCompra } = useCarroCompras()
  const [openDialogo, setOpenDialogo] = useState(false);
  let valorTotal = 0
  

  
  
  
  const ComprarProductos = ()=>{
    setOpenDialogo(false)
    crearCompra(carroCompra, valorTotal, 
      (response)=>{
        toast.success('Compra Realizada con exito',{theme:'dark', position:'bottom-center'})
      },
      (err)=>{
        toast.error('Error al realizar la compra',{theme:'dark', position:'bottom-center'})
      }
    )
    Object.values(carroCompra[2]).map((item)=>{
      const modificado = productos.find(value => value.producto === item.producto )
      const { ventas, ...rest } = modificado
      const updatedProducto = { ventas: modificado.ventas + item.cantidad , ...rest };
      actualizarVentas(updatedProducto,
        (response)=> ( console.log('se edito el valor venta del producto', updatedProducto.producto) ),
        (err)=> console.error(err)
      )
      
    })

  }

  
  return (
    <div className='contenedor-page-mi-carrito'>
			<div className='contenedor-listado'>
			  <h1 className='titulo-listado'>Mi Carrito</h1>
			{
				carroCompra[2] && (
          Object.values(carroCompra[2]).map((value, index)=>{
            valorTotal = valorTotal + (value.precio * value.cantidad);
						return(
								<div key={nanoid()} className='listado-de-productos'>
									<div className='producto-descripcion'>
											<img className='descripcion-img' src={value.imagen} alt="foto-producto" />
											<h2 className='descripcion-nombre'> <span>{value.producto}</span>  <br /> <span className='precio'>{value.precio}</span> </h2>
									</div>
									<div className='listado-info-cantidad'>
										<span className='btn-cantidad' onClick={()=>{restarCantidad(index, value.cantidad, carroCompra, setCarroCompra )}} >-</span>
										<span className='span-cantidad'> {value.cantidad}</span>
										<span className='btn-cantidad' onClick={()=>{sumarCantidad(index, value.cantidad, carroCompra, setCarroCompra)}} >+</span>
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
          <p className='valor-compra-p'>{valorTotal}</p>
        </div>
        <p className='descripcion-impuestos'>Impuestos incluidos. Gastos de envío calculados en la caja</p>
        <button className='btn-comprar-carrito' onClick={()=>{ setOpenDialogo(true) }}>Comprar</button>
      </div>
      <Dialog open={openDialogo} aria-labelledby="alert-dialog-title" >
        <DialogTitle id="alert-dialog-title">
        {"¿Esta seguro de comprar estos productos?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={()=>{setOpenDialogo(false)}} variant="outlined" color="error">Cancelar</Button>
          <Button onClick={ComprarProductos} autoFocus variant="outlined" color="success">Aceptar</Button>
        </DialogActions>
      </Dialog>
      <ToastContainer position="bottom-left" autoClose={1000}  />
    </div>

  )
}


export default MiCarrito