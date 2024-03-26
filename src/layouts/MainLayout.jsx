import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header.jsx";

export const MainLayout = () => {
    return (

        <div className="wrapper is_aside single_entity">
            <Header />
            <Outlet />
            <Menu />
        </div>
    )

}