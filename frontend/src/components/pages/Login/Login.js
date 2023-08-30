import React, {useState, useEffect} from "react";
import {Navigate, Redirect} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
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

    // if (user !== null || undefined) {
    //     return <Navigate to="/"/>;
    // }



    return (
        <div className="register">
            <h2>Login</h2>
            <form onSubmit={sendForm} action="POST" className="register-form">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    className="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <a href="/#" className="login">
                Don't have an account yet?
            </a>
        </div>
    );
};