import React from 'react'
import "../styles/slider.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';
import useSlider from '../hooks/useSlider'

let posicion = 0;
function Slider() {
    const {sliderData} = useSlider();
    const imagenes = [];
    
    sliderData.forEach((elemento,i) => {
        imagenes[i] = elemento.Slider
    });
    const valorInicial = imagenes[0]
    const [imagenSlide, setImagenSlide] = useState(valorInicial) 

    const nextSlide = ()=>{
        if (posicion === imagenes.length-1) {
            posicion =0;   
        }else{
            posicion =posicion +1;    
        }
        setImagenSlide(imagenes[posicion]);
    }
    const prevSlide = ()=>{
        if (posicion === 0) {
            posicion = imagenes.length -1;
        }else{
            posicion = posicion - 1;
        }
        setImagenSlide(imagenes[posicion]);
    }


  return (
    <div className='contenedor-slider'>
        <div className='slider'>
            <div className='slider-item'>
                <img src={`${!imagenSlide ? valorInicial: imagenSlide}`} alt="imagen de slider" />
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