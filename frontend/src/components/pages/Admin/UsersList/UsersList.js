import react, {useEffect, useState} from 'react'
import React from "react";
import "./UsersList.css"
import UserAdmin from "./UsersAction/AdminUser/AdminUser";
import UserBan from "./UsersAction/BanUser/BanUser";
import SearchBar from "./SearchBar/SearchBar";


export const UsersList = ({user}) => {

    const [usersList, setUsersList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [popupType, setPopupType] = useState(null);


    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedUsername, setSelectedUsername] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [userBanned, setUserBanned] = useState(null);

    const [searchQuery, setSearchQuery] = useState('');

    const handleAdminAccessClick = (userId, username, userAdmin, userIsBanned) => {
        setSelectedUserId(userId);
        setSelectedUsername(username)
        setUserRole(userAdmin)
        setUserBanned(userIsBanned)

    };

    useEffect(() => {
        const URL = searchQuery ?
            `http://localhost:5000/admin/users-list/?q=${searchQuery}` :
            'http://localhost:5000/admin/users-list/';

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsersList(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchQuery, usersList]);



    const setAdminRights = async (userID, userAdminID) => {
        try {
            await fetch(`http://localhost:5000/admin/users-list/acces-admin/`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    userID,
                    userAdminID

                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(async (response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err.message);
                })

        } catch (e) {
            console.log(e)
        }
    };

    const banUser = async (userID, userAdminID) => {
        try {
            await fetch(`http://localhost:5000/admin/users-list/ban-user/`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    userID,
                    userAdminID

                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(async (response) => {
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err.message);
                });

        } catch (e) {
            console.log(e)
        }

    };

    const commonButtons = (
        <>
            <button onClick={() => {
                if (popupType === 'admin') {
                    setAdminRights(selectedUserId, user.user._id);
                }
                if (popupType === 'ban') {
                    banUser(selectedUserId, user.user._id);
                }
                setPopupType(null);
            }}>Yes</button>
            <button onClick={() => setPopupType(null)}>No</button>
        </>
    );

    const adminMessage = userRole ?
        `Are you sure you want to take back admin access to user ${selectedUsername}?` :
        `Are you sure you want to give admin access to user ${selectedUsername}?`;

    const banMessage = userBanned ? `Are you sure you want to UNBAN ${selectedUsername}?` :
        `Are you sure you want to BAN ${selectedUsername}?`;


    return (
        <div>

            <SearchBar
                setUsersList={setUsersList}
                usersList={usersList}
                setSearchQuery={setSearchQuery} />
            {usersList && usersList.map(singleUser => (
                <div key={singleUser._id} className="user-container">
                    <p>{singleUser.username} username</p>
                    <p>{singleUser.isAdmin ? 'ADMIN' : 'USER'}</p>
                    <div className="action-buttons">
                        <UserAdmin
                            userId={singleUser._id}
                            username={singleUser.username}
                            isAdmin={singleUser.isAdmin}
                            setPopupType={setPopupType}
                            handleAdminAccessClick={handleAdminAccessClick}
                        />
                        <UserBan
                            userId={singleUser._id}
                            username={singleUser.username}
                            isAdmin={singleUser.isAdmin}
                            isBanned={singleUser.banned}
                            setPopupType={setPopupType}
                            handleAdminAccessClick={handleAdminAccessClick}
                        />
                    </div>
                    <br></br>
                </div>
            ))}


            {popupType && (
                <div className="popup">
                    <button onClick={() => setPopupType(null)}>Close</button>
                    {popupType === 'admin' && <h2>{adminMessage}</h2>}
                    {popupType === 'ban' && <p>{banMessage}</p>}
                    {commonButtons}
                </div>
            )}
        </div>
    );

}