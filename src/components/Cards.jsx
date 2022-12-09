import React from 'react';
import "../styles/cards.scss";
import imagenCards from "../Assets/images/cards-canguro.jpg";

function Cards() {
  return (
    <div className="contenedor-cards">
        <div className="cards">
            <div className="cards-imagen">
                <img src={imagenCards} alt="imagen artista" />
            </div>
            <div className="cards-descripcion">
                <h2 className='artista'>WOS</h2>
                <p className='musica'>Canguro</p>
                <div className="cards-datos">
                    <p>Genero: RAP</p>
                    <p>Album: Caravana</p>
                    <p>Fecha de lanzamiento: 2019</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards