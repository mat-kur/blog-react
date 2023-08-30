import "./Register.css"
import {useState} from "react";

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
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={sendForm} method="POST" className="register-form">
                {responseMessage && <p>{responseMessage}</p>}
                <label htmlFor="username">Username</label>
                <input type="text" className="username" required
                       value={username}
                       onChange={e => setUsername(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input type="email" className="email" required
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" className="password" required
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
            <a href="/#" className="login">Dont have account yet?</a>
        </div>
    );
}