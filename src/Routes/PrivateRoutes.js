import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProviders';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
            if(loading){
                return <div><h2>Loadding.....</h2></div>
            }
            if(user && user.uid){
                return children;
            }
            else{
                return <Navigate to='/login'></Navigate>
            }

};

export default PrivateRoute;