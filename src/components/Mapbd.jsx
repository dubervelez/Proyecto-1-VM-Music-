import React from 'react'
import '../styles/bd.scss'

function Mapbd({ slider, linkImagen, imagen  }) {
  return (
        <div className='contenido-bd'>
            <p className="id">{slider}</p>
            <p className='link'>{linkImagen}</p>
            <img className='img-miniatura' src={`${linkImagen}`} alt="" />
        </div>
  )
}

export default Mapbd