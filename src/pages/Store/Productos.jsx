import React from 'react'
import '../../styles/store/AllProductos.scss'
import CardStore from '../../components/CardStore'
import { useState } from 'react';
import { nanoid } from 'nanoid';

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

  const [currentPage, setCurrentPage] = useState(1);

  const numPages = Math.ceil(products.length / 4);

  console.log(numPages)
  console.log(products.length)

  function cambiarPagina(page) {
    setCurrentPage(page);
  }

  const valor = Array.from(Array(numPages).keys())

  const productsOnCurrentPage = products.slice((currentPage - 1) * 4, currentPage * 4);
  console.log(valor)

  return (
    <div className='contenedor-page-allproductos'>
      <div className='contenedor-colleccion-productos'>
        <div className='contenedor-col-filtro'>
          filtro
        </div>
        <div className='contenedor-col-productos'>
          <h1 className='titulo-categoria'>Categoria</h1>
          <div className='contenedor-informacion-filtros'>
            <p>Mostrando 1 - 48 de 504 productos</p>
            <p>Mostrar 28 por paginas</p>
            <p>ordenar por: mas vendidos</p>
          </div>
          <div className='listado-productos-all'>
            { 
              productsOnCurrentPage.map((product) => {
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
            {Array.from(Array(numPages).keys()).map(page => (
              <button className='btn-paginacion'
                key={page}
                onClick={() => cambiarPagina(page + 1)}
                disabled={page + 1 === currentPage}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productos