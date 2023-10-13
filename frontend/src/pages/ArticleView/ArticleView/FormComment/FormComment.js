import React, {useState} from "react";
import {useParams} from "react-router-dom";


export const FormComment = ({user}) => {

    const [comment, setComment,] = useState('')
    const {id} = useParams();
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

    return (
        <>
            {user && user.user &&
            <section className="form-comment">
                <div className="form">
                    <form onSubmit={sendForm} action="">
                        <div className="form-group">
                            <img src={`http://localhost:5000/avatars/${user.user.avatar}`} alt=""></img>
                            <textarea name="comment"
                                      value={comment}
                                      onChange={e => setComment(e.target.value)}></textarea>
                        </div>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </section>
            }
        </>
    );
};