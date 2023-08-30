// import react, {useEffect, useState} from 'react';
// import {Link} from "react-router-dom";
//
//
// export const ThreadPagination = props => {
//
//
//
//     // const [threads, setThreads] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//
//     const [threadList, setThreadList] = useState([])
//     const [selectedTag, setSelectedTag] = useState(null);
//     const [threads, setThreads] = useState([]);
//
//     const handleTagClick = async (tags) => {
//         const queryString = new URLSearchParams({tags: tags}).toString();
//         const url = `http://localhost:5000/api/threads?${queryString}`;
//         setSelectedTag(queryString)
//         await fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 setThreads(data.data)
//                 console.log(selectedTag)
//             })
//             .catch(error => {
//                 console.error(error);
//                 // Tutaj możesz obsłużyć błąd, na przykład wyświetlając komunikat użytkownikowi
//             });
//     };
//
//
//
//     useEffect(() => {
//         const fetchDataFromBack = async () => {
//             fetch('http://localhost:5000/api/homepage')
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log(data)
//                     setThreadList(data.data);
//                 })
//                 .catch(error => {
//                     console.log(error);
//                 });
//         }
//
//         fetchDataFromBack()
//     }, []);
//
//
//     useEffect(() => {
//         fetch(`http://localhost:5000/api/homepage?page=${currentPage}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setThreads(data.data);
//                 setCurrentPage(data.currentPage);
//                 setTotalPages(data.totalPages);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, [currentPage]);
//
//     const handlePageChange = (newPage) => {
//         console.log('change page')
//         if (newPage >= 1 && newPage <= totalPages) {
//             setCurrentPage(newPage);
//         }
//     };
//
//     return (
//         <div>
//             {/*{threads.map((thread) => (*/}
//             {/*    <div key={thread._id}>*/}
//             {/*        <h2>{thread.title}</h2>*/}
//             {/*        <p>{thread.description}</p>*/}
//             {/*        <Link to={`/article-view/${thread._id}`}>Read more</Link>*/}
//             {/*    </div>*/}
//             {/*))}*/}
//
//             {selectedTag ? (
//                 <div>
//                     <h2>Threads with tag: {selectedTag}</h2>
//                     {threads.map((thread) => (
//                         <div key={thread._id} className="blog-main">
//                             <a className="title" href={`article-view/${thread._id}`}>
//                                 <i className="fa-solid fa-link"></i> {thread.title}
//                             </a>
//                             <div className="post-detali">
//                                 <a href={`/user-profile/${thread.author._id}`}>
//                                     <i className="fa-regular fa-user"></i> {thread.author.username}
//                                 </a>
//                                 <p href="/#">
//                                     <i className="fa-regular fa-clock"></i> {thread.date}
//                                 </p>
//                             </div>
//                             <p className="content">{thread.description}</p>
//                             <p> Likes: {thread.likes ? thread.likes : 0}</p>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 threadList.map(thread => (
//                     <div key={thread._id} className="blog-main">
//                         <a className="title" href={`article-view/${thread._id}`}>
//                             <i className="fa-solid fa-link"></i> {thread.title}
//                         </a>
//                         <div className="post-detali">
//                             <a href={`/user-profile/${thread.author._id}`}>
//                                 <i className="fa-regular fa-user"></i> {thread.author.username}
//                             </a>
//                             <p href="/#">
//                                 <i className="fa-regular fa-clock"></i> {thread.date}
//                             </p>
//                         </div>
//                         <p className="content">{thread.description}</p>
//                         {thread.tags.map((tag) => (
//                             <li key={tag} onClick={() => handleTagClick(tag)}>
//                                 {tag}
//                             </li>
//                         ))}
//                         <p> Likes: {thread.likes ? thread.likes : 0}</p>
//                     </div>
//                 ))
//
//             )}
//
//             <div>
//                 {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//                     (page) => (
//                         <button
//                             key={page}
//                             onClick={() => handlePageChange(page)}
//                             disabled={currentPage === page}
//                         >
//                             {page}
//                         </button>
//                     )
//                 )}
//             </div>
//         </div>
//     );
// }


import React from 'react';

const ThreadPagination = ({ currentPage, totalPages, handlePageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="pagination">
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={currentPage === page ? 'active' : ''}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default ThreadPagination;
