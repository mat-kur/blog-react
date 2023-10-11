import "./ManageUsers.css";


export const ManageUsers = props => {


    return (
        <section className="users-list">
            <div className="search-bar">
                <input type="text" placeholder="Search..."></input>
                    <i className="fa-solid fa-search"></i>
                    <button className="submit">SEARCH</button>
            </div>
            <div className="list-of-users">
                <div className="avatar">
                    <p>Avatar:</p>
                    <img className="single-user-avatar" src="./default-avatar.jpg" alt=""></img>
                </div>
                <div className="username">
                    <p>Username: </p>
                    <p className="single-user-username">Admin</p>
                </div>
                <div className="email">
                    <p>Email: </p>
                    <p className="single-user-email">Admin@admin.tst</p>
                </div>
                <div className="role">
                    <p>Role: </p>
                    <p className="single-user-role">Admin</p>
                </div>
                <div className="action">
                    <p>Actions: </p>
                    <button className="single-user-actions admin-btn">Admin</button>
                    <button className="ban-btn">Ban</button>
                </div>
            </div>
            <div className="list-of-users">
                <div className="avatar">
                    <p>Avatar:</p>
                    <img className="single-user-avatar" src="./default-avatar.jpg" alt=""></img>
                </div>
                <div className="username">
                    <p>Username: </p>
                    <p className="single-user-username">Admin</p>
                </div>
                <div className="email">
                    <p>Email: </p>
                    <p className="single-user-email">Admin@admin.tst</p>
                </div>
                <div className="role">
                    <p>Role: </p>
                    <p className="single-user-role">Admin</p>
                </div>
                <div className="action">
                    <p>Actions: </p>
                    <button className="single-user-actions admin-btn">Admin</button>
                    <button className="ban-btn">Ban</button>
                </div>
            </div>
            <div className="list-of-users">
                <div className="avatar">
                    <p>Avatar:</p>
                    <img className="single-user-avatar" src="./default-avatar.jpg" alt=""></img>
                </div>
                <div className="username">
                    <p>Username: </p>
                    <p className="single-user-username">Admin</p>
                </div>
                <div className="email">
                    <p>Email: </p>
                    <p className="single-user-email">Admin@admin.tst</p>
                </div>
                <div className="role">
                    <p>Role: </p>
                    <p className="single-user-role">Admin</p>
                </div>
                <div className="action">
                    <p>Actions: </p>
                    <button className="single-user-actions admin-btn">Admin</button>
                    <button className="ban-btn">Ban</button>
                </div>
            </div>
            <div className="list-of-users">
                <div className="avatar">
                    <p>Avatar:</p>
                    <img className="single-user-avatar" src="./default-avatar.jpg" alt=""></img>
                </div>
                <div className="username">
                    <p>Username: </p>
                    <p className="single-user-username">Admin</p>
                </div>
                <div className="email">
                    <p>Email: </p>
                    <p className="single-user-email">Admin@admin.tst</p>
                </div>
                <div className="role">
                    <p>Role: </p>
                    <p className="single-user-role">Admin</p>
                </div>
                <div className="action">
                    <p>Actions: </p>
                    <button className="single-user-actions admin-btn">Admin</button>
                    <button className="ban-btn">Ban</button>
                </div>
            </div>
            <div className="list-of-users">
                <div className="avatar">
                    <p>Avatar:</p>
                    <img className="single-user-avatar" src="./default-avatar.jpg" alt=""></img>
                </div>
                <div className="username">
                    <p>Username: </p>
                    <p className="single-user-username">Admin</p>
                </div>
                <div className="email">
                    <p>Email: </p>
                    <p className="single-user-email">Admin@admin.tst</p>
                </div>
                <div className="role">
                    <p>Role: </p>
                    <p className="single-user-role">Admin</p>
                </div>
                <div className="action">
                    <p>Actions: </p>
                    <button className="single-user-actions admin-btn">Admin</button>
                    <button className="ban-btn">Ban</button>
                </div>
            </div>


            <table className="users-table">
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><img src="default-avatar.jpg" alt="User Avatar" className="avatar"></img></td>
                    <td>JohnDoe</td>
                    <td>johndoe@example.com</td>
                    <td>User</td>
                    <td>
                        <button className="admin-btn">Admin</button>
                        <button className="ban-btn">Ban</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="default-avatar.jpg" alt="User Avatar" className="avatar"></img></td>
                    <td>Admin</td>
                    <td>johnfdsafdsadoe@example.com</td>
                    <td>User</td>
                    <td>
                        <button className="admin-btn">Admin</button>
                        <button className="ban-btn">Ban</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="default-avatar.jpg" alt="User Avatar" className="avatar"></img></td>
                    <td>JohnfdsaDoe</td>
                    <td>johfgdsgdfsndoe@example.com</td>
                    <td>User</td>
                    <td>
                        <button class="admin-btn">Admin</button>
                        <button class="ban-btn">Ban</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="default-avatar.jpg" alt="User Avatar" class="avatar"></img></td>
                    <td>JohnDoe</td>
                    <td>johndfffdsagasdoe@example.com</td>
                    <td>User</td>
                    <td>
                        <button class="admin-btn">Admin</button>
                        <button class="ban-btn">Ban</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="default-avatar.jpg" alt="User Avatar" class="avatar"></img></td>
                    <td>JohnDoe</td>
                    <td>johndfffdsagasdoe@example.com</td>
                    <td>User</td>
                    <td>
                        <button class="admin-btn">Admin</button>
                        <button class="ban-btn">Ban</button>
                    </td>
                </tr>
                </tbody>
            </table>

            <div class="pagination">
                <a href="#">1</a>
                <a href="#" class="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
            </div>
        </section>
    );
};