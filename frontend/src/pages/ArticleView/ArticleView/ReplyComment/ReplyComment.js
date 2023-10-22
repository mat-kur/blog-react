import {useEffect, useState} from "react";
import React from "react";
import {useParams} from "react-router-dom";

import "./ReplyComment.css";

export const ReplyComment = ({popup, setPopup, commentID, userID, userComments, setUserComments, commentAuthorID}) => {

    const [activeForms, setActiveForms] = useState({})
    const [commentReply, setCommentReply] = useState('')
    const [repliesInfo, setRepliesInfo] = useState([]);

    const {id} = useParams()

    // console.log(userComments, userID, commentID)


    // console.log(repliesInfo)
    useEffect(() => {
        const fetchRepliesInfo = async () => {
            const fetchedRepliesInfo = {};
            for (const userComment of userComments) {
                const replyIDs = userComment.replies || [];
                const fetchedReplies = [];

                for (const replyID of replyIDs) {
                    const response = await fetch(`http://localhost:5000/article-view/get-reply/${replyID}`);
                    const replyData = await response.json();
                    console.log(replyData)
                    fetchedReplies.push(replyData);
                }

                fetchedRepliesInfo[userComment._id] = fetchedReplies;
            }

            setRepliesInfo(fetchedRepliesInfo);
        };

        fetchRepliesInfo();
    }, []);


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
                setPopup(false)
            })
            .catch((err) => {
                console.log(err.message);
            });


    }

    const userDeleteComment = async (commentID, replyID, userID) => {
        try {
            const response = await fetch(`http://localhost:5000/article-view/user-delete-reply-comment/${id}`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    commentID,
                    replyID,
                    userID
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (response.ok) {
                // Usuń odpowiedź z repliesInfo
                setRepliesInfo(prevRepliesInfo => {
                    const updatedRepliesInfo = { ...prevRepliesInfo }; // kopiowanie obecnego stanu
                    if (updatedRepliesInfo[commentID]) {
                        updatedRepliesInfo[commentID] = updatedRepliesInfo[commentID].filter(reply => reply && reply._id !== commentID);
                    }
                    return updatedRepliesInfo; // zwróć zaktualizowany stan
                });

                // Tutaj możesz dodać dodatkowy kod do ponownego pobierania komentarzy, jeśli jest to konieczne.
            } else {
                throw new Error("Wystąpił błąd serwera");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const activeFormReply = async commentID => {
        setPopup(true)
        setActiveForms(prevState => ({
            ...prevState,
            [commentID]: !prevState[commentID]
        }));

        console.log('test')
    };

    // console.log(userID)


    return (
        <>
            {repliesInfo[commentID]?.map(reply => (
                <div className="comment-reply">
                    <div className='reply-container'>
                        <img src={`http://localhost:5000/avatars/${reply?.author.avatar}`}
                             alt="User avatar"/>
                        <a href="#">{reply?.author.username}</a>
                    </div>
                    <div className='desc-container'>
                        <p>{reply?.description}</p>
                        {userID === reply?.author?._id && (
                            <div className="buttons-container-reply">
                                <i className="fa-solid fa-trash" onClick={() => userDeleteComment(commentID, reply._id, reply.author._id)}></i>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            {activeForms[commentID] && (
                popup && (
                    <div id="editPopup" className="edit-popup">
                        <div className="popup-content">
                            <span onClick={() => setPopup(false)} id="closePopup" className="close">&times;</span>
                            <textarea
                                id="commentText"
                                name="comment"
                                placeholder="Edit your comment"
                                required
                                value={commentReply}
                                onChange={e => setCommentReply(e.target.value)}>
                        </textarea>
                            <input className='send-report-btn' onClick={() => sendCommentReplyToBackend(commentID, userID)} type="submit" value="Send"/>
                        </div>
                    </div>
                )
            )}
        </>
    );
};
