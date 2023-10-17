import "./ManageUsers.css";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BanUser} from "./BanUser/BanUser";
import {SetAdminPermissions} from "./SetAdminPermissions/SetAdminPermissions";
import {SearchBar} from "./SearchBar/SearchBar";


export const ManageUsers = ({user}) => {

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

    // console.log(usersList)

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
            <button className='yes-button' onClick={() => {
                if (popupType === 'admin') {
                    setAdminRights(selectedUserId, user.user._id);
                }
                if (popupType === 'ban') {
                    banUser(selectedUserId, user.user._id);
                }
                setPopupType(null);
            }}>Yes</button>
            <button className='no-button' onClick={() => setPopupType(null)}>No</button>
        </>
    );


    const adminMessage = userRole ?
        <p className='buttons-paragraph'>{`Are you sure you want to take back admin access to user ${selectedUsername}?`}</p> :
        <p className='buttons-paragraph'>{`Are you sure you want to give admin access to user ${selectedUsername}?`}</p>;

    const banMessage = userBanned ? <p className='buttons-paragraph'>
            {`Are you sure you want to UNBAN ${selectedUsername}?`}</p> :
        <p className='buttons-paragraph'>{`Are you sure you want to BAN ${selectedUsername}?`}</p>;


    return (
        <section className="users-list">
            <SearchBar
                setUsersList={setUsersList}
                usersList={usersList}
                setSearchQuery={setSearchQuery}
            />

            {Array.isArray(usersList) && usersList.map(singleUser => (
            <div key={singleUser._id} className="list-of-users">
                <div className="avatar">
                    <p>Avatar:</p>
                    <img className="single-user-avatar" src={`http://localhost:5000/avatars/${singleUser.avatar}`} alt=""></img>
                </div>
                <div className="username">
                    <p>Username: </p>
                    <p className="single-user-username">{singleUser.username}</p>
                </div>
                <div className="email">
                    <p>Email: </p>
                    <p className="single-user-email">{singleUser.email}</p>
                </div>
                <div className="role">
                    <p>Role: </p>
                    <p className="single-user-role">{singleUser.isAdmin}</p>
                </div>
                <div className="action">
                    <p>Actions: </p>
                    <SetAdminPermissions
                        userId={singleUser._id}
                        username={singleUser.username}
                        isAdmin={singleUser.isAdmin}
                        setPopupType={setPopupType}
                        handleAdminAccessClick={handleAdminAccessClick}
                    />
                    <BanUser
                        userId={singleUser._id}
                        username={singleUser.username}
                        isAdmin={singleUser.isAdmin}
                        isBanned={singleUser.banned}
                        setPopupType={setPopupType}
                        handleAdminAccessClick={handleAdminAccessClick}
                    />
                </div>
            </div>
    ))}

            <table className="users-table">
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {Array.isArray(usersList) && usersList.map(singleUser => (
                    <tr key={singleUser._id}>
                    <td><img src={`http://localhost:5000/avatars/${singleUser.avatar}`} alt="User Avatar" className="avatar"></img></td>
                    <td>{singleUser.username}</td>
                    <td>{singleUser.email}</td>
                    <td>{singleUser.isAdmin}</td>
                    <td className='buttons-container'>
                        <SetAdminPermissions
                            userId={singleUser._id}
                            username={singleUser.username}
                            isAdmin={singleUser.isAdmin}
                            setPopupType={setPopupType}
                            handleAdminAccessClick={handleAdminAccessClick}
                        />
                        <BanUser
                            userId={singleUser._id}
                            username={singleUser.username}
                            isAdmin={singleUser.isAdmin}
                            isBanned={singleUser.banned}
                            setPopupType={setPopupType}
                            handleAdminAccessClick={handleAdminAccessClick}
                        />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {popupType && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="button-container">
                            {popupType === 'admin' && <h2>{adminMessage}</h2>}
                            {popupType === 'ban' && <p>{banMessage}</p>}
                            {commonButtons}
                        </div>
                    </div>
                </div>
            )}

            <div className="pagination">
                {!searchQuery && pages.map((pageIndex) => (
                    <a key={pageIndex + 1} onClick={() => handlePageChange(pageIndex + 1)}>
                        {pageIndex + 1}
                    </a>
                ))}
            </div>

        </section>
    );
};