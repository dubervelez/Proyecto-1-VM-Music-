import React from 'react'
import '../styles/loading.scss'

function Loading() {
  return (
    <div className='contenedor-loading'>
			<div className='logo'></div>
      <div className='loading-animacion'></div>
      <div class="loading-text">
  			<div class="scanner">
    			<span>Loading...</span>
  			</div>
			</div>
			<span className='creditos'>By <b>Duberney Velez Moreno</b></span>
    </div>
  )
}

export default Loading