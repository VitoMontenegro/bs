


import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../hook/index.js";

export const PrivateRoute = () => {


    const auth = useAuth();
    return (
            auth ?
            <Outlet /> :
            <Navigate to="sign_in" />
    )

}