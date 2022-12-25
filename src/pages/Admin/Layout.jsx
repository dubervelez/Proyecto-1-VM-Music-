import {HeaderAdmin, Navmobile} from "../../components/HeaderAdmin"
import '../../styles/admin/layout.scss'
import PrivateRoute from "../../components/PrivateRoute";

function Layout({ children }) {

  

  return (
    <PrivateRoute>
      <div className='layout-contenedor'>
        <div className="header-layout"><HeaderAdmin></HeaderAdmin></div>
        <div className="contenedor-main-sidebar">
          <div className="sidebar-layout"><Navmobile></Navmobile></div>
          <div className="main-layout">{children}</div>
        </div>
      </div>
    </PrivateRoute>
  )
}

export default Layout
