import './Header.css'
import {NavBar} from "./NavBar/NavBar";
import {Link} from "react-router-dom";

export const Header = props => {
    return (
        <>
            <div className="header-container">
                    <a href="/"><i className="fa-solid fa-code"></i>Mat <span>Code</span></a>
                <div className="header-nav">
                    <NavBar/>
                </div>
            </div>
        </>
    );
}