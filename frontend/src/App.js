import './App.css';
import {Header} from "./components/Header/Header";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {ArticleView} from "./pages/ArticleView/ArticleView/ArticleView";
import {CreateThread} from "./pages/Admin/CreateThread/CreateThread";


function App() {

    return (
        <div className="App">
            {/*<Header/>*/}
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/article-view/:id" element={<ArticleView/>} />
                <Route path="/admin/create-thread" element={
                        <CreateThread/>}/>
            </Routes>
        </div>
    )
}

export default App;