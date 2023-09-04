import react, {useEffect, useState} from 'react'
import React from "react";


export const UsersActions = props => {

    const [usersList, setUsersList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(async () => {
        const URL = 'http://localhost:5000/admin/users-list/';

        await fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setUsersList(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const accesAdmin = (userID) => {
        console.log(userID)
    }

    const banUSer = (userID) => {
        console.log(userID)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {usersList && usersList.map(user => (
                <div key={user._id}>
                    <p>{user.username} username</p>
                    <p>{user.isAdmin ? "ADMIN" : "USER"}</p>
                    <button onClick={() => accesAdmin(user._id)}>ACCES ADMIN</button>
                    <button onClick={() => banUSer(user._id)}>BAN USER</button>
                </div>
            ))}

        </div>
    );

}