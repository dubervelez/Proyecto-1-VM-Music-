import { NavLink } from "react-router-dom";
import "../styles/admin/headerAdmin.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHouse, faUserSecret, faXmark, faHouseChimneyUser, faFileAudio, faCartShopping, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Logo from "../Assets/logos/logo-vm.png";
import LogoW from "../Assets/logos/logo-vm-white.png";
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function HeaderAdmin() {

   const { user } = useAuth0();
  // funcionalidad para desplegar el menu en resoluciones medianas y pequeñas
  const [navMobile, setNavMobile] = useState(false)
  const desplegarMenu = ()=>{
    navMobile ? setNavMobile(false): setNavMobile(true);
  }

return (
  <header className={`header-admin ${navMobile ? "activo": ""}`.trim()}>
        <div className='contenedor-menu-login-admin'>
            <NavLink to='/Proyecto-1-VM-Music-/'><FontAwesomeIcon className='icon-home' icon={faHouse} /></NavLink>
            <img className='img-logo' src={Logo} alt="logo VM" />
        </div>
        <div className='contenedor-menu-login-admin'>
            <div className='login'><img className="avatar" src={user.picture} alt="avatar" title={user.name} /></div>
            <FontAwesomeIcon className='hamburguer-admin' icon={faBars} onClick={desplegarMenu}/>
            <FontAwesomeIcon className='close-menu' icon={faXmark} onClick={desplegarMenu}/> 
        </div>
        <Navmobile></Navmobile>
  </header>
)
}


function Navmobile() {

    const [subnav1, setSubnav1] = useState(false)
    const [subnav2, setSubnav2] = useState(false)
    const [subnav3, setSubnav3] = useState(false)
    const desplegarSubMenu = (pos)=>{
      if (pos === 1) {
        subnav1 ? setSubnav1(false): setSubnav1(true);
      }else if (pos === 2){
        subnav2 ? setSubnav2(false): setSubnav2(true);
      }else{
        subnav3 ? setSubnav3(false): setSubnav3(true);
      }
    }


  return(
      <nav className='nav-movile-admin'>
          <ul className='nav-mobile-ul'>
                <li className="sidebar--li"> 
                    <NavLink className='navlink-admin' to='/Proyecto-1-VM-Music-/'>
                        <FontAwesomeIcon className='icon-nav-sidebar' icon={faHouseChimneyUser} />Admin. Inicio
                    </NavLink> 
                    <FontAwesomeIcon className='icon-subnav' icon={faChevronDown} onClick={()=>{desplegarSubMenu(1)}} />
                    <ul className={`sub-nav-ul subnav-1 ${subnav1 ? 'activo': ''}`}>
                        <li className="sub-nav--li">
                            <NavLink className='subnav-link' to='/Proyecto-1-VM-Music-/admin'>Slider</NavLink>
                        </li>
                        <li className="sub-nav--li">
                            <NavLink className='subnav-link' to='/Proyecto-1-VM-Music-/admin/ultimos-Lanzamientos'>Ultimos Lanzamientos</NavLink>
                        </li>
                        <li className="sub-nav--li">
                            <NavLink className='subnav-link' to='/Proyecto-1-VM-Music-/admin/catalogo-musical'>Articulo</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidebar--li">
                    <NavLink className='navlink-admin' to='/catalogo-musical'>
                        <FontAwesomeIcon className='icon-nav-sidebar' icon={faFileAudio} />Catalogo Musical
                    </NavLink>
                    <FontAwesomeIcon className='icon-subnav' icon={faChevronDown} onClick={()=>{desplegarSubMenu(2)}}/>
                    <ul className={`sub-nav-ul subnav-2 ${subnav2 ? 'activo': ''}`}>
                        <li className="sub-nav--li">
                            <NavLink className='subnav-link' to='/Proyecto-1-VM-Music-/'>Canciones</NavLink>
                        </li>
                        <li className="sub-nav--li">
                            <NavLink className='subnav-link' to='/catalogo-musical'>Usuarios</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidebar--li">
                    <NavLink className='navlink-admin' to='/tienda'>
                        <FontAwesomeIcon className='icon-nav-sidebar' icon={faCartShopping} />Admin Tienda
                    </NavLink>
                    <FontAwesomeIcon className='icon-subnav' icon={faChevronDown} onClick={()=>{desplegarSubMenu(3)}}/> 
                    <ul className={`sub-nav-ul subnav-3 ${subnav3 ? 'activo': ''}`}>
                        <li className="sub-nav--li">
                            <NavLink className='subnav-link' to='/Proyecto-1-VM-Music-/'>Dashboard</NavLink>
                        </li>
                        <li className="sub-nav--li">
                            <NavLink className='subnav-link' to='/catalogo-musical'>Ventas</NavLink>
                        </li>
                        <li className="sub-nav--li">
                            <NavLink className='subnav-link' to='/catalogo-musical'>Productos</NavLink>
                        </li>
                        <li className="sub-nav--li">
                            <NavLink className='subnav-link' to='/catalogo-musical'>Clientes</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidebar--li"><img className="logo-vm-w" src={LogoW} alt="logo-VM" /></li>
          </ul>
      </nav>

  )
}

export {HeaderAdmin, Navmobile} 