import "./EditComment.css"
import React, {useState} from "react";


export const EditComment = ({userComment, user}) => {

    const [popup, setPopup] = useState(false)
    const [comment, setComment] = useState('')


    const sendForm = async e => {

        let commentID = userComment._id
        let commentAuthorID = userComment.author._id
        let userID = user.user._id

        console.log(userComment)

        e.preventDefault()
        await fetch(`http://localhost:5000/article-view/user-comment/edit/${userComment._id}`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({
                commentID,
                userID,
                commentAuthorID,
                comment
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.ok) {
                    setComment('')
                    setPopup(false)
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
            <i onClick={() => setPopup(true)} className="fa-solid fa-pencil"></i>
            {popup && (
                <div id="editPopup" className="edit-popup">
                    <div className="popup-content">
                        <span onClick={() => setPopup(false)} id="closePopup" className="close">&times;</span>
                        <form onSubmit={sendForm} method="POST" id="commentForm">
                        <textarea
                            id="commentText"
                            name="comment"
                            placeholder="Edit your comment"
                            required
                            value={comment}
                            onChange={e => setComment(e.target.value)}>
                        </textarea>
                            <input type="submit" value="Edit"/>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}