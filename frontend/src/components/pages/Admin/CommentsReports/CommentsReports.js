import react, {useEffect, useState} from "react"
import React from "react";
import {Link, useParams} from "react-router-dom";


export const CommentsReports = ({user}) => {

    const [reportData, setReportData] = useState(null)

    const { id } = useParams()


    useEffect(() => {
        const fetchReportedComments = async () => {
            try {
                const response = await fetch(`http://localhost:5000/admin/reported-comments/`);
                if (response.ok) {
                    const data = await response.json();
                    setReportData(data);
                } else {
                    console.error('Wystąpił błąd podczas pobierania odpowiedzi');
                }
            } catch (error) {
                console.error('Wystąpił błąd podczas komunikacji z serwerem:', error);
            }
        };

        fetchReportedComments();
    }, []);

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

    return (
        <>

            <Link to={'/admin/reports-history/'}>Reports History</Link>

            {reportData && reportData.map(report => (

                <div key={report._id}>
                    <p>{report._id}</p>
                    <p>{report.comment.author.username} username ze zreportowanego kommenta</p>
                    <p>{report.comment.description} tresc komentarza</p>
                    <p>{report.comment.thread.title} tytuł tematu w którym jest comment</p>
                    <Link to={`/article-view/${report.comment.thread._id}`} >{report.comment.thread.title}</Link>
                    <p>{report.comment.thread._id} ID tematu w ktorym jest zreportowany comment</p>
                    <p>{report.author.username} username, który zreportował</p>
                    <p>{report.reason}</p>
                    <button onClick={() => deleteReportUser(report._id, user.user._id)}>send</button>
                </div>

            ))}

        </>
    );
}