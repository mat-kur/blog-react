import {Link} from "react-router-dom";
import {Logout} from "./Logout/Logout";
import {SearchBar} from "./SearchBar/SearchBar";
import {useState} from "react";


export const NavBar = ({setSearchRecords, user, searchQuery, setSearchQuery, threads, setThreads}) => {

    const [query, setQuery] = useState('');
    const handleSearch = async () => {
        console.log(query)
        setSearchQuery(query);
        const URL = `http://localhost:5000/api/homepage?q=test`;
        const response = await fetch(URL);
        const data = await response.json();
        setSearchRecords(data);
        console.log(threads)
    };
    // console.log(user)


        // console.log(user?.user?.username)}
    return (
        <nav>
            <ul className='mainNav'>
                <li className='firstLi'><Link to='/'>Home</Link></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">About</a></li>
                <li className="sign-in">
                    <div className='navbar-wrapper'>

                            {user && user?.user && user.user?._id
                                ? (
                                    <>
                                        <p className='p-wrapper'><span className='username-logou3t'><Link className='username-logout' to={`/user-profile/${user.user?._id}`}>{user?.user?.username}</Link></span></p>
                                        <Logout user={user}/>
                                        {user.user?.isAdmin === 1 && <div className="admin-panel-wrapper"><Link to={'/admin/dashboard/'}><i className="fa-solid fa-screwdriver-wrench"></i></Link></div>}
                                    </>
                                )
                                :<div className='div321'> <Link to={'/login'}>Sign In</Link></div>
                            }
                    </div>
                </li>
                <li>
                    {/*<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} threads={threads} setThreads={setThreads}/>*/}
                    <SearchBar setSearchRecords={setSearchRecords} searchQuery={searchQuery} setSearchQuery={setSearchQuery} threads={threads} setThreads={setThreads}/>
                    {/*<a href="#">*/}
                    {/*    <form className='form-search' action='#'>*/}
                    {/*        <input*/}
                    {/*            type='search'*/}
                    {/*            placeholder='Search here …'*/}
                    {/*            value={query}*/}
                    {/*            onChange={(e) => setQuery(e.target.value)}*/}
                    {/*        />*/}
                    {/*        <i onClick={handleSearch} className="fa fa-search"></i>*/}
                    {/*    </form>*/}
                    {/*</a>*/}
                </li>

            </ul>
            <div>
            </div>
        </nav>

    )
}