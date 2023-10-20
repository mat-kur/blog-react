import "./ManageThread.css"
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {SearchBar} from "./SearchBar/SearchBar";


export const ManageThread = ({user}) => {

    const [threadList, setThreadList] = useState([])
    const [status, setStatus] = useState()


    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const pages = new Array(totalPages).fill(null).map((v, i) => i)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        const URL = searchQuery ?
            `http://localhost:5000/admin/thread-list/?q=${searchQuery}` :
            `http://localhost:5000/admin/thread-list/?page=${currentPage}`;

        const fetchData = async () => {
            if (currentPage !== null) {
                await fetch(URL)
                    .then(response => response.json())
                    .then(data => {
                        setThreadList(data.threadsList);
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

    const deleteThread = (id, userID) => {
        fetch('http://localhost:5000/admin/delete-thread', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                userID: userID,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.ok) {
                    setStatus('Usunięto pomyślnie')
                    return response.json();
                } else {
                    throw new Error('Wystąpił błąd podczas usuwania');
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };


    return (
        <section className="users-list">
            <SearchBar
                setThreadList={setThreadList}
                threadList={threadList}
                setSearchQuery={setSearchQuery}
            />
            <div className="new-thread">
                <button className="new-btn"><Link className="admin-thread-link" to='/admin/create-thread'>NEW THREAD </Link></button>
            </div>
            {Array.isArray(threadList) && threadList.map(thread => (
            <div key={thread._id} className="list-of-users">
                <div className="avatar">
                    <p>Thread image:</p>
                    <img className="single-user-avatar" src={`http://localhost:5000/thread-image/${thread.image}`} alt=""></img>
                </div>
                <div className="email">
                    <p>Title: </p>
                    <p className="single-user-email">{thread.title}</p>
                </div>
                <div className="username">
                    <p>Thread ID: </p>
                    <p className="single-user-username">{thread._id}</p>
                </div>
                <div className="username">
                    <p>Author: </p>
                    <p className="single-user-username">{thread.author.username}</p>
                </div>
                <div className="action">
                    <p>Actions: </p>
                    <button className="single-user-actions edit-btn"><Link to={`/admin/edit-thread/${thread._id}`}/>EDIT</button>
                    <button onClick={() => deleteThread(thread._id, user.user._id)} className="ban-btn">DELETE</button>
                </div>
            </div>
            ))}

            <table className="users-table">
                <thead>
                <tr>
                    <th>Thread Img</th>
                    <th>Title</th>
                    <th>Thread ID</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {Array.isArray(threadList) && threadList.map(thread => (
                <tr key={thread._id}>
                    <td><img src={`http://localhost:5000/thread-image/${thread.image}`} alt="User Avatar" className="avatar"></img></td>
                    <td>{thread.title}</td>
                    <td>{thread._id}</td>
                    <td>{thread.author.username}</td>
                    <td>
                        <button className="single-user-actions edit-btn"><Link to={`/admin/edit-thread/${thread._id}`}/>EDIT</button>
                        <button onClick={() => deleteThread(thread._id, user.user._id)} className="ban-btn">DELETE</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>

            <div className="pagination">
                {!searchQuery && pages.map((pageIndex) => (
                    <a key={pageIndex + 1} onClick={() => handlePageChange(pageIndex + 1)}>
                        {pageIndex + 1}
                    </a>
                ))}
            </div>

        </section>
    );
}