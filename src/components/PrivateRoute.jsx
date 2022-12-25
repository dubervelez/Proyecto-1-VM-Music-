import { useAuth0 } from '@auth0/auth0-react'


function PrivateRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div className='loading'>Cargando...</div>
    }else{
        return (
        isAuthenticated ? <>{children}</>: (<div>No tienes autorizacion de administrador</div> ) 
    )
    }
  
}

export default PrivateRoute