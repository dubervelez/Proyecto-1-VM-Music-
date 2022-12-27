import React from 'react'
import "../styles/articulo.scss"
import imagenArticulo from"../Assets/images/estudio-musica_640.jpg"
import iconCard1 from "../Assets/logos/icon-music.svg"
import iconCard2 from "../Assets/logos/icon-piano.svg"

function Articulo() {
  return (
    <section className='articulo'>
        <h2 className='titulo-articulo'>Crea tu propio estudio musical</h2>
        <div className='introduccion'>
			<div className='parrafo-introductorio'>
				<p className='parrafo-1'>
				La música y los sonidos mueven al mundo, que esperas para hacer parte 
				de esta gran comunidad y comienzas a crear sonidos con los equipos que 
				tenemos para tí en nuestra tienda, encontrarás gran variedad de artículos 
				para tu estudio musical con la mejor calidad. Además, nos hemos preocupado 
				de ofrecerte artículos para todo tipo de bolsillos.
				</p>
				<p className='parrafo-2'>
					Comienza a descubrir los mejores materiales y productos para crear, rediseñar o 
					aumentar las prestaciones de tu home studio o tu estudio profesional de producción, 
					grabación, mezcla y/o masterización
				</p>
			</div>
			<div className='imagen'>
            	<img src={imagenArticulo} alt="estudio musical" />
				<span className='creditos'>Imagen de <a href="https://pixabay.com/es/users/dayronv-1243797/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1290087">Dayron Villaverde</a> en <a href="https://pixabay.com/es//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1290087" >Pixabay</a></span>
        	</div>
        </div>
        <div className="parrafo-desarrollo">
			<p className='parrafo-3'>
			Aprovecha la variedad de producto que tenemos para ti y comienza a transformar en realidad 
			tu sueño. con todos estas herramientas que tenemos para tí, podrás:
			</p>
			<div className="card-articulo">
				<div className='card'>
					<img src={iconCard1} alt="icon-musica" />
					<h3>Producción Musical</h3>
					<p>Aprende a crear musica desde cero con herramientas profesionales</p>
				</div>
				<div className='card'>
					<img src={iconCard2} alt="icon-musica" />
					<h3>Mezcla y Mastering</h3>
					<p>Aprende a crear musica desde cero con herramientas profesionales</p>
				</div>
			</div>
		</div>
    </section>
  )
}

export default Articulo