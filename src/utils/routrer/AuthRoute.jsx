


import {Navigate, Outlet} from "react-router-dom";

export const AuthRoute = () => {
    const auth = false;
    return (
            !auth ?
            <Outlet /> :
            <Navigate to="/" />
    )

}