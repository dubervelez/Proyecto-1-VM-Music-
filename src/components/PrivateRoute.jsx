import { useAuth0 } from '@auth0/auth0-react'
import Loading from './Loading';


function PrivateRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading></Loading>
    }else{
        return (
        isAuthenticated ? <>{children}</>: (<div>No tienes autorizacion de administrador</div> ) 
    )
    }
  
}

export default PrivateRoute