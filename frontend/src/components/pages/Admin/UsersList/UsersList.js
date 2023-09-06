import react, {useEffect, useState} from 'react'
import React from "react";
import "./UsersList.css"
import UserAdmin from "./UsersAction/AdminUser/AdminUser";
import UserBan from "./UsersAction/BanUser/BanUser";
import SearchBar from "./SearchBar/SearchBar";
import {Link} from "react-router-dom";


export const UsersList = ({user}) => {

    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [popupType, setPopupType] = useState(null);


    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedUsername, setSelectedUsername] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [userBanned, setUserBanned] = useState(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const handleAdminAccessClick = (userId, username, userAdmin, userIsBanned) => {
        setSelectedUserId(userId);
        setSelectedUsername(username)
        setUserRole(userAdmin)
        setUserBanned(userIsBanned)

    };

    const pages = new Array(totalPages).fill(null).map((v, i) => i)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        const URL = searchQuery ?
            `http://localhost:5000/admin/users-list/?q=${searchQuery}` :
            `http://localhost:5000/admin/users-list/?page=${currentPage}`;

        const fetchData = async () => {
            if (currentPage !== null) {
                await fetch(URL)
                    .then(response => response.json())
                    .then(data => {
                        setUsersList(data.usersList);
                        setCurrentPage(data.currentPage);
                        setTotalPages(data.totalPages);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        };

        fetchData();
    }, [searchQuery, currentPage]);



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


            {Array.isArray(usersList) && usersList.map(singleUser => (
                <div key={singleUser._id} className="user-container">
                    <Link to={`/user-profile/${singleUser._id}`}>{singleUser.username}</Link>
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

            {!searchQuery && pages.map((pageIndex) => (
                <button key={pageIndex + 1} onClick={() => handlePageChange(pageIndex + 1)}>
                    {pageIndex + 1}
                </button>
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