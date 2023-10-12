import {Link} from "react-router-dom";


export const NavBar = props => {


    return (
        <nav>
            <ul className='mainNav'>
                <li className='firstLi'><Link to='/'>Home</Link></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Support</a></li>
                <li className="sign-in"><a href="#">Sign in</a></li>
                <li><a href=""><i className="fa-solid fa-magnifying-glass"></i></a></li>
            </ul>
        </nav>
    )
}