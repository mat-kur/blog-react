import {Link} from "react-router-dom";

export const Logout = props => {


    const user = props
    const logOut = () => {
        const sendLogOutReq = async () => {
            fetch("http://localhost:5000/logout", {
                method: "GET",
                credentials: "include",
            })
                .then((response) => response.json())
                .then((data) => {
                    props.setUser(null); // Ustawienie stanu użytkownika na null po wylogowaniu
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }

        sendLogOutReq()
    }

    return (
        <div>
            <button className={'btn-logout'}><a onClick={logOut} href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i></a></button>
        </div>
    );
}