import {Link} from "react-router-dom";
import {Logout} from "./Logout/Logout";


export const NavBar = ({user}) => {

    // console.log(user)

    return (
        <nav>
            <ul className='mainNav'>
                <li className='firstLi'><Link to='/'>Home</Link></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Support</a></li>
                <li className={'user-name'}><Link to="/">{user.user?.user?.username}</Link></li>
                <li className="sign-in"><Link to={'/login'}>{user && user.user && user.user.user?.username ? <Logout/> : 'Sign In'}</Link></li>
                <li><a href=""><i className="fa-solid fa-magnifying-glass"></i></a></li>
            </ul>
            <div>
            </div>
        </nav>

    )
}