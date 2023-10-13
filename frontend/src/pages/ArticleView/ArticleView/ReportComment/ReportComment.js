import {useState} from 'react'
import React from "react";
import {useParams} from "react-router-dom";


export const ReportComment = ({commentID, userID, userComments, authorOfComment}) => {

    const { id } = useParams()

    const [activeForms, setActiveForms] = useState({})
    const [reason, setReason] = useState('')

    const reportUser = (commentID) => {
        setActiveForms(prevState => ({
            ...prevState,
            [commentID]: !prevState[commentID]
        }));
    }

    const sendUserReportToBackend = async (commentID, userID, e) => {

        await fetch(`http://localhost:5000/article-view/user-report-comment/${id}`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({
                commentID,
                userID,
                reason,
                authorOfComment
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
            <i className="fa-solid fa-flag" onClick={() => reportUser(commentID)}></i>
            {activeForms[commentID] && (
                <div>
                    <form>
                        <textarea name="reply"
                                  value={reason}
                                  onChange={e => setReason(e.target.value)}></textarea>
                        <button onClick={() => sendUserReportToBackend(commentID, userID)}>send</button>
                    </form>
                </div>
            )}
        </>
    );
}