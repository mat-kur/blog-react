
import "./Logout.css"
export const Logout = props => {

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
            <button className="logout" onClick={logOut}>Logout</button>
        </div>
    );
}