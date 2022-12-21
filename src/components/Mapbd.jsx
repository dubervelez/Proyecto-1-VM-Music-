import React from 'react'
import '../styles/bd.scss'

function Mapbd({ slider, linkImagen, eliminarSlider }) {
  return (
        <div className='contenido-bd'>
            <p className="id">{slider}</p>
            <p className='link'>{linkImagen}</p>
            <img className='img-miniatura' src={`${linkImagen}`} alt="imagen miniatura" title='Eliminar imagen' onClick={eliminarSlider} />
        </div>
  )
}

export default Mapbd