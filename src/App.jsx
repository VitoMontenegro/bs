import { BrowserRouter, Route, Routes } from "react-router-dom";
// Create Import File
import './assets/css/feather.css'
import './assets/css/themify-icons.css'
import './main.scss'

// Common Layout

import Home from './pages/Home';
import Login from './pages/Login';
import {MainRoute} from "./utils/routrer/MainRoute.jsx";
import Register from "./pages/Register.jsx";
import {AuthRoute} from "./utils/routrer/AuthRoute.jsx";
import Forgot from "./pages/Forgot.jsx";
import Settings from "./pages/Setting.jsx";
import * as PropTypes from "prop-types";
import Error from "./components/Error.jsx";

/*import Badge from './pages/Badge';
import Group from './pages/Group';
import Storie from './pages/Storie';
import Member from './pages/Member';
import Email from './pages/Email';
import Emailopen from './pages/Emailopen';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Contactinfo from './pages/Contactinfo';
import Socialaccount from './pages/Socialaccount';
import Password from './pages/Password';
import Payment from './pages/Payment';
import Notification from './pages/Notification';
import Helpbox from './pages/Helpbox';

import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Notfound from './pages/Notfound';

import ShopOne from './pages/ShopOne';
import ShopTwo from './pages/ShopTwo';
import ShopThree from './pages/ShopThree';
import Singleproduct from './pages/Singleproduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Chat from './pages/Chat';
import Live from './pages/Live';
import Job from './pages/Job';
import Event from './pages/Event';
import Hotel from './pages/Hotel';
import Videos from './pages/Videos';
import Comingsoon from './pages/Comingsoon';


import Grouppage from './pages/Grouppage';
import Userpage from './pages/Userpage';
import Authorpage from './pages/Authorpage';
import Hotelsingle from './pages/Hotelsingle';*/


function Provider(props) {
    return null;
}

Provider.propTypes = {
    store: PropTypes.any,
    children: PropTypes.node
};

function App() {

    return (
        <>
        <BrowserRouter>
            <div className="App">
                    <Routes>
                        <Route path="" element={ <MainRoute />}>
                            <Route index element={ <Home />} />
                            <Route path="settings" element={<Settings />} />
                           {/* <Route path="groups" element={ <GroupsPage />} />

                            <Route path="defaultbadge" element={<Badge />} />
                            <Route path="defaultgroup" element={<Group />} />
                            <Route path="defaultstorie" element={<Storie />} />
                            <Route path="defaultemailbox" element={<Email />} />
                            <Route path="defaultemailopen" element={<Emailopen />} />
                            <Route path="defaultvideo" element={<Videos />} />
                            <Route path="defaultanalytics" element={<Analytics />} />


                            <Route path="accountinformation" element={<Account />} />
                            <Route path="defaultmember" element={<Member />} />
                            <Route path="contactinformation" element={<Contactinfo />} />
                            <Route path="socialaccount" element={<Socialaccount />} />
                            <Route path="password" element={<Password />} />
                            <Route path="payment" element={<Payment />} />
                            <Route path="defaultnoti" element={<Notification />} />
                            <Route path="helpbox" element={<Helpbox />} />
                            <Route path="login" element={<Login />} />
                            <Route path="notfound" element={<Notfound />} />

                            <Route path="shop1" element={<ShopOne />} />
                            <Route path="shop2" element={<ShopTwo />} />
                            <Route path="shop3" element={<ShopThree />} />
                            <Route path="singleproduct" element={<Singleproduct />} />
                            <Route path="cart" element={<Cart />} />
                            <Route path="checkout" element={<Checkout />} />
                            <Route path="defaultmessage" element={<Chat />} />
                            <Route path="defaultlive" element={<Live />} />

                            <Route path="defaultjob" element={<Job />} />
                            <Route path="defaultevent" element={<Event />} />
                            <Route path="defaulthotel" element={<Hotel />} />
                            <Route path="grouppage" element={<Grouppage />} />
                            <Route path="userpage" element={<Userpage />} />
                            <Route path="authorpage" element={<Authorpage />} />
                            <Route path="comingsoon" element={<Comingsoon />} />
                            <Route path="defaulthoteldetails" element={<Hotelsingle />} />*/}

                        </Route>
                        <Route element={<AuthRoute />}>
                            <Route path="login" end element={<Login />} />
                            <Route path="register" end element={<Register />} />
                            <Route path="forgot" element={<Forgot />} />
                        </Route>
                    </Routes>
            </div>
        </BrowserRouter>

            <Error />
        </>
    );
}

export default App;
