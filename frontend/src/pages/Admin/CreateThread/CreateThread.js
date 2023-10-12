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
        <div className='admin-thread-wrapper'>
            <section className="create-thread">
                <h1>Create new thread</h1>
                <div className="manage-threads">
                    <button className="mng-threads">THREAD LIST</button>
                </div>
                <div className="thread-form-container">
                    <form onSubmit={sendForm} method="POST">
                        <div className="input-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className="input-group">
                            <label htmlFor="tags">Tags:</label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="e.g. tech, news"
                                value={tags}
                                onChange={e => setTags(e.target.value)}
                            ></input>
                        </div>
                        <div className="input-group">
                            <label htmlFor="image">Image:</label>
                            <input type="file" id="image" name="image"></input>
                        </div>
                        <div className="input-group">
                            <label htmlFor="content">Content:</label>
                            <textarea
                                id="content"
                                name="content"
                                rows="5"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                required
                            >
                            </textarea>
                        </div>
                        <div className="input-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );

};