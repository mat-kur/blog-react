import React, {useState, useEffect} from 'react';
import './UserProfile.css';
import {Link, useParams} from "react-router-dom";

const UserProfile = ({user}) => {

    const [singleUser, setSingleUser] = useState(null)
    const [userComments, setUserComments] = useState([])

    const {id} = useParams()


    useEffect(() => {

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
                    {
                        singleUser._id === user.user?._id && (
                            <div className="user-profile-action">
                                <button className="edit-profile"><Link className="user-edit-link" to={`/user-profile/edit/${user.user._id}`}>EDIT</Link></button>
                            </div>
                        )
                    }
                    <div className="user-info">
                        <h2>{singleUser.username}</h2>
                        <img src={`http://localhost:5000/avatars/${singleUser.avatar}`} alt="avatar użytkownika"/>
                        <p><span className='span-userinfo'>Comments:</span> {singleUser.commentNumber}</p>
                        <p><span className='span-userinfo'>Likes: </span>{singleUser.likes}</p>
                    </div>
                    <div className="user-comments">
                        <h3>Last activity</h3>
                        {userComments.length > 0 ? (
                            userComments.map(comment => (
                                <div key={comment._id} className="comment">
                                    <p>{comment.description}</p>
                                    <span>{comment.date}</span>
                                </div>
                            ))
                        ) : <p>No comments yet!</p>}
                    </div>
                </div>
            }
        </>
    );
};

export default UserProfile;
