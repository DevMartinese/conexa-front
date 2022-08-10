import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';	

const RutaPrivada = () => {
    const authContext = useContext(AuthContext);
    const { autenticado } = authContext;

    return autenticado ? <Outlet /> : <Navigate to="/login" />;
}
export default RutaPrivada;