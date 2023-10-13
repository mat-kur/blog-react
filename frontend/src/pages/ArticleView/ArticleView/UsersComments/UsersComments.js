import React, {useState} from "react";
import {TopComment} from "./TopComment/TopComment";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {ReplyComment} from "../ReplyComment/ReplyComment";
import {ReportComment} from "../ReportComment/ReportComment";



export const UsersComments = props => {


    const {id} = useParams();
    const [comment, setComment,] = useState('')
    const [commentReply, setCommentReply] = useState('')

    const [activeForms, setActiveForms] = useState({})
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

    const handleCommentLike = async (commentID, userID, userSessionID) => {

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

    const activeFormReply = async commentID => {
        setActiveForms(prevState => ({
            ...prevState,
            [commentID]: !prevState[commentID]
        }));

        console.log('test')
    };

    const sendCommentReplyToBackend = async (commentID, userID, e) => {

        await fetch(`http://localhost:5000/article-view/user-reply-comment/${id}`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({
                commentID,
                userID,
                commentReply
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


    }

    return (
        <>
            <TopComment userComments={topComment}/>
            {userComments.length > 0 ? (
                userComments.map(userComment => (
                    <section key={userComment._id} className="users-comments">


                        <div className="wrapper-comments">
                            <div className="likes-activity">
                                <p className="comment-likes">{userComment.likes === 0 ? null : `Likes: ${userComment.likes}`}</p>
                                <p className="date-clock">
                                    <i className="fa-regular fa-clock"></i> {userComment.date}
                                </p>
                            </div>


                            <div className="top-comment">
                                <div>
                                    <img src={`http://localhost:5000/avatars/${userComment.author.avatar}`}
                                         alt="User avatar"/>
                                    <Link
                                        to={`/user-profile/${userComment.author._id}`}>{userComment.author?.username}</Link>
                                </div>
                                <p className="content">{userComment.description}</p>
                            </div>



                            {userComment.reportContent &&
                                <div className="admin-response">
                                    <a href="#">{userComment.reportApprover?.username}</a>
                                    <p>{userComment.reportContent}</p>
                                </div>
                            }


                            <div className="comment-activity-normal">
                                {user && user.user &&
                                    (user.user._id === userComment.author._id || user.user.isAdmin === 1)
                                    && (
                                        <>
                                        <i className="fa-solid fa-pencil"></i>
                                        <i onClick={() => userDeleteComment(userComment._id, userComment.author._id)} className="fa-solid fa-trash"></i>
                                        </>
                                    )}
                                {user && user.user &&
                                    (user.user._id !== userComment.author._id) &&
                                    (
                                        <>
                                            <i className="fa-solid fa-reply" onClick={() => activeFormReply(userComment._id)}></i>

                                            <ReportComment commentID={userComment._id} userID={user.user._id} userComments={userComments} authorOfComment={userComment.author.username} />
                                            <i onClick={() => handleCommentLike(userComment._id, userComment.author._id, user.user._id)} className="fa-regular fa-heart"></i>
                                        </>
                                    )
                                }
                            </div>
                            {activeForms[userComment._id] && (
                                <div>
                                    <form>
                                                         <textarea name="reply"
                                                                   value={commentReply}
                                                                   onChange={e => setCommentReply(e.target.value)}></textarea>
                                        <button onClick={() => sendCommentReplyToBackend(userComment._id, user.user._id)}>send</button>
                                    </form>
                                </div>
                            )}
                        </div>
                        <ReplyComment commentID={userComment._id} userID={user.user?._id} userComments={userComments} />
                    </section>
                ))
            ) : (
                <p>No comments yet!</p>
            )}
            {pages.map((pageIndex) => (
                <div key={pageIndex + 1} className="pagination">
                    <a onClick={() => setCurrentPage(pageIndex + 1)}>
                        {pageIndex + 1}
                    </a>
                </div>
            ))}

        </>
    );
}