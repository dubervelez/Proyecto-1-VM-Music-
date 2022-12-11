import React from 'react';
import "../styles/login.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSign, } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Login() {
  return (
      <form className='form-login'>
          	<div className="titulo-login">
          	    <h1>Iniciar Sesión</h1>
          	</div>
          	<label className='label-login'>
          	   <input className='input' type="text" placeholder="Email Address"/>
          	</label>
          	<label className='label-login'>
          	   <input className='input' type="password" placeholder="Password"/>
          	</label>
          	<button className="button red" type="button"><FontAwesomeIcon icon={faSign} /> Log in</button>
          	<div className="btn-marcas">
          	 	<button className="button unit" type="button"><FontAwesomeIcon className='icon' icon={faGoogle} /> </button>
          	  	<button className="button unit" type="button"><FontAwesomeIcon className='icon' icon={faGithub} /> </button>
          	  	<button className="button unit" type="button"><FontAwesomeIcon className='icon' icon={faTwitter} /> </button>
          	</div>
      </form>
  )
}

export default Login