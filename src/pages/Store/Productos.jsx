import React, { useRef } from 'react'
import '../../styles/store/AllProductos.scss'
import CardStore from '../../components/CardStore'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { obtenerProductos } from '../../utils/ApiStore';


function Productos() {
    
  const [products, setProducts] = useState([]);
  const [filtrosActivos, setFiltrosActivos] = useState([])
  const referencia = React.useRef()
  const [expandir, setExpandir] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productosXPagina, setProductosXPagina] = useState(4);
  
  // obtener productos de la base de datos
  useEffect(() => {
    const cargaDatos =  async ()=>{
      await obtenerProductos(
        (response)=>{
          setProducts(response.data)
        },
        (error)=>{
          console.error(error)
        }
      )
    }
    cargaDatos();
  }, [])

  
  //Filtracion de productos
  const palabrasClaves = new RegExp(filtrosActivos.join('|'))
  const productosFiltrados = products.filter((item) => palabrasClaves.test(item.categoria))
  // numero de paginas a mostrar
  const numPagina = Math.ceil(productosFiltrados.length / productosXPagina);
  // funcion para cambiar de pagina, se ejecuta con el evento clic en el boton de paginación
  const cambiarPagina = (page)=>(setCurrentPage(page))
  // Creacion de array para mostrar en componente
  const productosMostrados = productosFiltrados.slice((currentPage - 1) * productosXPagina, currentPage * productosXPagina);


  const añadirFiltros = (event)=>{
   if ( event.target.checked){
     setFiltrosActivos([...filtrosActivos, `${event.target.value}`]) 
   }else{
    const filtroActualizado = filtrosActivos.filter((item) => item !== `${event.target.value}`);
    setFiltrosActivos(filtroActualizado)
   }  
  }

  const eliminarFiltro = (filtro)=>{
    const filtroActualizado = filtrosActivos.filter((item) => item !== `${filtro}`);
    setFiltrosActivos(filtroActualizado)
    console.log('eliminado el filtro:', filtro)
  }

  const [ordenProductos, setOrdenProductos] = useState('default')
  //pendiente 
  const comparaciones = {
    precioAsc: (a, b) => a.precio - b.precio,
    precioDes: (a, b) => b.precio - a.precio,
    masVendidos: (a, b) => b.ventas - a.ventas,
    default: (a, b) => a.producto.localeCompare(b.producto)
  }
  const ordenado = products.sort( comparaciones[`${ordenProductos}`] );
 

  return (
    <div className='contenedor-page-allproductos'>
      <div className='contenedor-colleccion-productos'>
        <div className='contenedor-col-filtro'>
          <div className='contenedor-filtros-activos'>
            <h2 className='titulo-filtros'>Filtros</h2>
            <ul className='lista-filtro-activos'>
              {
                filtrosActivos &&  <Filtros listaFiltros={filtrosActivos} eliminarFiltro={ eliminarFiltro }/>
              }
            </ul>
          </div>
          <div className='contenedor-filtros-generos'>
            <h3 className='titulo-filtro-genero'  >Generos <FontAwesomeIcon className={`icon-desplegar-filtro ${expandir && 'activo'}`} icon={ faCaretDown } onClick={()=>(expandir ? setExpandir(false) :setExpandir(true))} /></h3>
            <div className={`filtros-generos ${expandir && 'activo'}`} ref={referencia} style={{height: expandir ? `${referencia.current.scrollHeight}px` : '0px',}}>
              <label className='label-checkbox' htmlFor="Urbano"> 
                <input className='input-checkbox' type="checkbox" name="Urbano" value={'Urbano'} onChange={añadirFiltros} /> Urbano
              </label>
              <label className='label-checkbox' htmlFor="Vallenato"> 
                <input className='input-checkbox' type="checkbox" name="Vallenato" value={'Vallenato'}  onChange={añadirFiltros} /> Vallenato
              </label>
              <label className='label-checkbox' htmlFor="Pop"> 
                <input className='input-checkbox' type="checkbox" name="Pop" value={'Pop'} onChange={añadirFiltros} /> Pop
              </label>
              <label className='label-checkbox' htmlFor="Bachata"> 
                <input className='input-checkbox' type="checkbox" name="Bachata" value={'Bachata'} onChange={añadirFiltros} /> Bachata
              </label>
              <label className='label-checkbox' htmlFor="Rap"> 
                <input className='input-checkbox' type="checkbox" name="Rap" value={'Rap'} onChange={añadirFiltros} /> Rap
              </label>
              <label className='label-checkbox' htmlFor="Salsa"> 
                <input className='input-checkbox' type="checkbox" name="Salsa" value={'Salsa'} onChange={añadirFiltros}  /> Salsa
              </label>
            </div>
          </div>
        </div>
        <div className='contenedor-col-productos'>
          <h1 className='titulo-categoria'>Categoria</h1>
          <div className='contenedor-informacion-filtros'>
            <p>Mostrando  {(currentPage - 1) * productosXPagina + 1 } - {Math.min(currentPage * productosXPagina, productosFiltrados.length )} de { productosFiltrados.length} productos</p>
            <div>
              <label className='label-mostrar-paginas' htmlFor="paginas">mostrar: </label>
              <select className='select-mostrar-paginas' name="paginas" onChange={(event)=>{setProductosXPagina(event.target.value); cambiarPagina(1) }}>
                <option value={4} >20 por paginas</option>
                <option value={8}>28 por paginas</option>
                <option value={12}>36 por paginas</option>
              </select>
            </div>
            <div>
              <label className='label-mostrar-paginas' htmlFor="paginas">ordenar por: </label>
              <select className='select-mostrar-paginas' name="paginas" onChange={(event)=>{setOrdenProductos(event.target.value) }}>
                <option value="default">Alfabeticamente A-Z</option>
                <option value="masVendidos">Más Vendidos</option>
                <option value="precioAsc">precio: menor a mayor</option>
                <option value="precioDes">precio: mayor a menor</option>
              </select>
            </div>
            
          </div>
          <div className='listado-productos-all'>
            { 
              productosMostrados.map((product) => {
                return (
                  <CardStore
                    key={nanoid()} 
                      categoria={product.categoria} 
                      producto={product.producto} 
                      precio={product.precio}
                      estado={product.estado}
                      miniatura={product.miniatura}
                  />
                )
              })
            }
          </div>
          <div className='contenedor-paginacion'>
            {Array.from(Array(numPagina).keys()).map(pagina => (
              <button className='btn-paginacion' key={nanoid()}
                onClick={() => cambiarPagina(pagina + 1)}
                disabled={pagina + 1 === currentPage}
              >
                {pagina + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


const Filtros = ({ listaFiltros, eliminarFiltro})=>{


  return(
    listaFiltros.map((el)=>{
      return(
        <div className='item-listado-filtros' key={ nanoid() }>
          <li className='filtros-activos'>{el}</li>
          <span className='span-icon-quitar'>
            <FontAwesomeIcon className='icon-quitar-filtro' icon={ faXmark } onClick={()=> eliminarFiltro(el) } /> 
          </span>
        </div>
        
      )
    })
  )
}

export default Productos