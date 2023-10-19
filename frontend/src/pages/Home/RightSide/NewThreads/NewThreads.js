import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const NewThreads = props => {

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


    return (
        <div className="posts-main">
            <div className="title-h3"><h3>Newest threads</h3></div>
            {threadTitle.slice(0, 5).map(thread => (
                <div key={thread._id} className="newest-posts">
                    <div className="container">
                        <div className="img">
                            <img src={`http://localhost:5000/thread-image/${thread.image}`} alt="" />
                        </div>
                        <div className="news">
                            <h4 className="title"><Link className='thread-link-right' to={`/article-view/${thread._id}`}>{thread.title}</Link></h4>
                            <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis in
                                iste nihil non obcaecat</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}