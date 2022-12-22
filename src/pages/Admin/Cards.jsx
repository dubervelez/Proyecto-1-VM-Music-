import Layout from './Layout'
import '../../styles/admin/cards.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Cards from '../../components/Cards';
import { useState, useRef } from 'react';
import { nuevaCard } from '../../utils/Api';
import { ToastContainer, toast } from 'react-toastify';


function AdminCards() {
  const formCards = useRef(null)
  

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

				<div >
					<Cards></Cards>
				</div>
      </section>
    </Layout>
  )
}

export default AdminCards