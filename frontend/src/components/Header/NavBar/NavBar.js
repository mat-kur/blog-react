import {Link} from "react-router-dom";
import {Logout} from "./Logout/Logout";


export const NavBar = ({user}) => {

    // console.log(user)

    return (
        <nav>
            <ul className='mainNav'>
                <li className='firstLi'><Link to='/'>Home</Link></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">About</a></li>
                <li className={'user-name'}>
                    <Link to={`/user-profile/${user.user?.user?._id}`}>{user.user?.user?.username}</Link>
                </li>
                <li className="sign-in">
                    <Link to={'/login'}>
                        {user && user.user && user.user.user?.username
                            ? (
                                <>
                                    <Logout/>
                                    {user.user.user.isAdmin === 1 && <div className="admin-panel-wrapper"><Link to={'/admin/dashboard/'}><i className="fa-solid fa-screwdriver-wrench"></i></Link></div>}
                                </>
                            )
                            : 'Sign In'
                        }
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <form className='form-search' action='#'>
                            <input type='search' placeholder='Search here …' />
                            <i className="fa fa-search"></i>
                        </form>
                    </a>
                </li>

            </ul>
            <div>
            </div>
        </nav>

    )
}