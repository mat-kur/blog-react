import react, {useEffect, useState} from "react"


export const CommentsReports = () => {

    const [reportData, setReportData] = useState(null)


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

    return (
        <>
            {reportData && reportData.map(report => (

                <div>
                    <p>{report.author.username}</p>
                    <p>{report.reason}</p>
                </div>


            ))}

            <p>test</p>



        </>
    );
}