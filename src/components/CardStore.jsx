import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/store/cardStore.scss'


function CardStore() {


  return (
    <div className='contenedor-card'>
        <div className='contenedor-imagen'>
            <img className='imagen' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUgUc_VB5UC8Wk8dURh_oYHw2Q6QG0f0amA&usqp=CAU" alt="miniatura-producto" />
        </div>
        <div className='card-contenido'>
            <p className='contenido-categoria'>Audio</p>
            <p className='contenido-producto'>Audífono Roland RH-5</p>
            <p className='contenido-precio'>124.500</p>
            <div className='contenido-disponibilidad'>
                <p className='disponibilidad'>disponible </p>
                <span className='span-agregar-carro'><FontAwesomeIcon className='icon-agregar-carro' icon={faCartPlus} /></span> 
            </div>
           
        </div>
    </div>
  )
}

export default CardStore