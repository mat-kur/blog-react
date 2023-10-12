import React, {useState} from "react";
import {TopComment} from "./TopComment/TopComment";
import {useParams} from "react-router";



export const UsersComments = props => {



    const {id} = useParams();
    const [comment, setComment,] = useState('')

    const {userComments, user, setUserComments, totalPages, currentPage, setCurrentPage, topComment} = props

    const URL = `http://localhost:5000/article-view/${id}`

    const pages = new Array(totalPages).fill(null).map((v, i) => i)

    const sendForm = async e => {
        e.preventDefault()
        await fetch(`http://localhost:5000/article-view/${id}`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({
                comment
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.ok) {
                    setComment('')
                    return response.json();
                } else {
                    throw new Error("Wystąpił błąd podczas logowania");
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const userDeleteComment = async (commentID, userID) => {


        await fetch(`http://localhost:5000/article-view/user-delete-comment/${id}`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({
                commentID,
                userID

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(async (response) => {
                if (response.ok) {
                    await fetch(URL)
                        .then(response => response.json())
                        .then(data => {
                            setUserComments(data.data.comments)
                        })
                        .catch(error => {
                            console.log(error);
                        });

                } else {
                    throw new Error("Wystąpił błąd serwera");
                }
            })
            .catch((err) => {
                console.log(err.message);
            });


    }

    const handleCommentLike = async (commentID, userID, userSessionID)  => {

        await fetch(`http://localhost:5000/article-view/user-like-comment/${id}`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({
                commentID,
                userID,
                userSessionID
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.ok) {
                    setComment('')
                    return response.json();
                } else {
                    throw new Error("Wystąpił błąd podczas logowania");
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <>
            <TopComment userComments={topComment}/>
            <section className="users-comments">
                <div className="wrapper-comments">

                    <div className="likes-activity">
                        <p className="comment-likes">Likes: 10</p>
                        <p className="date-clock"><i className="fa-regular fa-clock"></i> 11.09.2023</p>
                    </div>
                    <div className="top-comment">
                        <div>
                            <img src="./default-avatar.jpg" alt=""></img>
                            <a href="#">Admin</a>
                        </div>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eum
                            harum necessitatibus tempore. Cum deserunt exercitationem facere, illo nam non nulla optio
                            praesentium, quisquam reiciendis reprehenderit sed sunt suscipit! Animi.</p>
                    </div>
                    <div className="admin-response">
                        <a href="#">Admin:</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, iste!</p>
                    </div>
                    <div className="comment-activity-normal">
                        <i className="fa-solid fa-pencil"></i>
                        <i className="fa-solid fa-trash"></i>
                        <i className="fa-solid fa-reply"></i>
                        <i className="fa-solid fa-flag"></i>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>

                <div className="comment-reply">
                    <div>
                        <img src="./default-avatar.jpg" alt=""></img>
                        <a href="#">User</a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, obcaecati?</p>
                </div>
                <div className="comment-reply">
                    <div>
                        <img src="./default-avatar.jpg" alt=""></img>
                        <a href="#">User</a>
                    </div>
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
                        totam.met, consectetur adipisicing elit. Blanditiis, obcaecati?</p>
                </div>
                <div className="comment-reply">
                    <div>
                        <img src="./default-avatar.jpg" alt=""></img>
                        <a href="#">User</a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, obcaecati?</p>
                </div>
            </section>

            <section className="users-comments">
                <div className="wrapper-comments">

                    <div className="likes-activity">
                        <p className="comment-likes">Likes: 10</p>
                        <p className="date-clock"><i className="fa-regular fa-clock"></i> 11.09.2023</p>
                    </div>
                    <div className="top-comment">
                        <div>
                            <img className="test-img" src="./default-avatar.jpg" alt=""></img>
                            <a href="#">Admin</a>
                        </div>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eum
                            harum necessitatibus tempore. Cum deserunt exercitationem facere, illo nam non nulla optio
                            praesentium, quisquam reiciendis reprehenderit sed sunt suscipit! Animi.</p>
                    </div>
                    <div className="comment-activity-normal">
                        <i className="fa-solid fa-pencil"></i>
                        <i className="fa-solid fa-trash"></i>
                        <i className="fa-solid fa-reply"></i>
                        <i className="fa-solid fa-flag"></i>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>

                <div className="comment-reply">
                    <div>
                        <img src="./default-avatar.jpg" alt=""></img>
                        <a href="#">User</a>
                    </div>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa cupiditate
                        et eveniet fugit magni officiis pariatur quam velit veniam. sit amet, consectetur adipisicing
                        elit. Blanditiis, obcaecati?</p>
                </div>
            </section>

            <section className="users-comments">
                <div className="wrapper-comments">

                    <div className="likes-activity">
                        <p className="comment-likes">Likes: 10</p>
                        <p className="date-clock"><i className="fa-regular fa-clock"></i> 11.09.2023</p>
                    </div>
                    <div className="top-comment">
                        <div>
                            <img src="./default-avatar.jpg" alt=""></img>
                            <a href="#">Admin</a>
                        </div>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eum
                            harum necessitatibus tempore. Cum deserunt exercitationem facere, illo nam non nulla optio
                            praesentium, quisquam reiciendis reprehenderit sed sunt suscipit! Animi.</p>
                    </div>
                    <div className="comment-activity-normal">
                        <i className="fa-solid fa-pencil"></i>
                        <i className="fa-solid fa-trash"></i>
                        <i className="fa-solid fa-reply"></i>
                        <i className="fa-solid fa-flag"></i>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>
            </section>
        </>
    );
};