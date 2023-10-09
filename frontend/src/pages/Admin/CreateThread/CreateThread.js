import "./CreateThread.css"


export const CreateThread = props => {


    return (
        <>
            <header>
                <h3 className="title-admin"><span className="title-admin-span">c</span> CODERZ <span
                    className="title-admin-span">/></span></h3>
                <nav>
                    <ul>
                        <li><a href="#"><i className="fa-solid fa-dice-d6"></i> Dashboard</a></li>
                        <li><a href="#"><i className="nav-users fa-solid fa-users"></i> Manage users</a></li>
                        <li><a href="#"><i className="fa-solid fa-list-ul"></i> Manage thread</a></li>
                        <li><a href="#"><i className="fa-solid fa-flag"></i> Report system</a></li>
                    </ul>
                </nav>
            </header>
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
        </>
    );

};