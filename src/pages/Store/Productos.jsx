import React, { useRef } from 'react'
import '../../styles/store/AllProductos.scss'
import CardStore from '../../components/CardStore'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons';


function Productos() {
    

  const [products, setProducts] = useState([
    {
      "producto": "CD Carlos Vives - Vives",
      "categoria": "Vallenato",
      "precio": "42000",
      "stock": "30",
      "estado": "Disponible",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/811OqtOh_3L._SL1418_1024x1024_2x_33a0a0d7-c656-47c1-a533-f3f27dd12fa7_600x.jpg?v=1590757068"
    },{
      "producto": "Karol G – Unstoppable",
      "categoria": "Urbano",
      "precio": "42900",
      "stock": "30",
      "estado": "Disponible",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/KarolG_UnstoppableCD_600x.jpg?v=1597497195"
    },{
      "producto": "Andrés Cepeda - Basado en una historia real",
      "categoria": "Pop",
      "precio": "42900",
      "stock": "30",
      "estado": "ultimas existencias",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/Andr_C3_A9s-cepeda-222_opt_400x.jpg?v=1590757535"
    },{
      "producto": "Diomedes Díaz · 30 grandes éxitos",
      "categoria": "Vallenato",
      "precio": "42900",
      "stock": "30",
      "estado": "ultimas existencias",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/img20221019_11274165_600x.jpg?v=1666196883"
    },{
      "producto": "CD Adele - 30",
      "categoria": "pop-soul",
      "precio": "64900",
      "stock": "30",
      "estado": "ultimas existencias",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/Adele_3_30_600x.jpg?v=1640122340"
    },{
      "producto": "CD Adele - 30",
      "categoria": "pop-soul",
      "precio": "64900",
      "stock": "30",
      "estado": "ultimas existencias",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/Adele_3_30_600x.jpg?v=1640122340"
    },{
      "producto": "Diomedes Díaz · 30 grandes éxitos",
      "categoria": "Vallenato",
      "precio": "42900",
      "stock": "30",
      "estado": "ultimas existencias",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/img20221019_11274165_600x.jpg?v=1666196883"
    },{
      "producto": "CD Carlos Vives - Vives",
      "categoria": "Vallenato",
      "precio": "42000",
      "stock": "30",
      "estado": "Disponible",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/811OqtOh_3L._SL1418_1024x1024_2x_33a0a0d7-c656-47c1-a533-f3f27dd12fa7_600x.jpg?v=1590757068"
    },{
      "producto": "Karol G – Unstoppable",
      "categoria": "Urbano",
      "precio": "42900",
      "stock": "30",
      "estado": "Disponible",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/KarolG_UnstoppableCD_600x.jpg?v=1597497195"
    },{
      "producto": "Andrés Cepeda - Basado en una historia real",
      "categoria": "Pop",
      "precio": "42900",
      "stock": "30",
      "estado": "ultimas existencias",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/Andr_C3_A9s-cepeda-222_opt_400x.jpg?v=1590757535"
    },{
      "producto": "Diomedes Díaz · 30 grandes éxitos",
      "categoria": "Vallenato",
      "precio": "42900",
      "stock": "30",
      "estado": "ultimas existencias",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/img20221019_11274165_600x.jpg?v=1666196883"
    },{
      "producto": "CD Adele - 30",
      "categoria": "pop-soul",
      "precio": "64900",
      "stock": "30",
      "estado": "ultimas existencias",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/Adele_3_30_600x.jpg?v=1640122340"
    },{
      "producto": "CD Adele - 30",
      "categoria": "pop-soul",
      "precio": "64900",
      "stock": "30",
      "estado": "ultimas existencias",
    "miniatura": "https://cdn.shopify.com/s/files/1/0385/1232/8844/products/Adele_3_30_600x.jpg?v=1640122340"
    }
  ]);
  const [filtrosActivos, setFiltrosActivos] = useState([])
  const referencia = React.useRef()
  const [expandir, setExpandir] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productosXPagina, setProductosXPagina] = useState(4);
  // numero de paginas a mostrar
  const numPagina = Math.ceil(products.length / productosXPagina);
  // funcion para cambiar de pagina, se ejecuta con el evento clic en el boton de paginación
  const cambiarPagina = (page)=>(setCurrentPage(page))
  // Creacion de array para mostrar en componente
  const productosMostrados = products.slice((currentPage - 1) * productosXPagina, currentPage * productosXPagina);

  const añadirFiltros = (event)=>{
   if ( event.target.checked){
     setFiltrosActivos([...filtrosActivos, `${event.target.value}`]) 
   }else{
    const filtroActualizado = filtrosActivos.filter((item) => item !== `${event.target.value}`);
    setFiltrosActivos(filtroActualizado)
    console.log('desactivado', event.target.value)
   }  
  }

  return (
    <div className='contenedor-page-allproductos'>
      <div className='contenedor-colleccion-productos'>
        <div className='contenedor-col-filtro'>
          <div className='contenedor-filtros-activos'>
            <h2 className='titulo-filtros'>Filtros</h2>
            <ul className='lista-filtro-activos'>
              {
                filtrosActivos && (
                  filtrosActivos.map((el)=>{
                    return(
                      <div className='item-listado-filtros' key={ nanoid() }>
                        <li className='filtros-activos'>{el}</li>
                        <span className='span-icon-quitar'><FontAwesomeIcon className='icon-quitar-filtro' icon={ faXmark } /> </span>
                      </div>
                      
                    )
                  })
                )
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
            <p>Mostrando  {(currentPage - 1) * productosXPagina + 1 } - {Math.min(currentPage * productosXPagina, products.length )} de { products.length} productos</p>
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
              <select className='select-mostrar-paginas' name="paginas">
                <option value="">Ultimos Agregados</option>
                <option value="">Más Vendidos</option>
                <option value="">precio: menor a mayor</option>
                <option value="">precio: mayor a menor</option>
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

export default Productos