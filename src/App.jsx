import { BrowserRouter, Route, Routes } from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'
import GroupsPage from "./pages/GroupsPage.jsx";
import SignInPage from "./pages/SignInPage";
import {PrivateRoute} from "./utils/routrer/PrivateRoute";
import {AuthRoute} from "./utils/routrer/AuthRoute";
import SignUpPage from "./pages/SignUpPage.jsx";
import ResetPage from "./pages/ResetPage.jsx";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route element={<PrivateRoute />}>
                            <Route path="news" element={<News />} />
                        </Route>
                        <Route index element={<Home />} />
                        <Route path="groups" element={<GroupsPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route element={<AuthRoute />}>
                        <Route path="sign_in" element={<SignInPage />} />
                        <Route path="sign_up" element={<SignUpPage />} />
                        <Route path="reset" element={<ResetPage />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
