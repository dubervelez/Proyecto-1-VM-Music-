import React from 'react';
import "../styles/cards.scss";
import imagenCards from "../Assets/images/cards-canguro.jpg";
import imagenCards2 from "../Assets/images/El anciano y el niño.jpg";
import imagenCards3 from "../Assets/images/Gatubela.jpg";
import imagenCards4 from "../Assets/images/this is not america.jpg";
import { useCardsData } from '../context/contextCards';

function Cards() {

  const {cardsData} = useCardsData(); 
  
  return (
		<div className="contenedor-cards">
			{cardsData.map((datosCards, i)=>{
				return(
					<div key={i} className="cards">
						<div className="cards-imagen">
							<img src={`${datosCards.imagen}`} alt="imagen artista" />
						</div>	
						<div className="cards-descripcion">
							<h2 className='artista'>{datosCards.artista} / <span className='musica'>{datosCards.cancion}</span> </h2>
							<div className="cards-datos">
								<p className='cards-datos--p' > <b>{datosCards.genero}</b> / <b>{datosCards.fecha}</b> </p>
							</div>
						</div>
					</div>
				)
			})}
		</div>
  )
}

export default Cards