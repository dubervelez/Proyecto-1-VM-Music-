import { NavLink } from "react-router-dom";
import "../styles/header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserXmark, faXmark, faUser, faHouse, faMusic, faCartShopping, faLock } from '@fortawesome/free-solid-svg-icons';
import Logo from "../Assets/logos/logo-vm.png";
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
    
    const {user, isAuthenticated, loginWithRedirect ,logout } = useAuth0()
    
    // funcionalidad para desplegar el menu en resoluciones medianas y pequeñas
    const [navMobile, setNavMobile] = useState(false)
    const desplegarMenu = ()=>{
        navMobile ? setNavMobile(false): setNavMobile(true);
    }

  return (
    <header className={`header ${navMobile ? "activo": ""}`.trim()}>
        <img className='img-logo' src={Logo} alt="logo VM" />
        <Navmobile cerrarMenu={desplegarMenu}></Navmobile>
        <div className='contenedor-menu-login'>
            {isAuthenticated ? ( 
            <>
                <button className="btn-cerrar-sesion" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesión</button>
                <div className='login'> <img className="avatar" src={user.picture} alt="avatar" title={user.name} /></div>
            </> ): 
            (<>
                <button className="btn-iniciar-sesion" onClick={()=>{loginWithRedirect()}}>Iniciar sesion</button>
                <div className='login'><FontAwesomeIcon className="avatar-icon" icon={faUserXmark} /></div> 
                
            </>)
            }
            <FontAwesomeIcon className='hamburguer' icon={faBars} onClick={desplegarMenu}/>   
        </div>
        
    </header>
  )
}


function Navmobile({ cerrarMenu }) {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return(
        <nav className='nav-movile'>
            <ul className='nav-mobile-ul'>
                <li className="nav-movile--li close" ><FontAwesomeIcon onClick={cerrarMenu} className='icon-nav-close' icon={faXmark} /> </li>
                <li className="nav-movile--li"> <NavLink className='navlink' to='/Proyecto-1-VM-Music-/'><FontAwesomeIcon className='icon-nav-mobile' icon={faHouse} />Inicio</NavLink> </li>
                <li className="nav-movile--li"><NavLink className='navlink' to='/catalogo-musical'><FontAwesomeIcon className='icon-nav-mobile' icon={faMusic} />Catalogo Musical</NavLink></li>
                <li className="nav-movile--li"><NavLink className='navlink' to='/tienda'><FontAwesomeIcon className='icon-nav-mobile' icon={faCartShopping} />Tienda</NavLink> </li>
                <li className='limitador'></li>
                {!isAuthenticated ? (
                <>                
                    <li className="nav-movile--li" onClick={()=>{loginWithRedirect()}}><FontAwesomeIcon className='icon-nav-mobile' icon={faUser} />Iniciar Sesión</li>
                </>):(<li className="nav-movile--li admin"><NavLink className='navlink' to='/Proyecto-1-VM-Music-/admin'><FontAwesomeIcon className='icon-nav-mobile' icon={faLock} />Admin</NavLink></li>)}
                <li className="nav-movile--li"><img className="logo-nav-li" src={Logo} alt="logo-VM" /></li>
            </ul>
        </nav>

    )
}

export default Header