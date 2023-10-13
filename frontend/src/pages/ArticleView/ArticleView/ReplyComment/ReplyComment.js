import {useEffect, useState} from "react";
import React from "react";
import {useParams} from "react-router-dom";


export const ReplyComment = ({commentID, userID, userComments}) => {

    const [activeForms, setActiveForms] = useState({})
    const [commentReply, setCommentReply] = useState('')
    const [repliesInfo, setRepliesInfo] = useState([]);



    const {id} = useParams()


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
            })
            .catch((err) => {
                console.log(err.message);
            });


    }

    return (
        <>
            {repliesInfo[commentID]?.map(reply => (
                <div className="comment-reply">
                    <div>
                        <img src={`http://localhost:5000/avatars/${reply?.author.avatar}`}
                             alt="User avatar"/>
                        <a href="#">{reply?.author.username}</a>
                    </div>
                    <p>{reply?.description}</p>
                </div>
            ))}

            {activeForms[commentID] && (
                <div>
                    <form>
                        <textarea name="reply"
                                  value={commentReply}
                                  onChange={e => setCommentReply(e.target.value)}></textarea>
                        <button onClick={() => sendCommentReplyToBackend(commentID, userID)}>send</button>
                    </form>
                </div>
            )}
        </>
    );
};
