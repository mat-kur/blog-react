import "./ReportSystem.css";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {SearchBar} from "./SearchBar/SearchBar";


export const ReportSystem = ({user}) => {
    const [reportData, setReportData] = useState(null)
    const [approveDes, setApproveDes] = useState('')
    const [activeForms, setActiveForms] = useState({})

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const pages = new Array(totalPages).fill(null).map((v, i) => i)

    const { id } = useParams()

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };


    useEffect(() => {

        const URL = searchQuery ?
            `http://localhost:5000/admin/reported-comments/?q=${searchQuery}` :
            `http://localhost:5000/admin/reported-comments/?page=${currentPage}`;
        const fetchReportedComments = async () => {
            try {
                const response = await fetch(`${URL}`);
                if (response.ok) {
                    const data = await response.json();
                    setReportData(data.reportedComments);
                    setCurrentPage(data.currentPage);
                    setTotalPages(data.totalPages);
                } else {
                    console.error('Wystąpił błąd podczas pobierania odpowiedzi');
                }
            } catch (error) {
                console.error('Wystąpił błąd podczas komunikacji z serwerem:', error);
            }
        };

        fetchReportedComments();
    }, [searchQuery, currentPage]);

    const deleteReportUser = async (reportID, userID) => {

        try {

            await fetch(`http://localhost:5000/admin/reported-comments/delete/${id}`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    reportID,
                    userID
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(async (response) => {
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err.message);
                });

        } catch (e) {
            console.log(e)
        }




    }

    const activeFormReply = async commentID => {
        setActiveForms(prevState => ({
            ...prevState,
            [commentID]: !prevState[commentID]
        }));
    };

    const acceptUserReport = async (commentID, userCommentID, userAdminID, reportID) => {
        //  muszę na backend wysłać: id komentarza, który ma dostać reporta. id usera, który ma dostać report,

        try {
            await fetch(`http://localhost:5000/admin/reported-comments/approve/${id}`, {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify({
                    commentID,
                    userCommentID,
                    userAdminID,
                    approveDes,
                    reportID
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(async (response) => {
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err.message);
                });

        } catch (e) {
            console.log(e)
        }

    }

return (
    <section className="report-system">
        <div>
            <Link className="report-history" to={'/admin/reports-history/'}>Reports History</Link>
        </div>
        <SearchBar setReportData={setReportData} setSearchQuery={setSearchQuery}/>
        {Array.isArray(reportData) && reportData.map(report => (
            <div key={report._id} className="reported-comment">
                <a href="">{report.comment.author.username}</a>
                <p>{report.comment.description}</p>
                <p>Thread: <Link
                    to={`/article-view/${report.comment.thread._id}`}>{report.comment.thread.title}</Link></p>
                <hr/>
                <p className="reported-by">Reported by: <a href="#">{report.author.username}</a></p>
                <p className="reported-content">{report.reason}</p>
                <div className="buttons-action">
                    <button onClick={() => activeFormReply(report._id)} className="reject-report">ACCEPT</button>
                    <button onClick={() => deleteReportUser(report._id, user.user._id)} className="accept-report">REJECT</button>
                </div>
                {activeForms[report._id] && (
                    <div>
                        <form>
                            <textarea name="reply"
                                      value={approveDes}
                                      onChange={e => setApproveDes(e.target.value)}></textarea>
                            <button
                                onClick={() => acceptUserReport(report.comment._id, report.comment.author._id, user.user._id, report._id)}>send
                            </button>
                        </form>
                    </div>
                )}
            </div>
        ))}
        <div className="pagination">
            {!searchQuery && pages.map((pageIndex) => (
                <a key={pageIndex + 1} onClick={() => handlePageChange(pageIndex + 1)}>
                    {pageIndex + 1}
                </a>
            ))}
        </div>

    </section>
);
}