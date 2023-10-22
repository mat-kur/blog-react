import "./Dashboard.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export const Dashboard = props => {

    const [totalThreads, setTotalThreads] = useState(2)
    const [totalComments, setTotalComments] = useState(2)
    const [totalUsers, setTotalUsers] = useState(2)
    const [totalLikesSummary, setTotalLikesSummary] = useState(2)

    const [lastFiveThreads, setLastFiveThreads] = useState([])
    const [lastFiveComments, setLastFiveComments] = useState([])


    useEffect(() => {
        const countedItemsFromBackend = async () => {
            const URL = 'http://localhost:5000/api/homepage/countthreads';
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setTotalThreads(data.threadCount);
                setTotalComments(data.commentCount);
                setTotalUsers(data.userCount);
                setTotalLikesSummary(data.totalLikesSummary);
                setLastFiveThreads(data.lastFiveThreads);
                setLastFiveComments(data.lastFiveComments);
            } catch (error) {
                console.error(error);
            }
        };

        countedItemsFromBackend(); // przenieś to wywołanie tutaj, poza blok try...catch
    }, []);


    // console.log(sumOfThreads)

    return (
        <main className="test222">
            <section className="dashboard">
                <div className="stats-container">
                    <div className="count-user">
                        <i className="userIco fa-regular fa-user"></i>
                        <div className="text-content">
                            <p>{totalUsers && totalUsers}</p>
                            <p className="users">Users</p>
                        </div>
                    </div>
                    <div className="count-threads">
                        <i className="fa-solid fa-clipboard-list"></i>
                        <div className="text-content">
                            <p>{totalThreads && totalThreads}</p>
                            <p className="users">Threads</p>
                        </div>
                    </div>
                    <div className="count-comments">
                        <i className="fa-regular fa-comment"></i>
                        <div className="text-content">
                            <p>{totalComments && totalComments}</p>
                            <p className="users">Users Comments</p>
                        </div>
                    </div>
                    <div className="count-comments">
                        <i className="fa-regular fa-thumbs-up"></i>
                        <div className="text-content">
                            <p>{totalLikesSummary && totalLikesSummary}</p>
                            <p className="users">Thread Likes</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="last-comments">
                <h3>Last comments</h3>
                {lastFiveComments && lastFiveComments.map(comment =>
                    <div className="comments-container">
                        <a href={`/user-profile/${comment.author._id}`}>{comment.author.username}</a>
                        <div className="comment-content-container">
                            <p className="comment-content">{comment.description}</p>
                        </div>
                    </div>
                )}
            </section>
            <section className="last-threads">
                <h3>Last news</h3>
                {lastFiveThreads && lastFiveThreads.map(thread =>
                    <div key={thread._id} className="threads-container">
                        <Link to={`/article-view/${thread._id}`}>{thread.title}</Link>
                        <p className="likes-thread"><i className="heartIco fa-regular fa-heart"></i>{thread.likes}</p>
                    </div>
                )}
            </section>

        </main>
    );
}