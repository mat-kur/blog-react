import "./LeftSide.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

export const LeftSide = ({searchRecords, searchQuery, setSearchQuery, threads, setThreads }) => {
    const [selectedTag, setSelectedTag] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pages = new Array(totalPages).fill(null).map((v, i) => i);
    const handleTagClick = async tags => {
        const queryString = new URLSearchParams({ tags: tags }).toString();
        const url = `http://localhost:5000/api/threads?${queryString}`;
        setSelectedTag(queryString);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setThreads(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const URL = searchQuery ?
            `http://localhost:5000/api/homepage?q=${searchQuery}` :
            `http://localhost:5000/api/homepage?page=${currentPage}`;
        const fetchThreads = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setThreads(data.data);
                setCurrentPage(data.currentPage);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchThreads();
    }, [searchQuery, currentPage]);

    return (
        <div className="right-wrapper">
            {searchRecords && searchRecords.data && searchRecords.data.length > 0 && <div className="search-records"><h1>Search records for {searchQuery}:</h1></div>}

            {selectedTag ? (
                <>
                    <h2>Threads with tag: {selectedTag}</h2>
                    {threads?.map(thread => (
                        <section key={thread._id} className="left-side">
                            <div className="top">
                                <img src={`http://localhost:5000/thread-image/${thread.image}`} alt="" />
                                <h2><a href={`article-view/${thread._id}`}>{thread.title}</a></h2>
                            </div>
                            <div className="tags">
                                {thread.tags.map(tag => (
                                    <a key={tag} onClick={() => threads.length && handleTagClick(tag)}>
                                        {tag}
                                    </a>
                                ))}
                            </div>
                            <div className="content">
                                <p>{thread.description}</p>
                                <button onClick={() => window.location.href=`article-view/${thread._id}`}>Read More</button>
                            </div>
                            <div className="activity">
                                <p className="author"><i className="fa-regular fa-user"></i> {thread.author.username}</p>
                                <p className="likes"><i className="fa-regular fa-heart"></i> {thread.likes ? thread.likes : 0}</p>
                            </div>
                        </section>
                    ))}
                </>
            ) : (
                threads?.map(thread => (
                    <section key={thread._id} className="left-side">
                        <div className="top">
                            <img src={`http://localhost:5000/thread-image/${thread.image}`} alt="" />
                            <h2><a href={`article-view/${thread._id}`}>{thread.title}</a></h2>
                        </div>
                        <div className="tags">
                            {thread.tags.map(tag => (
                                <a key={tag} onClick={() => threads.length && handleTagClick(tag)}>
                                    {tag}
                                </a>
                            ))}
                        </div>
                        <div className="content">
                            <p>{thread.description}</p>
                            <button onClick={() => window.location.href=`article-view/${thread._id}`}>Read More</button>
                        </div>
                        <div className="activity">
                            <p className="author"><i className="fa-regular fa-user"></i> {thread.author.username}</p>
                            <p className="likes"><i className="fa-regular fa-heart"></i> {thread.likes ? thread.likes : 0}</p>
                        </div>
                    </section>
                ))
            )}

            <div className="pagination">
                {!selectedTag && pages.map((pageIndex) => (
                    <a key={pageIndex + 1} onClick={() => setCurrentPage(pageIndex + 1)} href="#" className="active">{pageIndex + 1}</a>
                ))}
            </div>
        </div>

    );
};
