import "./Header.css"
import {NavBar} from "./NavBar/NavBar";

export const Header = (user, setUser, searchQuery, setSearchQuery, threads, setThreads ) => {

    return(
        <header>
            <h3 className="header-title"><span className="header-title-span"></span> CODERZ <span
                className="header-title-span"></span></h3>
            <NavBar user={user} searchQuery={searchQuery} setSearchQuery={setSearchQuery} threads={threads} setThreads={setThreads}/>
        </header>
    )
}