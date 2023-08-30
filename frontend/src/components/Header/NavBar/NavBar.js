import "./NavBar.css";
import {useState} from "react";
import {Link} from "react-router-dom";


export const NavBar = props => {

    const [isOpen, setIsOpen] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState("bars fa-solid fa-bars")
    const [active, setActive] = useState('')


    const linkHandler = (e) => {
        e.preventDefault()
    }
    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setIsActiveMenu("fa-solid fa-x")
        } else {
            setIsActiveMenu("bars fa-solid fa-bars")
        }

        if (!active) {
            setActive('active')
        } else {
            setActive('')
        }

    };

    return (
        <>
            <button className="btn-nav" onClick={handleToggleMenu}> <i className={`bars ${isActiveMenu}`}></i></button>
                <div className={`nav-bar ${active}`}>
                    <a className="nav-title" href="/#"><i className="fa-solid fa-code"></i> MatCode</a>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/h1">h1</Link></li>
                        <li><Link to="/article-view/:id">Article</Link></li>
                        <li><Link to="/user-profile/:id">User-profile</Link></li>
                        <li><a href="/#">Menu1</a></li>
                    </ul>
                </div>
        </>
    );
};