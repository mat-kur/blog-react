import {Link} from "react-router-dom";
import {Logout} from "./Logout/Logout";
import {SearchBar} from "./SearchBar/SearchBar";


export const NavBar = ({user, searchQuery, setSearchQuery, threads, setThreads}) => {

    // console.log(user)

    return (
        <nav>
            <ul className='mainNav'>
                <li className='firstLi'><Link to='/'>Home</Link></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">About</a></li>
                {/*<li className={'user-name'}>*/}
                {/*    <Link to={`/user-profile/${user.user?.user?._id}`}>{user.user?.user?.username}</Link>*/}
                {/*</li>*/}
                <li className="sign-in">
                    <div className='navbar-wrapper'>

                            {user && user.user && user.user.user?.username
                                ? (
                                    <>
                                        <p className='p-wrapper'>Welcome <span className='username-logou3t'><Link className='username-logout' to={`/user-profile/${user.user?.user?._id}`}>{user.user.user.username}</Link></span></p>
                                        <Logout user={user}/>
                                        {user.user.user.isAdmin === 1 && <div className="admin-panel-wrapper"><Link to={'/admin/dashboard/'}><i className="fa-solid fa-screwdriver-wrench"></i></Link></div>}
                                    </>
                                )
                                :<div className='div321'> <Link to={'/login'}>Sign In</Link></div>
                            }
                    </div>
                </li>
                <li>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} threads={threads} setThreads={setThreads}/>
                </li>

            </ul>
            <div>
            </div>
        </nav>

    )
}