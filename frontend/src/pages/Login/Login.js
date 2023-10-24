import "./Login.css";

import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';

export const Login = ({setUser, user}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    // const [user, setUser] = useState(null);

    const history = useNavigate()

    useEffect(() => {
        // Pobranie informacji o zalogowanym użytkowniku po załadowaniu komponentu
        fetch("http://localhost:5000/isUserLogged", {
            method: "GET",
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const sendForm = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/login", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
                if (response.ok) {
                    // return <Navigate to="/"/>
                    return response.json()
                } else {
                    throw new Error("Wystąpił błąd podczas logowania");
                }
            })
            .then((data) => {
                setResponseMessage(data.message);
                setUser(data.user);
                history('/');
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className="bg">
            <h2>Login panel</h2>
            <div className="login-container">
                <form onSubmit={sendForm} action="POST">
                    <div className="icon-container">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-input"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </div>
                    <div className="icon-container">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <Link to="/register" className="register-link">Register</Link>
                </form>
            </div>
        </div>
       );
};