import React from 'react'
import "../styles/articulo.scss"

function Articulo() {
  return (
    <section className='articulo'>
        <h2 className='titulo-articulo'>Crea tu propio estudio musical</h2>
        <div className='parrafo-introductorio'>
            <p className='parrafo-1'>
                Nos sentimos en la obligación moral de ofrecerte sólo lo mejor, 
                por eso en nuestra tienda no encontrarás gran variedad de artículos 
                para tu estudio musical; pero sí los de más calidad. Además, nos hemos 
                preocupado de ofrecerte artículos para todo tipo de bolsillos, pero siempre 
                garantizándote un mínimo muy aceptable de calidad.
            </p>
            <p className='parrafo-2'>
            Comienza a descubrir los mejores materiales y productos para crear, rediseñar o 
            aumentar las prestaciones de tu home studio o tu estudio profesional de producción, 
            grabación, mezcla y/o masterizació
            </p>
        </div>
        <div className='imagen'>
            <img src="https://img.freepik.com/vector-gratis/sala-control-estudio-musica-cabina-cantante_107791-1637.jpg?w=2000" alt="" />
        </div>
    </section>
  )
}

export default Articulo