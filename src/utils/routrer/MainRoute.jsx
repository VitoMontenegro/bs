import {Outlet} from "react-router-dom";
import Header from "../../components/Header";
import LeftNav from "../../components/LeftNav.jsx";
import RightChat from "../../components/RightChat.jsx";
import PopupChat from "../../components/PopupChat.jsx";
import AppFooter from "../../components/AppFooter.jsx";


export const MainRoute = () => {
    return (

        <>
            <Header />
            <LeftNav />
            <RightChat />
            <Outlet />
            <PopupChat />
            <AppFooter />
        </>
    )

}