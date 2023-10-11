import "./CreateThread.css"


export const CreateThread = props => {


    return (
        <div className='admin-thread-wrapper'>
            <section className="create-thread">
                <h1>Create new thread</h1>
                <div className="manage-threads">
                    <button className="mng-threads">THREAD LIST</button>
                </div>
                <div className="thread-form-container">
                    <form action="#" method="post">
                        <div className="input-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" id="title" name="title" required></input>
                        </div>
                        <div className="input-group">
                            <label htmlFor="tags">Tags:</label>
                            <input type="text" id="tags" name="tags" placeholder="e.g. tech, news"></input>
                        </div>
                        <div className="input-group">
                            <label htmlFor="image">Image:</label>
                            <input type="file" id="image" name="image"></input>
                        </div>
                        <div className="input-group">
                            <label htmlFor="content">Content:</label>
                            <textarea id="content" name="content" rows="5" required></textarea>
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