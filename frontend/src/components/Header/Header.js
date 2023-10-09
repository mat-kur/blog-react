import "./Header.css"
import {NavBar} from "./NavBar/NavBar";

export const Header = props => {


    return(
        <header>
            <h3 className="header-title"><span className="header-title-span">/ </span> CODERZ <span
                className="header-title-span">/></span></h3>
            <NavBar/>
        </header>
    )
}