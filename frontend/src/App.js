import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Router, Routes, useLocation} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {ArticleView} from "./pages/ArticleView/ArticleView/ArticleView";
import AdminNavbarLayout from "./pages/Admin/AdminNavbarLayout";
import {CreateThread} from "./pages/Admin/CreateThread/CreateThread";
import {Dashboard} from "./pages/Admin/Dashboard/Dashboard";
import {ManageThread} from "./pages/Admin/ManageThread/ManageThread";
import {ManageUsers} from "./pages/Admin/ManageUsers/ManageUsers";
import {ReportSystem} from "./pages/Admin/ReportSystem/ReportSystem";
import {Login} from "./pages/Login/Login";
import {Footer} from "./components/Footer/Footer";
import {Register} from "./pages/Register/Register";


function App() {
    const location = useLocation();

    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div className="App">
            {!isAdminRoute && <Header/>}
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/article-view/:id" element={<ArticleView/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/login" element={<Register/>}/>
                <Route path="admin/*" element={<AdminNavbarLayout/>}>
                    <Route path="create-thread" element={<CreateThread/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="manage-thread" element={<ManageThread/>}/>
                    <Route path="manage-users" element={<ManageUsers/>}/>
                    <Route path="report-system" element={<ReportSystem/>}/>
                </Route>
            </Routes>
            {!isAdminRoute && <Footer/>}
        </div>
    )
}

export default App;