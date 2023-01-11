import React, { useEffect } from 'react'
import Layout from '../Layout'
import '../../../styles/admin/productos.scss'
import { useRef } from 'react'
import iconEditar from '../../../Assets/images/iconEditar.png'
import iconCrear from '../../../Assets/images/iconCrear.png'
import iconEliminar from '../../../Assets/images/iconEliminar.png'
import iconBuscar from '../../../Assets/images/iconBuscar.png'
import { useState } from 'react'
import { crearProducto, eliminarProducto, obtenerProductos } from '../../../utils/ApiStore'
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function AdminProductos() {
  const [accionForm, setAccionForm] = useState('true')
  const [productosAll, setProductosAll] = useState([])
  const [defaultValue, setDefaultValue] = useState({
    Ref: "",
    producto: "",
    artista: "",
    precio: "",
    oferta: "0 %",
    stock: "",
    caracteristicas: "",
    miniatura: ""
  })

  useEffect(() => {
    const cargaDatos =  async ()=>{
      await obtenerProductos(
        (response)=>{
          setProductosAll(response.data)
        },
        (error)=>{
          console.error(error)
        }
      )
    }
    cargaDatos();
  }, [])

  const formulario = useRef()
  const enviarFormulario = (e)=>{
    e.preventDefault()
    let datosProucto = {};
    const datosFormulario = new FormData(formulario.current)
    datosFormulario.forEach((value, key)=>{
      datosProucto[key] = value
    });
    
    crearProducto( 
      datosProucto,
      (response)=> ( toast.success('producto creado con exito', { theme:'dark' }) ),
      (err)=> toast.error('Error al crear nuevo producto', { theme:'dark' }) 
    )
  }

  const [busqueda, setBusqueda] = useState('')
  const productoFiltrado = productosAll.filter((element) =>  element['producto'].toUpperCase().includes(busqueda.toUpperCase()))

 
  const quitarProducto = (producto)=>{
    
    eliminarProducto( producto, 
      ()=> toast.success('producto eliminado con exito', { theme:'dark' }),
      ()=> toast.error('Error al crear nuevo producto', { theme:'dark' })
    )

  }

  return (
    <Layout>
      <div>
        <h1 className='titulo-admin-productos'>VM-Music - Productos</h1>
        <div className='contenedor-acciones-store'>
          <div className='btn-accion-form'>
            <img className='imagen-accion' src={iconCrear} alt="icono" onClick={()=> setAccionForm(true) } />
          </div>
          <div className='btn-accion-form'>
            <img className='imagen-accion' src={iconEditar} alt="icono" />
          </div>
          <div className='btn-accion-form'>
            <img className='imagen-accion' src={iconEliminar} alt="icono" onClick={()=> setAccionForm(false)}  />
          </div>
        </div>
      </div>
      <form className='formulario-admin-store' ref={formulario}  onSubmit={enviarFormulario} >
        <h2 className='titulo-formulario-producto'>
          { accionForm ? "Formulario creacion de producto" : "Eliminar Producto" }
        </h2>
        <div className='contenedor-form-crear'>
        { accionForm ? (
          <>
            <Input label='referencia:' name='ref' type='number' defaultValue={defaultValue.Ref} />
            <Input label='Nombre Producto:' name='producto' defaultValue={defaultValue.producto} />
            <Input label='Artista:' name='Artista' defaultValue={defaultValue.artista} />
            <Input label='Precio: $' name='precio' type='number' defaultValue={defaultValue.precio} />
            <hr />
            <div className='contenedor-input-admin-store'>
              <select className='input-admin-store select' name="categoria">
                <option value="">Selecione una categoria</option>
                <option value="Urbano">Urbano</option>
                <option value="Rap">Rap</option>
                <option value="Vallenato">Vallenato</option>
                <option value="Salsa">Salsa</option>
              </select>
            </div>
            <Input label='%Oferta:' name='oferta' defaultValue={defaultValue.oferta}/>
            <Input label='stock:' name='stock' type='number' defaultValue={defaultValue.stock} />
            <div className='contenedor-input-admin-store'>
              <select className='input-admin-store select' name="estado">
                <option value="">Selecione estado del producto</option>
                <option value="Disponible">Disponible</option>
                <option value="Ultimas Existencia">Ultimas Existencia</option>
                <option value="Agotado">Agotado</option>
              </select>
            </div>
            <Input label='Caracteristicas' name='Caracteristicas' defaultValue={defaultValue.caracteristicas} />
            <Input label='miniatura' name='miniatura' type='url' defaultValue={defaultValue.miniatura} />
            <button className='button-form-cards' type='submit' >Crear Producto</button>
          </>
        ):(
          <>
            <div className='contenedor-input-admin-store'>
              <input required type='text' name='eliminar' autoComplete='off' className='input-admin-store' onChange={(e)=> setBusqueda(e.target.value) }  />
              <label className='user-label'>Buscar Producto....</label>
            </div>
            <div className='listado-productos-buscados'>
              {
                busqueda && ( <BusquedaProductos listado={ productoFiltrado } clicEliminar={quitarProducto} />)
              }
            </div>
          </>
        ) 
        }
          </div>
          <ToastContainer position="bottom-left" autoClose={1000}  />
      </form>
      <div className='contenedor-tabla-productos'>
        <h3 className='titulo-tabla-productos'>Tabla de productos</h3>
        <div className='tabla-productos' >
        <p className='item-tabla titulo'>ref</p>
        <p className='item-tabla titulo'>Productos</p>
        <p className='item-tabla titulo'>Precio</p>
        <p className='item-tabla titulo'>Ventas</p>
        <p className='item-tabla titulo'>Stock</p>
        <p className='item-tabla titulo'>Estado</p>
        </div>
          { 
            Object.values(productosAll).map((value, index)=> {
              return (
                <div className='tabla-productos' key={nanoid()}>
                    <p className='item-tabla'>{value.ref}</p>
                    <p className='item-tabla'>{value.producto}</p>
                    <p className='item-tabla'>{value.precio}</p>
                    <p className='item-tabla'>{value.ventas}</p>
                    <p className='item-tabla'>{value.stock}</p>
                    <p className='item-tabla'>{value.estado}</p>
                </div>
              )}
            ) 
          }
      </div>

    </Layout>
  )
}


const Input = ({ name, label, type='text', defaultValue })=>{
  return(
    <div className='contenedor-input-admin-store'>
      <input required type={type} name={name} autoComplete='off' className='input-admin-store' defaultValue={defaultValue}  />
      <label className='user-label'>{label}</label>
    </div>
    
    
  )
}


const BusquedaProductos = ({ listado, clicEliminar })=>{
  return( 
    <>  
      {
        !listado[0] && <p className='mensaje-coincidencias'>no se ha encontrado coincidencias...</p>
      }
    {
      Object.values(listado).map((value, index)=>{
        return(
          <div className='producto-a-eliminar'>
            <p key={nanoid()} className='item-producto-buscado'>{value.producto}</p>
            <span className='icon-eliminar' onClick={() => clicEliminar(value._id) }> <FontAwesomeIcon icon={faTrash} /> </span>
          </div>
        ) 
      })
    }
  
  </>



  )
}

export default AdminProductos