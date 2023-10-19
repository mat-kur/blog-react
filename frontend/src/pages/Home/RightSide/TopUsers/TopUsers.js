import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export const TopUsers = props => {

    const [topUsers, setTopUsers] = useState([])

    useEffect(() => {

        const getTopThreadsFromDB = async () => {
            await fetch('http://localhost:5000/api/homepage/topusers')
                .then(response => response.json())
                .then(data => {
                    setTopUsers(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getTopThreadsFromDB()

    }, [])

    return (
        <>
            <div className="title-h3"><h3>Top users</h3></div>
            {topUsers.length > 0 ? (
                topUsers.map(topUser => (
                    <div key={topUser._id} className="newest-posts">
                        <div className="container-activity">
                            <div className="img-user">
                                <img className='img-user' src={`http://localhost:5000/avatars/${topUser.avatar}`}
                                     alt="User avatar"/>
                            </div>
                            <div className="activity-user">
                                <h4 className="title"><Link className="title-link" to={`/user-profile/${topUser._id}`}>{topUser.username}</Link></h4>
                                <p><i className="fa-solid fa-chart-line"></i> {topUser.commentNumber}</p>
                                <p><i className="likesIcon fa-regular fa-heart"></i> {topUser.likes}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : null}
        </>
    );
}