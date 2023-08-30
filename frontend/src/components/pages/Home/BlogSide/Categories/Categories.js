import "./Categories.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export const Categories = props => {

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
        <div className="recent-posts">
            <h3><i className="fa-solid fa-chart-line"></i> Most active users:</h3>
            {topUsers.length > 0 ? (
                topUsers.map(topUser => (
                    <div key={topUser._id}>
                        <Link to={`/user-profile/${topUser._id}`} className="posts">{topUser.username} <span>({topUser.commentNumber})</span></Link>
                    </div>
                ))
            ) : null}

        </div>
    );
}