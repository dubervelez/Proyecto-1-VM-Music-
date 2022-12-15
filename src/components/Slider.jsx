import React from 'react'
import "../styles/slider.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

let posicion = 0;
function Slider() {

    const imagenes_cargadas = {
        'Slider1': 'https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg', 
        'Slider2':'https://cdn.pixabay.com/photo/2017/11/07/00/18/guitar-2925274_960_720.jpg', 
        'Slider3':'https://images.pexels.com/photos/3967765/pexels-photo-3967765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }

    const imagenes = [imagenes_cargadas.Slider1, imagenes_cargadas.Slider2, imagenes_cargadas.Slider3]
    const [imagenSlide, setImagenSlide] = useState(imagenes[0]) 
    
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
                <img src={`${imagenSlide}`} alt="imagen de slider" />
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