import {useEffect, useState} from "react";


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
                                <img className="img-user" src="default-avatar.jpg" alt=""></img>
                            </div>
                            <div className="activity-user">
                                <h4 className="title">{topUser.username}</h4>
                                <p><i className="fa-solid fa-chart-line"></i> {topUser.commentNumber}</p>
                                <p><i className="likesIcon fa-regular fa-heart"></i> 24</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : null}
        </>
    );
}