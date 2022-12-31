import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/store/cardStore.scss'


function CardStore({ categoria, producto, precio, estado, miniatura }) {


  return (
    <div className='contenedor-card'>
        <div className='contenedor-imagen'>
            <img className='imagen' src={`${miniatura}`} alt="miniatura-producto" />
        </div>
        <div className='card-contenido'>
            <p className='contenido-categoria'>{categoria}</p>
            <p className='contenido-producto'>{producto}</p>
            <p className='contenido-precio'>{precio}</p>
            <div className='contenido-disponibilidad'>
                <p className='disponibilidad'>{estado}</p>
                <span className='span-agregar-carro'><FontAwesomeIcon className='icon-agregar-carro' icon={faCartPlus} /></span> 
            </div>
        </div>
    </div>
  )
}

export default CardStore