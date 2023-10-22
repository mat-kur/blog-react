import React, {useState} from "react";
import {TopComment} from "./TopComment/TopComment";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {ReplyComment} from "../ReplyComment/ReplyComment";
import {ReportComment} from "../ReportComment/ReportComment";
import {EditComment} from "../EditComment/EditComment";



export const UsersComments = props => {


    const {id} = useParams();
    const [comment, setComment,] = useState('')
    const [commentReply, setCommentReply] = useState('')

    const [popup, setPopup] = useState(false)
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
                setPopup(false)
                console.log(response)
            })
            .catch((err) => {
                console.log(err.message);
            });


    }

    const activeFormReply = async commentID => {
        setPopup(true)
        setActiveForms(prevState => ({
            ...prevState,
            [commentID]: !prevState[commentID]
        }));

        console.log('test')
    };

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
                                        <EditComment user ={user} userComment={userComment}/>
                                        <i onClick={() => userDeleteComment(userComment._id, userComment.author._id)} className="fa-solid fa-trash"></i>
                                        </>
                                    )}
                                {user && user.user &&
                                    (user.user._id !== userComment.author._id) &&
                                    (
                                        <>
                                            <i className="replyIcon fa-solid fa-reply" onClick={() => activeFormReply(userComment._id)}></i>
                                            {/*<ReplyComment commentID={userComment._id}/>*/}
                                            <ReportComment commentID={userComment._id} userID={user.user._id} userComments={userComments} authorOfComment={userComment.author.username} />
                                            <i onClick={() => handleCommentLike(userComment._id, userComment.author._id, user.user._id)} className={userComment.likedBy.includes(user.user._id) ? "heart-liked-comment fa-solid fa-heart" : "non-liked-comment fa-solid fa-heart"}></i>
                                        </>
                                    )
                                }
                            </div>
                            {activeForms[userComment._id] && (
                                popup && (
                                    <div id="editPopup" className="edit-popup">
                                        <div className="popup-content">
                                            <span onClick={() => setPopup(false)} id="closePopup" className="close">&times;</span>
                                            <textarea
                                                id="commentText"
                                                name="comment"
                                                placeholder="Reply to comment"
                                                required
                                                value={commentReply}
                                                onChange={e => setCommentReply(e.target.value)}>
                                            </textarea>
                                            <input className='send-report-btn' onClick={() => sendCommentReplyToBackend(userComment._id, user.user._id)} type="submit" value="Send"/>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <ReplyComment popup={popup} setPopup={setPopup} commentID={userComment._id} userID={user.user?._id} userComments={userComments} setUserComments={setUserComments} commentAuthorID={userComment.author._id} />
                    </section>
                ))
            ) : (
                <p>No comments yet!</p>
            )}
            <div className="pagination">
            {pages.map((pageIndex) => (
                    <a onClick={() => setCurrentPage(pageIndex + 1)}>
                        {pageIndex + 1}
                    </a>
            ))}
            </div>

        </>
    );
}