import "./CreateThread.css"
import {useState} from "react";

export const CreateThread = props => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState([])

    const [fetchsent, setFetchSent] = useState(null)
    const sendForm = e => {
        e.preventDefault()
        fetch('http://localhost:5000/admin/create-thread', {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({
                title,
                description,
                tags
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())

            .catch((err) => {
                console.log(err.message);
            });
            setFetchSent(true)
    };

    const checkDataSent = () => {
        if (fetchsent) {
            setTitle('')
            setTags('')
            setDescription('')
            setFetchSent(null)
        }
    }
    checkDataSent()



    return (
        <div className="create-thread">
            <form onSubmit={sendForm} method="POST">
                <label htmlFor="title">Title *</label>
                <input className="input-title" type="text" name="title"
                       value={title}
                       onChange={e => setTitle(e.target.value)}/>
                <label htmlFor="title">Tags *</label>
                <input className="input-title" type="text" name="tags"
                       value={tags}
                       onChange={e => setTags(e.target.value)}/>
                <label htmlFor="title">Description *</label>
                <textarea className="input-description" type="text" name="description"
                          value={description}
                          onChange={e => setDescription(e.target.value)}/>
                <input type="file"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}