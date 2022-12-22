import Layout from './Layout'
import '../../styles/admin/cards.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Cards from '../../components/Cards';
import { width } from '@mui/system';

function AdminCards() {
  return (
    <Layout>
      <section className='contenedor-admin-cards'>
        <h1 className='titulo-adm-card'>Administracion CARDS</h1>
        <form className='form-cards'>
					<div className='titulo-form-cards'>
						<h2 className='titulo-form--h2'>Crear Nueva Cards</h2>
						<FontAwesomeIcon className='titulo-form--icon' icon={faMusic} />
					</div>
          <div className='contenedor-artista-cancion'>
						<label className='label-input' htmlFor="artista">
            	<input type="text" name="artista"  className='input-card-text' placeholder='Artista'/>
						</label>
						<label className='label-input' htmlFor="cancion">
            	<input type="text" name="cancion" className='input-card-text' placeholder='Canción'/>
						</label>
          </div>
					<div className='otros-input'>
						<label className='label-input' htmlFor="genero">
							<input type="text" name="genero" className='input-card-text' placeholder='Genero'/>
						</label>
						<label className='label-input' htmlFor="album">
							<input type="text" name="album" className='input-card-text' placeholder='Albun' />
						</label>
						<label className='label-input' htmlFor="fecha">
							<input type="text" name="fecha" className='input-card-text' placeholder='fecha de lanzamiento' />
						</label>
					</div>
          
          <button className='button-form-cards'>CREAR CARDS</button>
        </form>

				<div >
					<Cards></Cards>
				</div>
      </section>
    </Layout>
  )
}

export default AdminCards