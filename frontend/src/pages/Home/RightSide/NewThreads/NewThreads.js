import {useEffect, useState} from "react";
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


    return(
        <div className="posts-main">
            <div className="title-h3"><h3>Newest threads</h3></div>
            <div className="newest-posts">
                {threadTitle.slice(0, 5).map(thread => (
                <div key={thread._id} className="container">
                    <div className="img">
                        <img src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt=""></img>
                    </div>
                    <div className="news">
                        <h4 className="title"><Link to={`/article-view/${thread._id}`}/>{thread.title}</h4>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis in
                            iste nihil non obcaecat</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}