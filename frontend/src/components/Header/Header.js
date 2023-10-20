import "./Header.css"
import {NavBar} from "./NavBar/NavBar";

export const Header = ({setSearchRecords, user, setUser, searchQuery, setSearchQuery, threads, setThreads }) => {

    // console.log(searchQuery)

    return(
        <header>
            <h3 className="header-title"><span className="header-title-span"></span> CODERZ <span
                className="header-title-span"></span></h3>
            <NavBar setSearchRecords={setSearchRecords} user={user} searchQuery={searchQuery} setSearchQuery={setSearchQuery} threads={threads} setThreads={setThreads}/>
        </header>
    )
}