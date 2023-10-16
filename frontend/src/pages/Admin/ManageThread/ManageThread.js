import "./ManageThread.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export const ManageThread = ({user}) => {

    const [threadList, setThreadList] = useState([])
    const [status, setStatus] = useState()

    // console.log(user.user._id)

    useEffect(() => {
        const fetchDataFromBack = async () => {
            fetch('http://localhost:5000/api/homepage')
                .then(response => response.json())
                .then(data => {
                    console.log(data.data)
                    console.log(data)
                    setThreadList(data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }

        fetchDataFromBack()
    }, []);

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
            <div className="search-bar">
                <input type="text" placeholder="Search by thread title"></input>
                    <i className="fa-solid fa-search"></i>
                    <button className="submit">SEARCH</button>
            </div>
            <div className="new-thread">
                <button className="new-btn"><Link className="admin-thread-link" to='/admin/create-thread'>NEW THREAD </Link></button>
            </div>
            {threadList && threadList.map(thread => (
            <div key={thread._id} className="list-of-users">
                <div className="avatar">
                    <p>Thread image:</p>
                    <img className="single-user-avatar" src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt=""></img>
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
                {threadList && threadList.map(thread => (
                <tr key={thread._id}>
                    <td><img src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt="User Avatar" className="avatar"></img></td>
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

            <div class="pagination">
                <a href="#">1</a>
                <a href="#" className="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
            </div>

        </section>
    );
}