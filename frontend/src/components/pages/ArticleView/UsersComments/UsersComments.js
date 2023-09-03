import logo3 from "../Baby-White-Puppy-Dog-Cute-Pet-Dog-Puppy-Dog-Image.jpg";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {TopComment} from "./TopComment/TopComment";
import {ReplyComment} from "./ReplyComment/ReplyComment";
import {ReportUser} from "./ReportUser/ReportUser";


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
        <div className="comments-container">
            {user && user.user &&
                <div className="form-comment">
                    <img src={`http://localhost:5000/avatars/${user.user.avatar}`} alt="useravatar" className="user-avatar-comment"/>
                    <form onSubmit={sendForm} className="form">
                    <textarea name="comment"
                              value={comment}
                              onChange={e => setComment(e.target.value)}></textarea>
                        <button type="submit" className="form-button" type="submit">Post comment</button>
                    </form>
                </div>
            }
            <TopComment userComments={topComment} />


            {userComments.length > 0 ? (
                <>
                    <h3><span>{userComments.length}</span> Comments</h3>
                    {userComments.map(userComment => (
                        <div key={userComment._id} className="comments-users">
                            <img src={`http://localhost:5000/avatars/${userComment.author.avatar}`} alt="" className="user-avatar-comment"/>
                            <div className="comments-content">
                                <Link to={`/user-profile/${userComment.author._id}`}
                                      className="comments-author"> {userComment.author.username}</Link>
                                <p className="comments-time">{userComment.date}</p>
                                <p className="comments-description">{userComment.description}</p>
                                    {userComment.reportContent &&
                                        <div key={userComment._id}>
                                            <p>{userComment.reportContent}</p>
                                            <p>{userComment.reportApprover?.username}</p>
                                        </div>

                                    }
                                <div className="comments-buttons">

                                    {user && user.user &&
                                        (user.user._id === userComment.author._id || user.user.isAdmin === 1)
                                        && (
                                            <>
                                                <i onClick={() => userDeleteComment(userComment._id, userComment.author._id)}
                                                   className="fa-regular fa-trash-can"></i>
                                                <i
                                                    className="fa-regular fa-pen-to-square"></i>
                                            </>
                                        )}
                                    {user && user.user &&
                                        (user.user._id !== userComment.author._id) &&
                                        (
                                            <>
                                                <i
                                                    onClick={() => handleCommentLike(userComment._id, userComment.author._id, user.user._id)}
                                                    className={`${userComment.likedBy.includes(user.user._id) ? 'like fa-regular fa-thumbs-down like-button' : 'fa-regular fa-thumbs-up like-button'}`}
                                                ></i>
                                                <ReplyComment commentID={userComment._id} userID={user.user._id} userComments={userComments} />
                                                <ReportUser commentID={userComment._id} userID={user.user._id} userComments={userComments} />
                                            </>
                                        )
                                    }

                                    <p className="likes comments-time">{userComment.likes === 0 ? null : `Likes: ${userComment.likes}`}</p>

                                </div>
                            </div>
                            {/* Rendering of comment replies */}
                            {userComment.replies?.map(replyID => {
                                const reply = userComments.find(comment => comment._id === replyID);
                                if (reply) {
                                    return (
                                        <div key={reply._id} className="reply">
                                            {/* Render reply information here */}
                                            <p>{reply.description}</p>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    ))}
                </>
            ) : (
                <p>No comments yet!</p>
            )}
            {pages.map((pageIndex) => (
                <button key={pageIndex + 1} onClick={() => setCurrentPage(pageIndex + 1)}>
                    {pageIndex + 1}
                </button>
            ))}
        </div>
    );
}


// {userComments.replies?.map(reply => (
//     <p>{reply._id}</p>
// ))}