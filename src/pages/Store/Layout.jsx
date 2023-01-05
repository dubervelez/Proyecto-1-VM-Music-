import { NavLink } from "react-router-dom";
import Logo from '../../Assets/logos/logo-vm.png'
import '../../styles/store/layout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClipboardList, faUser, faSearch, faCartShopping, faHeadphones, faDollar, faMusic, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useCarroCompras } from '../../context/contextStore';
import { nanoid } from 'nanoid';

function Layout({ children, productosSelecionados }) {

	const [subnavactive, setSubnavActive] = useState(false)
  const { carroCompra ,setCarroCompra } = useCarroCompras()
  const [modalActivo, setModalActivo] = useState(false);


  const mostrarModal = ()=>{
    if (modalActivo === false){
      setModalActivo(true)
    }else{
      setModalActivo(false)
    }
  }

  return (
    <div className='contenedor-layout-store' >
      <header className='header-store'>
        <nav className='nav-principal'>
					<div className='nav-principal-seccion'>
						<img className='logo-vm' src={Logo} alt="logo-VM-music" />
						<ul className='nav-principa--ul'>
							<li className="nav-principal--li"> <NavLink className='navlink-principal' to='/Proyecto-1-VM-Music-/'>Inicio</NavLink> </li>
							<li className="nav-principal--li"><NavLink className='navlink-principal' to='/Proyecto-1-VM-Music-/catalogo-musical'>Catalogo Musical</NavLink></li>
							<li className="nav-principal--li"><NavLink className='navlink-principal' to='/Proyecto-1-VM-Music-/store'>Tienda</NavLink> </li>
							<li className="nav-principal--li"><NavLink className='navlink-principal' to='/Proyecto-1-VM-Music-/admin/'>Admin</NavLink> </li>
						</ul>
					</div>
					<div className='nav-principal-seccion'>
						<ul className='nav-principa--ul'>
							<li className="nav-principal--li"><NavLink className='navlink-informacion' to='#'><FontAwesomeIcon className="icon-nav" icon={faClipboardList} />Mis pedidos</NavLink></li>
							<li className="nav-principal--li"><NavLink className='navlink-informacion' to='#'><FontAwesomeIcon className="icon-nav" icon={faHeart} />lista de deseos</NavLink></li>
							<li className="nav-principal--li"><NavLink className='navlink-informacion' to='#'>Colombia</NavLink></li>
						</ul>
						<div className='contenedor-avatar'>
							<FontAwesomeIcon className="icon-nav" icon={faUser} />
						</div>
					</div>
        </nav>
				<nav className='nav-page-store'>
					<div className='nav-seccion'>
						<div className={`contenedor-hamburguesa ${subnavactive && "activo"}`} onClick={()=>{subnavactive ? setSubnavActive(false): setSubnavActive(true)}}>
							<div className={`menu-hamburguesa ${subnavactive && "activo"}`} onClick={()=>{subnavactive ? setSubnavActive(false): setSubnavActive(true)}}></div>
						</div>
						<h1 className='titulo-vm-store'><span className='span-vm'>VM</span> Music Store</h1>
					</div>
					<div className='nav-seccion'>
						<label className='label-buscador' htmlFor="">
							<input className='input-buscador' type="text" placeholder='¿ Que Buscas ?'/><FontAwesomeIcon className="icon-buscador" icon={faSearch} />
						</label>
						<div className='contenedor-carro-compra' >
							<FontAwesomeIcon className='icon-carro-compras' icon={faCartShopping}  onClick={mostrarModal}/>
							<div className='cantidad-productos'>
								<span className='cantidad-productos--span' >{productosSelecionados}</span>
							</div>
              <div className={`modal-carrito-compras ${modalActivo && 'activo'}`}>
                <div className='modal-contenedor-productos'>
              {
                carroCompra[2] && (
                  Object.values(carroCompra[2]).map((el)=>{
                    return(
                      <div className='modal-producto' key={nanoid()} >
                        <img className='modal-img' src={el.imagen} alt="miniatura producto" />
                        <div className='modal-producto-descripcion'>
                            <h3 className='modal-name'>{el.producto} <br />{el.precio} </h3>
                        </div>
                        <div className='info-cantidad-modal'>
                          <div>
                            <span className='btn-cantidad'>-</span>
                            <span className='span-cantidad'>1</span>
                            <span className='btn-cantidad'>+</span>
                          </div>
                          <span className='quitar-producto'>Quitar</span>
                        </div>
                      </div>
                        
                        
                        )
                      })
                      
                      )
                }
                </div>
                <div className='btn-modal'>
                  <button className='btn-producto modal' >Ver Carrito </button>
                  <button className='btn-producto modal'> Comprar Ahora </button>
                </div>
                </div>
						</div>
					</div>
				</nav>
				<nav className={`sub-nav-store ${subnavactive && "activo"}`}>
					<ul className='sub-nav-ul'>	
						<li className="sub-nav--li"><NavLink className='navlink-sub-nav' to='#'><FontAwesomeIcon className='icon-sub-nav' icon={faHeadphones} />Audio y video </NavLink></li>
						<li className="sub-nav--li"><NavLink className='navlink-sub-nav' to='#'><FontAwesomeIcon className='icon-sub-nav' icon={faMusic} />Amplificadores</NavLink></li>
						<li className="sub-nav--li"><NavLink className='navlink-sub-nav' to='#'><FontAwesomeIcon className='icon-sub-nav' icon={faKeyboard} />Mezcladores</NavLink></li>
						<li className="sub-nav--li"><NavLink className='navlink-sub-nav' to='#'><FontAwesomeIcon className='icon-sub-nav' icon={faMusic} />Instrumentos musicales</NavLink></li>
						<li className="sub-nav--li"><NavLink className='navlink-sub-nav' to='#'><FontAwesomeIcon className='icon-sub-nav' icon={faDollar} />Ofertas</NavLink></li>
						<li className="sub-nav--li"><NavLink className='navlink-sub-nav' to='#'><FontAwesomeIcon className='icon-sub-nav' icon={faCartShopping} />Mi Carrito</NavLink></li>
					</ul>
				</nav>
      </header>
	  <main>{children}</main>
    </div>
  )
}

export default Layout