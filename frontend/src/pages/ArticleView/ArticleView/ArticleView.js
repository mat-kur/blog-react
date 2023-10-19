import "./ArticleView.css"

import React from 'react';
import {UsersComments} from "./UsersComments/UsersComments";
import {FormComment} from "./FormComment/FormComment";
import {useEffect, useState} from "react";
import {useParams, useLocation, Link} from 'react-router-dom';


export const ArticleView = ({user}) => {

    const {id} = useParams();
    const [isActive, setIsActive] = useState(true)
    const [singleThreadData, setSingleThreadData] = useState([])
    const [userComments, setUserComments] = useState([])
    const [usersLike, setUsersLike] = useState([])
    const [topComment, setTopComment] = useState(null)

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const URL = `http://localhost:5000/article-view/${id}?page=${currentPage}`

    useEffect(() => {
        const fetchDataFromBack = async () => {
            if (currentPage !== null) {
                await fetch(URL)
                    .then(response => response.json())
                    .then(data => {
                        setTopComment(data.data.comments)
                        setUserComments(data.data1)
                        setSingleThreadData(data.data);
                        setUsersLike(data.usersWhoLiked)
                        setCurrentPage(data.currentPage);
                        setTotalPages(data.totalPages);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }

        fetchDataFromBack()
    }, [currentPage]);


    useEffect(() => {
        // console.log(user);
    }, [user]);

    const sendUsersLike = async () => {
        if (user) {
            console.log(user)


            const userLike = await fetch(`http://localhost:5000/article-view/like/${id}`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    user: user.user._id,
                    threadId: id
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Wystąpił błąd podczas wysyłania");
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
            userLike();
        } else {
            return null
        }
    };

    const showWhoLikedArticle = () => {
        isActive === false ? setIsActive(true) : setIsActive(false)
    }

    const isUserLiked = () => {
        if (user && user.user && user.user._id) {
            return usersLike.some((likedUser) => likedUser.id === user.user._id);
        }
        return false;
    };


    const likeButtonColor = isUserLiked() ? "heart-liked fa-solid fa-heart" : "non-liked fa-regular fa-heart";


    return (
        <>
            <section className="article-view">
                <div className="article-info">
                    <img src={`http://localhost:5000/thread-image/${singleThreadData.image}`} alt="" />
                        <h3>{singleThreadData.title}</h3>
                </div>
                {singleThreadData.tags && singleThreadData.tags.length > 0 && (
                    <div className="article-tags">
                        {singleThreadData.tags.map(tag => (
                            <a key={tag}>
                                {tag}
                            </a>
                        ))}
                    </div>
                )}
                <div className="article-content">
                    <p className="article-content-par">
                        {singleThreadData.description}
                    </p>
                </div>

                <div className="article-activity">
                    <p className="author"><i className="fa-regular fa-user"></i> {singleThreadData.author?.username}</p>
                    {user === null || Object.keys(user).length === 0 ? null :
                        (<p onClick={sendUsersLike} className="border-test"><i className={`${likeButtonColor}`}></i></p>
                    )}
                </div>

            </section>
            {usersLike.length > 0 ?
            <section className="article-likes">
                <div>
                    <p>This thread has been liked by {usersLike.length} users:</p>
                    <button onClick={showWhoLikedArticle}>{isActive ? <i className="fa-solid fa-arrow-down"></i> : <i className="fa-solid fa-arrow-up"></i>}</button>
                </div>
                <div className="users-like-thread">
                    {(!isActive &&
                    <ul>
                        {usersLike.map(userName=> (
                        <li key={userName.id}><Link to={`/user-profile/${userName.id}`}>{userName.username},</Link></li>
                        ))}
                    </ul>
                    )}
                </div>
            </section>
                : "No likes yet"}
            <FormComment user={user}/>
            <UsersComments userComments={userComments}
                           setUserComments={setUserComments}
                           user={user} currentPage={currentPage}
                           totalPages={totalPages}
                           setCurrentPage={setCurrentPage}
                           topComment={topComment}/>
        </>
    );
}