import React from 'react'
import '../styles/loading.scss'

function Loading() {
  return (
    <div className='contenedor-loading'>
			<div className='logo'></div>
      <div className='loading-animacion'></div>
      <div className="loading-text">
  			<div className="scanner">
    			<span>Loading...</span>
  			</div>
			</div>
			<span className='creditos-loading'>By <b>Duberney Velez Moreno</b></span>
    </div>
  )
}

export default Loading