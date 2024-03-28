import {NavLink} from "react-router-dom";

function AppFooter() {
    return (
        <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
            <NavLink to="/" className="nav-content-bttn nav-center"><i className="feather-home"></i></NavLink>
            <NavLink to="/defaultvideo" className="nav-content-bttn"><i className="feather-package"></i></NavLink>
            <NavLink to="/defaultlive" className="nav-content-bttn" data-tab="chats"><i className="feather-layout"></i></NavLink>
            <NavLink to="/shop2" className="nav-content-bttn"><i className="feather-layers"></i></NavLink>
            <NavLink to="/settings" className="nav-content-bttn"><img src="assets/images/female-profile.png" alt="user" className="w30 shadow-xss" /></NavLink>
        </div>
    )
}
 export default AppFooter