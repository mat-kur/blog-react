import "./RecentPosts.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export const RecentPosts = props => {

    const [threadTitle, setThreadTitle] = useState([])

    useEffect(() => {
        const fetchDataFromBack = async () => {
            fetch('http://localhost:5000/api/homepage')
                .then(response => response.json())
                .then(data => {
                    setThreadTitle(data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }

        fetchDataFromBack()
    }, []);

    return(
        <div className="recent-posts">
            <h3><i className="fa-solid fa-signal"></i> Recent Posts</h3>
            {threadTitle.slice(0, 5).map(thread => (
                <Link key={thread._id} to={`/article-view/${thread._id}`} className="posts">{thread.title}</Link>
                ))}
        </div>
    );
}