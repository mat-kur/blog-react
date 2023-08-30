import "./Blog-main.css";
import React, { useEffect, useState } from "react";
import ThreadPagination from "./ThreadPagination/ThreadPagination";

export const BlogMain = () => {
    const [selectedTag, setSelectedTag] = useState(null);

    const [threads, setThreads] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pages = new Array(totalPages).fill(null).map((v, i) => i)

    const handleTagClick = async (tags) => {
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
        const fetchThreads = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/homepage?page=${currentPage}`);
                const data = await response.json();
                setThreads(data.data)
                setCurrentPage(data.currentPage);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchThreads();
    }, [currentPage]);

    return (
        <div className="test">
            {selectedTag ? (
                <div>
                    <h2>Threads with tag: {selectedTag}</h2>
                    {threads.map((thread) => (
                        <div key={thread._id} className="blog-main">
                            <a className="title" href={`article-view/${thread._id}`}>
                                <i className="fa-solid fa-link"></i> {thread.title}
                            </a>
                            <div className="post-detali">
                                <a href={`/user-profile/${thread.author._id}`}>
                                    <i className="fa-regular fa-user"></i> {thread.author.username}
                                </a>
                                <p href="/#">
                                    <i className="fa-regular fa-clock"></i> {thread.date}
                                </p>
                            </div>
                            <p className="content">{thread.description}</p>
                            {thread.tags.map((tag) => (
                                <li key={tag} onClick={() => threads.length && handleTagClick(tag)}>
                                    {tag}
                                </li>
                            ))}
                            <p> Likes: {thread.likes ? thread.likes : 0}</p>
                        </div>
                    ))}
                </div>
            ) : (
                threads.map(thread => (
                    <div key={thread._id} className="blog-main">
                        <a className="title" href={`article-view/${thread._id}`}>
                            <i className="fa-solid fa-link"></i> {thread.title}
                        </a>
                        <div className="post-detali">
                            <a href={`/user-profile/${thread.author._id}`}>
                                <i className="fa-regular fa-user"></i> {thread.author.username}
                            </a>
                            <p href="/#">
                                <i className="fa-regular fa-clock"></i> {thread.date}
                            </p>
                        </div>
                        <p className="content">{thread.description}</p>
                        {thread.tags.map((tag) => (
                            <li key={tag} onClick={() => threads.length && handleTagClick(tag)}>
                                {tag}
                            </li>
                        ))}
                        <p> Likes: {thread.likes ? thread.likes : 0}</p>
                    </div>


                ))
            )

            }
            {!selectedTag && pages.map((pageIndex) => (
                    <button key={pageIndex + 1} onClick={() => setCurrentPage(pageIndex + 1)}>
                        {pageIndex + 1}
                    </button>

            ))}
        </div>
    );
}


// TODO ogarnąć tagi (dodać strony do tagów może, ewentualnie ukryć strony, kiedy jest szukanie po tagach, ale pierwsza opcja chyba lepsza)
