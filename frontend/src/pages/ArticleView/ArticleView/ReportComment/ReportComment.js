import {useState} from 'react'
import React from "react";
import {useParams} from "react-router-dom";


export const ReportComment = ({commentID, userID, userComments, authorOfComment}) => {

    const { id } = useParams()


    const [popup, setPopup] = useState(false)
    const [activeForms, setActiveForms] = useState({})
    const [reason, setReason] = useState('')

    const reportUser = (commentID) => {
        setPopup(true)
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
                setPopup(false)
            })
            .catch((err) => {
                console.log(err.message);
            });



    }

    return (
        <>
            <i className="fa-solid fa-flag" onClick={() => reportUser(commentID)}></i>
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
                            value={reason}
                            onChange={e => setReason(e.target.value)}>
                        </textarea>
                                <input className='send-report-btn' onClick={() => sendUserReportToBackend(commentID, userID)} type="submit" value="Send"/>
                        </div>
                    </div>
                )
            )}
        </>
    );
}