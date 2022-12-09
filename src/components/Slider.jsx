import React from 'react'
import "../styles/slider.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Slider1 from "../Assets/images/slider-1.jpg"
import Slider2 from "../Assets/images/slider-2.jpg"
import Slider3 from "../Assets/images/slider-3.jpg"
import { useState } from 'react';

let posicion = 0;
function Slider() {
    const imagenes = [Slider1, Slider2, Slider3];
    const [imagenSlide, setImagenSlide] = useState(Slider1) 
    
    const nextSlide = ()=>{
        if (posicion === imagenes.length -1) {
            posicion =0;   
        }else{
            posicion =posicion +1;    
        }
        setImagenSlide(imagenes[posicion]);
    }
    const prevSlide = ()=>{
        if (posicion === 0) {
            posicion = 2;
        }else{
            posicion = posicion - 1;
        }
        setImagenSlide(imagenes[posicion]);
    }


  return (
    <div className='contenedor-slider'>
        <div className='slider'>
            <div className='slider-item'>
                <img src={imagenSlide} alt="imagen de slider" />
            </div>
        </div>
        <div className='btn-slider'>
            <FontAwesomeIcon className='btn-next' icon={faArrowCircleLeft} onClick={prevSlide}/>
            <FontAwesomeIcon className='btn-prev' icon={faArrowAltCircleRight} onClick={nextSlide}/>
        </div>
    </div>
  )
}

export default Slider