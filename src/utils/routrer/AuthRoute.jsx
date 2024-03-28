
import {Navigate, Outlet} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useAuth, userName} from "../../hook/index.js";

export const AuthRoute = () => {
    const auth = useAuth();

    const user = userName();
    const { t, i18n } = useTranslation();
    return (
            !auth ? (
                <>
                    <Outlet />
                </>
                ):
            <Navigate to="/" />
    )

}