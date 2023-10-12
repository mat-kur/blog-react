import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export const TopThreads = props => {

    const [topThread, setTopThread] = useState([])

    useEffect(() => {

        const getTopThreadsFromDB = async () => {
            await fetch('http://localhost:5000/api/homepage/topthreads')
                .then(response => response.json())
                .then(data => {
                    setTopThread(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getTopThreadsFromDB()

    }, [])

    return (
        <>
            <div className="title-h3"><h3>Top thread</h3></div>
            {topThread.length > 0 ? (
                topThread.map(thread => (
            <div key={thread._id} className="newest-posts">
                <div className="container-activity">
                    <div className="img-user">
                        <img className="img-user" src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt=""></img>
                    </div>
                    <div className="top-news">
                        <h4 className="title"><Link to={`/article-view/${thread._id}`}/>{thread.title.length > 20 ? thread.title.slice(0, 20) + '...' : thread.title}(<i
                            className="fa-regular fa-thumbs-up"></i> <span>{thread.likes} </span> ) </h4>
                    </div>
                </div>
            </div>
                ))
            ) : null}
        </>
    );
}