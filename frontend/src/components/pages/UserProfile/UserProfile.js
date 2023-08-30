import "./UserProfile.css"

import logo4 from "./Baby-White-Puppy-Dog-Cute-Pet-Dog-Puppy-Dog-Image.jpg"
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export const UserProfile = ({user}) => {

    const [singleUser, setSingleUser] = useState(null)
    const [userComments, setUserComments] = useState([])

    const { id } = useParams()


    useEffect( () => {

        const getSingleUserFromBackend = async () => {
            await fetch(`http://localhost:5000/user-profile/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.comments)
                    setSingleUser(data.user)
                    setUserComments(data.comments)
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getSingleUserFromBackend()

    }, [])

    return (
        <>
            {singleUser &&
                 <div className="user-profile">
                    <div className="user-profile-info">
                        <p className="user-profile-nickname">{singleUser.username}</p>
                        <img src={`http://localhost:5000/avatars/${singleUser.avatar}`} alt="user profile image" className="user-profile-img"/>
                        <ul>
                            <li>Administrator</li>
                            <li>Posts: {singleUser.postsNumber}</li>
                            <li>Likes: 43</li>
                            <li>Warnings: 1/5</li>
                        </ul>
                    </div>
                    <div className="user-profile-comments">
                        <h3>Last 5 comments:</h3>
                        {userComments.length > 0 ? (
                            userComments.map(comment => (
                                <div key={comment._id} className="user-comments-container">
                                    <h4> <Link to={`/article-view/${comment.thread?._id}`}>{comment.thread?.title} </Link></h4>
                                    <p>{comment.description}</p>
                                </div>
                            ))
                        ) : <p>No comments yet!</p>}

                    </div>
                </div>
            }
        </>
    );
}