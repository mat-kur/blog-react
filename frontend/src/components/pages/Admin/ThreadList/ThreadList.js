
import "./ThreadList.css"
import {useEffect, useState} from "react";
export const ThreadList = props => {

    const [threadList, setThreadList] = useState([])
    const [status, setStatus] = useState()

    useEffect(() => {
        const fetchDataFromBack = async () => {
            fetch('http://localhost:5000/api/homepage')
                .then(response => response.json())
                .then(data => {
                    console.log(data.data)
                    console.log(data)
                    setThreadList(data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }

        fetchDataFromBack()
    }, []);

    const deleteThread = (id) => {
        fetch('http://localhost:5000/admin/delete-thread', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.ok) {
                    setStatus('Usunięto pomyślnie')
                    return response.json();
                } else {
                    throw new Error('Wystąpił błąd podczas usuwania');
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div>
            <div className="status">
                <p className="status">{status}</p>
            </div>
            <table className="GeneratedTable">
                <thead>
                <tr>
                    <th>TITLE</th>
                    <th>AUTHOR</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                    {threadList && threadList.map(thread => (
                <tr key={thread._id}>
                    <td>{thread.title}</td>
                    <td>{thread._id}</td>
                    <td>
                        <button onClick={() => deleteThread(thread._id)}><i className="fa-solid fa-minus"></i></button>
                        <button><a href={`/admin/edit-thread/${thread._id}`}><i className="fa-solid fa-pencil"></i></a></button>
                    </td>
                </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}