import "./ReportHistory.css"
import {useEffect, useState} from "react";


export const ReportHistory = props => {

    const [reportList, setReportList] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);

        if (value === 'approved') {
            handleOption(value);
        } else if (value === 'rejected') {
            handleOption(value);
        }
    };

    const handleOption = async (option) => {
        console.log(`Wybrano opcje: ${option}`);

        const URL = 'http://localhost:5000/admin/reports-history/';
        await fetch(URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({option})

        })
            .then(response => response.json())
            .then(data => {
                setReportList(data)
                setLoading(true);
            })
            .catch(error => console.log('error:', error));
    };

    useEffect(async () => {
        const URL = 'http://localhost:5000/admin/reports-history/';

        await fetch(URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({})

        })
            .then(response => response.json())
            .then(data => {
                setReportList(data)
                setLoading(true);
            })
            .catch(error => console.log('error:', error));
    }, []);

    return (
        <div className='report-container'>
            <div className="select">
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option>Select option</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                </select>
                <div class="select_arrow">
                </div>
            </div>
            <div className='report-container'>
            {reportList && reportList.map(report => (
                <div className={report.status === 2 ? "approved reported-comments" : report.status === 3 ? "rejected reported-comments" : ""}>
                    <p><span>ID: </span>{report._id}</p>
                    <p><span>Username: </span>{report.author.username}</p>
                    <p><span>Report reason: </span>{report.reason}</p>
                    <p><span>Date: </span>{report.date}</p>
                    <p>{report.rejectedBy?.username}</p>
                </div>
            ))}
            </div>
        </div>
    );
};