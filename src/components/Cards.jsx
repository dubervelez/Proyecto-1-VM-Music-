import React from 'react';
import "../styles/cards.scss";
import imagenCards from "../Assets/images/cards-canguro.jpg";
import imagenCards2 from "../Assets/images/El anciano y el niño.jpg";
import imagenCards3 from "../Assets/images/Gatubela.jpg";
import imagenCards4 from "../Assets/images/this is not america.jpg";

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
                    <p>Genero: <b>RAP</b> </p>
                    <p>Album: <b>Caravana</b> </p>
                    <p>Fecha de lanzamiento: <b>2019</b> </p> 
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="cards-imagen">
                <img src={imagenCards2} alt="imagen artista" />
            </div>
            <div className="cards-descripcion">
                <h2 className='artista'>CHEO GALLEGO</h2>
                <p className='musica'>El niño y el anciano</p>
                <div className="cards-datos">
                    <p>Genero: <b>RAP</b> </p>
                    <p>Album: <b>Caravana</b> </p>
                    <p>Fecha de lanzamiento: <b>2019</b> </p> 
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="cards-imagen">
                <img src={imagenCards3} alt="imagen artista" />
            </div>
            <div className="cards-descripcion">
                <h2 className='artista'>KAROL G</h2>
                <p className='musica'>Gatubela</p>
                <div className="cards-datos">
                    <p>Genero: <b>RAP</b> </p>
                    <p>Album: <b>Caravana</b> </p>
                    <p>Fecha de lanzamiento: <b>2019</b> </p> 
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="cards-imagen">
                <img src={imagenCards4} alt="imagen artista" />
            </div>
            <div className="cards-descripcion">
                <h2 className='artista'>RESIDENTE</h2>
                <p className='musica'>This is not America</p>
                <div className="cards-datos">
                    <p>Genero: <b>RAP</b> </p>
                    <p>Album: <b>Caravana</b> </p>
                    <p>Fecha de lanzamiento: <b>2019</b> </p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards