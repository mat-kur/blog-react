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
import {useEffect, useState} from "react";
import {Auth} from "./PrivateRoute/PrivateRoute";
import {AuthLogInUser} from "./PrivateRoute/LogInRedirect";
import {ReportHistory} from "./pages/Admin/ReportSystem/ReportHistory/ReportHistory";
import UserProfile from "./pages/UserProfile/UserProfile";
import {UserEditProfile} from "./pages/UserProfile/UserEditProfile/UserEditProfile";


function App() {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    const [user, setUser] = useState(null)
    const [searchQuery, setSearchQuery] = useState('');
    const [threads, setThreads] = useState([]);
    const [searchRecords, setSearchRecords] = useState([]);

    // console.log(searchQuery)

    useEffect(() => {
        // Pobranie informacji o zalogowanym użytkowniku po załadowaniu komponentu
        fetch("http://localhost:5000/isUserLogged", {
            method: "GET",
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [user]);

    return (
        <div className="App">
            {!isAdminRoute && <Header setSearchRecords={setSearchRecords} setUser={setUser} user={user} searchQuery={searchQuery} setSearchQuery={setSearchQuery}  threads={threads} setThreads={setThreads}/>}
            <Routes>
                <Route path="/" element={<Home searchRecords={searchRecords} setSearchQuery={setSearchQuery} searchQuery={searchQuery} threads={threads} setThreads={setThreads} />} exact/>
                <Route path="/article-view/:id" element={<ArticleView setUser={setUser} user={user} />}/>
                <Route path="/login" element={
                    <AuthLogInUser user={user}>
                        <Login setUser={setUser}
                               user={user} />
                    </AuthLogInUser>}
                />
                <Route path="/user-profile/edit/:id" element={<UserEditProfile setUser={setUser} user={user} />}/>
                <Route path="/user-profile/:id" element={<UserProfile setUser={setUser} user={user} />}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="admin/*" element={<AdminNavbarLayout/>}>
                        <Route path="create-thread" element={
                            <Auth user={user}>
                                <CreateThread/>
                            </Auth>}/>
                        <Route path="dashboard" element={
                            <Auth user={user}>
                                <Dashboard/>
                            </Auth>}/>
                        <Route path="manage-thread" element={
                            <Auth user={user}>
                            <ManageThread user={user}/>
                            </Auth>}/>
                        <Route path="manage-users" element={
                            <Auth user={user}>
                                <ManageUsers user={user}/>
                            </Auth>}/>
                        <Route path="report-system" element={
                            <Auth user={user}>
                                <ReportSystem user={user}/>
                            </Auth>}/>
                    <Route path="reports-history" element={
                        <Auth user={user}>
                            <ReportHistory user={user}/>
                        </Auth>}/>
                </Route>
            </Routes>
            {!isAdminRoute && <Footer/>}
        </div>
    )
}

export default App;