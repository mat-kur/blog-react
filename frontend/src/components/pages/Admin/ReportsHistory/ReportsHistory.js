import react, {useEffect, useState} from "react"
import React from "react";
import "./ReportsHistory.css"
import {logDOM} from "@testing-library/react";



export const ReportsHistory = props => {

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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({option})

        })
            .then(response => response.json())
            .then(data => {
                setReportList(data)
                setLoading(true);
            })
            .catch(error => console.log('error:', error));
    };

    useEffect(async() => {
        const URL = 'http://localhost:5000/admin/reports-history/';

        await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})

        })
            .then(response => response.json())
            .then(data => {
                setReportList(data)
                setLoading(true);
            })
            .catch(error => console.log('error:', error));
    }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;



    return(
        <div>


            <div>
                <label>
                    Sort by:
                    <select value={selectedOption} onChange={handleSelectChange}>
                        <option value="" disabled>Select</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </label>
                <p>Wybrana opcja: {selectedOption}</p>
            </div>

            {reportList && reportList.map(report => (
                <div key={report._id}>
                    <div className={report.status === 2 ? "approved" : report.status === 3 ? "rejected" : ""}>
                                <p>{report._id}</p>
                                <p>{report.author.username}</p>
                                <p>{report.reason}</p>
                                <p>{report.date}</p>
                                <p className='stat'>{report.status}</p>
                                <p>{report.rejectedBy?.username} {'usunięty by'}</p>
                    </div>
                </div>
            ))}


        </div>
    );

}