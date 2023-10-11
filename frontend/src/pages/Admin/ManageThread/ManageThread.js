import "./ManageThread.css"


export const ManageThread = props => {

    return (
        <section className="users-list">
            <div className="search-bar">
                <input type="text" placeholder="Search by thread title"></input>
                    <i className="fa-solid fa-search"></i>
                    <button className="submit">SEARCH</button>
            </div>
            <div className="new-thread">
                <button className="new-btn">NEW THREAD</button>
            </div>
            <div className="list-of-users">
                <div className="avatar">
                    <p>Thread image:</p>
                    <img className="single-user-avatar" src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt=""></img>
                </div>
                <div className="email">
                    <p>Title: </p>
                    <p className="single-user-email">testowy link dsada</p>
                </div>
                <div className="username">
                    <p>Thread ID: </p>
                    <p className="single-user-username">7f8d6sa6gf8a</p>
                </div>
                <div className="username">
                    <p>Author: </p>
                    <p className="single-user-username">Admin</p>
                </div>
                <div className="action">
                    <p>Actions: </p>
                    <button className="single-user-actions edit-btn">EDIT</button>
                    <button className="ban-btn">DELETE</button>
                </div>
            </div>

            <table className="users-table">
                <thead>
                <tr>
                    <th>Thread Img</th>
                    <th>Title</th>
                    <th>Thread ID</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt="User Avatar" className="avatar"></img></td>
                    <td>New tank dsaljfkasdjlfdsa</td>
                    <td>kfdsa5d67saf5a57</td>
                    <td>Admin</td>
                    <td>
                        <button className="single-user-actions edit-btn">EDIT</button>
                        <button className="ban-btn">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt="User Avatar" className="avatar"></img></td>
                    <td>New tank dsaljfkasdjlfdsa</td>
                    <td>kfdsa5d67saf5a57</td>
                    <td>Admin</td>
                    <td>
                        <button className="single-user-actions edit-btn">EDIT</button>
                        <button className="ban-btn">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt="User Avatar" className="avatar"></img></td>
                    <td>New tank dsaljfkasdjlfdsa</td>
                    <td>kfdsa5d67saf5a57</td>
                    <td>Admin</td>
                    <td>
                        <button className="single-user-actions edit-btn">EDIT</button>
                        <button className="ban-btn">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt="User Avatar" className="avatar"></img></td>
                    <td>New tank dsaljfkasdjlfdsa</td>
                    <td>kfdsa5d67saf5a57</td>
                    <td>Admin</td>
                    <td>
                        <button className="single-user-actions edit-btn">EDIT</button>
                        <button className="ban-btn">DELETE</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="./0f8b2870896edcde8f6149fe2733faaf.jpg" alt="User Avatar" class="avatar"></img></td>
                    <td>New tank dsaljfkasdjlfdsa</td>
                    <td>kfdsa5d67saf5a57</td>
                    <td>Admin</td>
                    <td>
                        <button className="single-user-actions edit-btn">EDIT</button>
                        <button className="ban-btn">DELETE</button>
                    </td>
                </tr>
                </tbody>
            </table>

            <div class="pagination">
                <a href="#">1</a>
                <a href="#" className="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
            </div>

        </section>
    );
}