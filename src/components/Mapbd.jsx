import React from 'react'
import '../styles/bd.scss'

function Mapbd({ slider, linkImagen  }) {
  return (
        <div className='contenido-bd'>
            <p className="id">{slider}</p>
            <p className='link'>{linkImagen}</p>
        </div>
  )
}

export default Mapbd