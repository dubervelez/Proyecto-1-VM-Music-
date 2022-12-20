import {HeaderAdmin, Navmobile} from "../../components/HeaderAdmin"
import '../../styles/admin/layout.scss'

function layout({ children }) {
  return (
    <div className='layout-contenedor'>
      <div className="header-layout"><HeaderAdmin></HeaderAdmin></div>
      <div className="contenedor-main-sidebar">
        <div className="sidebar-layout"><Navmobile></Navmobile></div>
        <div className="main-layout">{children}</div>
      </div>
    </div>
  )
}

export default layout
