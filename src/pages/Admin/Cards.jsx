import Layout from './Layout'
import '../../styles/admin/cards.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faTrash } from '@fortawesome/free-solid-svg-icons';
import Cards from '../../components/Cards';
import { useState, useRef, useEffect } from 'react';
import { nuevaCard, obtenerCards } from '../../utils/Api';
import { ToastContainer, toast } from 'react-toastify';
import { useCardsData } from '../../context/contextCards';



function AdminCards() {
  const formCards = useRef(null)
  const {cardsData, setCardsData} = useCardsData();

  useEffect(() => {
    obtenerCards(
      (response)=>{
        setCardsData(response.data)
      },
      (error)=>{
        console.error(error);
      }
    )
  }, [])

  const submitFormCards = (e)=>{
    e.preventDefault();
    let datosCards = {}
    const datosFormulario = new FormData(formCards.current) 
    datosFormulario.forEach((value, key) => {
      datosCards[key] = value
    });
    nuevaCard(datosCards, 
      (response)=>{
        toast.success('Card creada con exito',{theme:'dark'})
      },
      (error)=>{
        toast.error('Error en la creacion de la Card',{theme:'dark'})
      });
  }

  return (
    <Layout>
      <section className='contenedor-admin-cards'>
        <h1 className='titulo-adm-card'>Administracion CARDS</h1>
        <form ref={formCards} className='form-cards' onSubmit={submitFormCards}>
					<div className='titulo-form-cards'>
						<h2 className='titulo-form--h2'>Crear Nueva Cards</h2>
						<FontAwesomeIcon className='titulo-form--icon' icon={faMusic} />
					</div>
          <div className='contenedor-artista-cancion'>
						<label className='label-input' htmlFor="artista">
            	<input required type="text" name="artista"  className='input-card-text' placeholder='Artista'  />
						</label>
						<label className='label-input' htmlFor="cancion">
            	<input type="text" name="cancion" className='input-card-text' placeholder='Canción' required />
						</label>
          </div>
					<div className='otros-input'>
						<label className='label-input' htmlFor="imagen">
							<input type="url" name="imagen" className='input-card-text' placeholder='ingrese link de imagen http://...' required />
						</label>
						<label className='label-input' htmlFor="genero">
							<input type="text" name="genero" className='input-card-text' placeholder='Genero' required />
						</label>
						<label className='label-input' htmlFor="album">
							<input type="text" name="album" className='input-card-text' placeholder='Albun' required />
						</label>
						<label className='label-input' htmlFor="fecha">
							<input type="text" name="fecha" className='input-card-text' placeholder='fecha de lanzamiento' required />
						</label>
					</div>
          
          <button className='button-form-cards' type='submit' >CREAR CARDS</button>
          <ToastContainer position="bottom-left" autoClose={1000}  />
        </form>
        <div>
          <TablaDatos></TablaDatos>
        </div>
      </section>
    </Layout>
  )
}


const TablaDatos = ()=>{
  const {cardsData} = useCardsData();
  let contador = 1;
  return(
    <div className="contenedor-tabla-cards">
      <h2 className="titulo-tabla">Card No.</h2>
      <h2 className="titulo-tabla">Artista</h2>
      <h2 className="titulo-tabla">Cancion</h2>
      <h2 className="titulo-tabla">Genero</h2>
      <h2 className="titulo-tabla">Fecha</h2>
      <h2 className="titulo-tabla">Acciones</h2>

      { cardsData.map((dato, i)=>{
        return(
          <>
            <p key={i} className="celda-tabla">{contador++}</p>
            <p className="celda-tabla">{dato.artista}</p>
            <p className="celda-tabla">{dato.cancion}</p>
            <p className="celda-tabla">{dato.genero}</p>
            <p className="celda-tabla">{dato.fecha}</p>
            <div className='celda-tabla'>
             <span className='icon-delete'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span> 
            </div>
          </>
        )
      }) }
      
    </div>
  )
}

export default AdminCards