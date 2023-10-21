import "./Header.css"
import {NavBar} from "./NavBar/NavBar";
import {useState} from "react";

export const Header = ({setSearchRecords, user, setUser, searchQuery, setSearchQuery, threads, setThreads}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const handleMenuOpen = () => {
        setIsMenuOpen(true); // otwiera menu
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false); // zamyka menu
    };


    return (

        <>
            <div className='burger-menu'>
                <i onClick={handleMenuOpen} className="fa-solid fa-bars"></i>
            </div>
            {isMenuOpen && (
                <header>
                    <div className='burger-menu'>
                        <i onClick={handleMenuClose} className="fa-regular fa-circle-xmark"></i>
                    </div>
                    <h3 className="header-title"><span className="header-title-span"></span> CODERZ <span
                        className="header-title-span"></span></h3>
                    <NavBar setSearchRecords={setSearchRecords} user={user} searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery} threads={threads} setThreads={setThreads}/>
                </header>
            )}
        </>
    )
}