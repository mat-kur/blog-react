import "./CreateThread.css"
import {useState} from "react";
import {Link} from "react-router-dom";


export const CreateThread = props => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState([])

    const [image, setImage] = useState(null);
    const [responseMessage, setResponseMessage] = useState("");

    const [fetchsent, setFetchSent] = useState(null)

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const sendForm = e => {

        const formData = new FormData();
        formData.append("description", description);
        formData.append("title", title);
        formData.append("tags", tags);
        formData.append("image", image);

        e.preventDefault()
        fetch('http://localhost:5000/admin/create-thread', {
            method: 'POST',
            credentials: "include",
            body: formData,
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
                    <button className="mng-threads"><Link className="link" to='/admin/manage-thread'>THREAD LIST</Link></button>
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
                            <label htmlFor="image">Image</label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                name="image"
                                onChange={handleImageChange}
                            ></input>
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