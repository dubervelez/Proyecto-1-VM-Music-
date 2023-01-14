import React, { useEffect } from 'react'
import Layout from '../Layout'
import '../../../styles/admin/productos.scss'
import { useRef } from 'react'
import iconCrear from '../../../Assets/images/iconCrear.png'
import iconBuscar from '../../../Assets/images/iconBuscar.png'
import { useState } from 'react'
import { crearProducto, eliminarProducto, obtenerProductos, editarProductos } from '../../../utils/ApiStore'
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

function AdminProductos() {
  const [accionForm, setAccionForm] = useState(true)
  const [idEditar, setIdEditar] = useState('')
  const [accionEditar, setAccionEditar] = useState(false)
  const [productosAll, setProductosAll] = useState([])
  const [defaultValue, setDefaultValue] = useState({
    Ref: "",
    producto: "",
    artista: "",
    precio: "",
    categoria: "",
    oferta: "0 %",
    stock: "",
    estado: "",
    caracteristicas: "",
    miniatura: ""
  })

  const formatearValores = ()=>{
    setAccionForm(true);
    setAccionEditar(false);
    setDefaultValue({
      Ref: "",
      producto: "",
      artista: "",
      precio: "",
      categoria: "",
      oferta: "0 %",
      stock: "",
      estado: "",
      caracteristicas: "",
      miniatura: ""
    })
  }

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
    
    if ( accionEditar ) {
      editarProductos(idEditar,datosProucto,
        (response)=> ( toast.success('producto Actualizado', { theme:'dark' }) ),
        (err)=> toast.error('Error al editar el producto', { theme:'dark' })
        )
    }else{
      crearProducto( 
        datosProucto,
        (response)=> ( toast.success('producto creado con exito', { theme:'dark' }) ),
        (err)=> toast.error('Error al crear nuevo producto', { theme:'dark' }) 
      )
    }
  }

  const [busqueda, setBusqueda] = useState('')
  const productoFiltrado = productosAll.filter((element) =>  element['producto'].toUpperCase().includes(busqueda.toUpperCase()))
 
  const quitarProducto = (producto)=>{
    
    eliminarProducto( producto, 
      ()=> toast.success('producto eliminado con exito', { theme:'dark' }),
      ()=> toast.error('Error al crear nuevo producto', { theme:'dark' })
    )

  }

  const editarProducto = (id, ref, producto, artistas, precio,categoria, oferta, stock,estado, caracteristicas, miniatura)=>{
    setBusqueda('')
    setAccionForm(true)
    setAccionEditar(true)
    setIdEditar(id)
    setDefaultValue({
      Ref: ref,
      producto: producto,
      artista: artistas,
      precio: precio,
      categoria: categoria,
      oferta: oferta,
      stock: stock,
      estado: estado,
      caracteristicas: caracteristicas,
      miniatura: miniatura
    })
  }

  return (
    <Layout>
      <div>
        <h1 className='titulo-admin-productos'>VM-Music - Productos</h1>
        <div className='contenedor-acciones-store'>
          <div className='btn-accion-form'>
            <img className='imagen-accion' src={iconCrear} alt="icono" onClick={ formatearValores } title='crear nuevo producto' />
          </div>
          <div className='btn-accion-form'>
            <img className='imagen-accion' src={iconBuscar} alt="icono" onClick={()=> setAccionForm(false)} title='editar o eliminar producto' />
          </div>
        </div>
      </div>
      <form className='formulario-admin-store' ref={formulario}  onSubmit={enviarFormulario} >
        <h2 className='titulo-formulario-producto'>
          { accionForm ?  "Formulario creacion de producto" : "Eliminar Producto" }
        </h2>
        <div className='contenedor-form-crear'>
        { accionForm ? (
          <>
            <Input label='referencia:' name='ref' type='number' defaultValue={defaultValue.Ref} />
            <Input label='Nombre Producto:' name='producto' defaultValue={defaultValue.producto} />
            <Input label='Artista:' name='artista' defaultValue={defaultValue.artista} />
            <Input label='Precio: $' name='precio' type='number' defaultValue={defaultValue.precio} />
            <hr />
            <div className='contenedor-input-admin-store'>
              <select className='input-admin-store select' name="categoria" defaultValue={defaultValue.categoria}>
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
              <select className='input-admin-store select' name="estado" defaultValue={defaultValue.estado}>
                <option value="">Selecione estado del producto</option>
                <option value="Disponible">Disponible</option>
                <option value="Ultimas Existencia">Ultimas Existencia</option>
                <option value="Agotado">Agotado</option>
              </select>
            </div>
            <Input label='Caracteristicas' name='caracteristicas' defaultValue={defaultValue.caracteristicas} />
            <Input label='miniatura' name='miniatura' type='url' defaultValue={defaultValue.miniatura} />
            { accionEditar ? <div className='btn-editar-productos'>
              <button className='button-form-cards' type='submit' > Editar Producto </button>
              <button className='button-form-cards' onClick={ formatearValores } > Cancelar </button>
            </div>: <button className='button-form-cards' type='submit' >Crear Producto</button>  }
          </>
        ):(
          <>
            <div className='contenedor-input-admin-store'>
              <input required type='text' name='eliminar' autoComplete='off' className='input-admin-store' onChange={(e)=> setBusqueda(e.target.value) }  />
              <label className='user-label'>Buscar Producto....</label>
            </div>
            <div className='listado-productos-buscados'>
              {
                busqueda && ( <BusquedaProductos listado={ productoFiltrado } clicEliminar={quitarProducto} clicEditar={editarProducto} />)
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


const BusquedaProductos = ({ listado, clicEliminar, clicEditar })=>{
  return( 
    <>  
      {
        !listado[0] && <p className='mensaje-coincidencias'>no se ha encontrado coincidencias...</p>
      }
    {
      Object.values(listado).map((value, index)=>{
        return(
          <div className='producto-a-eliminar' key={nanoid()}>
            <p  className='item-producto-buscado'>{value.producto}</p>
            <span className='icon-eliminar' onClick={() => clicEliminar(value._id) }>
               <FontAwesomeIcon icon={faTrash} />
            </span>
            <span className='icon-editar' onClick={() => clicEditar(
              value._id,
              value.ref,
              value.producto,
              value.artista,
              value.precio,
              value.categoria,
              value.oferta,
              value.stock,
              value.estado,
              value.caracteristicas,
              value.miniatura
              
              ) }>
               <FontAwesomeIcon icon={ faPen } />
            </span>
          </div>
        ) 
      })
    }
  
  </>



  )
}

export default AdminProductos