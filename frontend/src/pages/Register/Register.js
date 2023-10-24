import "./Register.css";
import {useState} from "react";
import {Link} from "react-router-dom";


export const Register = props => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [responseMessage, setResponseMessage] = useState("");

    const sendForm = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/register", {
            method: "POST",
            body: JSON.stringify({
                username,
                email,
                password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResponseMessage(data.message); // Ustawiamy wiadomość z JSON w stanie odpowiedzi
            })
            .catch((err) => {
                console.log(err.message);
                if (err.code === 11000) {
                    const {email, username} = err.errors;
                    const errorMessage = {
                        email: email ? email.message : "",
                        username: username ? username.message : "",
                    };
                    setResponseMessage(errorMessage);
                } else {
                    setResponseMessage(err.message); // Ustawiamy wiadomość błędu w stanie odpowiedzi
                }
            })
    };

    return (
        <div className="bg">
        <h2>Register</h2>
        <div className="login-container">
            <form onSubmit={sendForm} method="POST" className='register'>
                {responseMessage && <p>{responseMessage}</p>}
                <div className="icon-container">
                    <i className="fas fa-user"></i>
                    <input
                        type="text"
                        placeholder="Username"
                        className="login-input"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    ></input>
                </div>

                <div className="icon-container">
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="icon-container">
                    <i className="fa-regular fa-envelope"></i>
                    <input
                        type="email"
                        placeholder="Email"
                        className="login-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    ></input>
                </div>

                <button type="submit" className="login-btn">Login</button>
                <Link to="/login" className="Login">Login panel</Link>
            </form>
        </div>
    </div>
    );
};