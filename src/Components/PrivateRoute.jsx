import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import {Navigate} from 'react-router-dom';

function PrivateRoute({children}) {
const {token,isAuth,setToken,setIsAuth} = useContext(AppContext);
if(!isAuth){
    return <Navigate to="/login"/>
}
return children ;
}

export default PrivateRoute;
