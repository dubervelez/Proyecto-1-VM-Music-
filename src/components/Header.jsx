import React from 'react'
import "../styles/header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark, faHouse, faMusic, faCartShopping, faLock, faUserPen } from '@fortawesome/free-solid-svg-icons';
import Logo from "../Assets/logos/logo-vm.png";


function Header() {
  return (
    <header className='header'>
        <img className='img-logo' src={Logo} alt="logo VM" />
        <Navmobile></Navmobile>
        <div className='contenedor-menu-login'>
            <div className='login'><FontAwesomeIcon icon={faUser} /> </div>
            <FontAwesomeIcon className='hamburguer' icon={faBars} />   
        </div>
        
    </header>
  )
}


function Navmobile() {
    return(
        <nav className='nav-movile'>
            <ul className='nav-mobile-ul'>
                <li className="nav-movile--li close"><FontAwesomeIcon className='icon-nav-close' icon={faXmark} /> </li>
                <li className="nav-movile--li"><FontAwesomeIcon className='icon-nav-mobile' icon={faHouse} />Inicio</li>
                <li className="nav-movile--li"><FontAwesomeIcon className='icon-nav-mobile' icon={faMusic} />Catalogo Musical</li>
                <li className="nav-movile--li"><FontAwesomeIcon className='icon-nav-mobile' icon={faCartShopping} />Tienda</li>
                <li className='limitador'></li>
                <li className="nav-movile--li"><FontAwesomeIcon className='icon-nav-mobile' icon={faLock} />Admin</li>
                <li className="nav-movile--li"><FontAwesomeIcon className='icon-nav-mobile' icon={faUserPen} />Registrarse</li>
                <li className="nav-movile--li"><FontAwesomeIcon className='icon-nav-mobile' icon={faUser} />Iniciar Sesión</li>
                <li className="nav-movile--li"><img src={Logo} alt="logo-VM" /></li>
            </ul>
        </nav>

    )
}

export default Header