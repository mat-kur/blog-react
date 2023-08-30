import "./ArticleView.css"
import logo from "./images.jpg"
import logo2 from "./istockphoto-1217560929-612x612.jpg"
import logo3 from "./Baby-White-Puppy-Dog-Cute-Pet-Dog-Puppy-Dog-Image.jpg"
import {useEffect, useState} from "react";

import {useParams, useLocation, Link} from 'react-router-dom';
import {UsersComments} from "./UsersComments/UsersComments";


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



    const likeButtonColor = {
        color: isUserLiked() ? '#53a48a' : '#7ec8fd',
    };


    return (
        <>
            <div key={singleThreadData.author} className="article-view">
                <div className="article-user-profile">
                    <img className="user-avatar" src={`http://localhost:5000/avatars/${singleThreadData.author?.avatar}`} alt="user avatar"/>
                    <p>Posts: {singleThreadData.author?.postsNumber ?? 'Loading...'}</p>
                    <p>Likes: 34</p>
                </div>
                <div className="article-author">
                    <a href="/#">{singleThreadData.author?.username ?? 'Loading...'}</a>
                    <p>{singleThreadData.date}</p>


                        <div  className="article-content">
                            {/*<img className="article-image" src={logo2} alt="article image"/>*/}
                            <p>{singleThreadData.description}</p>
                            <div className="aricle-icons">
                                <i className="fa-regular fa-trash-can"></i>
                                <i className="fa-regular fa-pen-to-square"></i>
                                {user === null || Object.keys(user).length === 0 ? null : (
                                    <i onClick={sendUsersLike} style={likeButtonColor} className="fa-regular fa-thumbs-up"></i>
                                )}
                            </div>

                            {usersLike.length > 0 ?
                            <div className="article-likes">
                                <p>This arcitle has been liked by {usersLike.length} users <span><button className="like-btn" onClick={showWhoLikedArticle}>{isActive ? "SHOW" : "HIDE"}</button></span>
                                </p>
                                {(!isActive &&
                                    <ul>
                                        {usersLike.map(userName=> (
                                                <li key={userName.id}><Link to={`/user-profile/${userName.id}`} >{userName.username}</Link></li>
                                        ))}
                                    </ul>)}
                            </div>
                                : "No likes yet"}
                        </div>

                </div>
            </div>
            <UsersComments userComments={userComments}
                           setUserComments={setUserComments}
                           user={user} currentPage={currentPage}
                           totalPages={totalPages}
                           setCurrentPage={setCurrentPage}
                           topComment={topComment}
            />
        </>
    );
}