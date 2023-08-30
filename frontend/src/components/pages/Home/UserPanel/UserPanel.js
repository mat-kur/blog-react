import "./UserPanel.css"
import {useEffect, useState} from "react";
import {Logout} from "./Logout/Logout";
import {Link} from "react-router-dom";



export const UserPanel = props => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const userAuth = async () => {
            await fetch("http://localhost:5000/isUserLogged", {
                method: "GET",
                credentials: "include",
            })
                .then((response) => response.json())
                .then((data) => {
                    setUser(data.user);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
        userAuth()
    }, []);

    return (
        <>
            {user ?
            <div className="user-panel-logged">
                <h3>Logged as <span>{user.username}</span></h3>
                <Logout setUser={setUser}/>
            </div>
                :
                <div className="user-panel-logged">
                    <p> <Link classname='t' to='/register'>Register</Link> or <Link to='/login'>Login</Link> to get acces to the site.</p>
                </div>

            }
        </>
    );
}