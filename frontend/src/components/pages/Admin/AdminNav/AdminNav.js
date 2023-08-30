import "./AdminNav.css"


export const AdminNav = props => {
    return (
        <div className="admin-navigator">
            <ul>
                <li><a href="/admin/dashboard"><i className="fa-solid fa-house"></i></a></li>
                <li><a href="/admin/create-thread"><i className="fa-solid fa-plus"></i></a></li>
                <li><a href="/admin/thread-list"><i className="fa-solid fa-list-ol"></i></a></li>
                <li><a href="/admin/users"><i className="fa-solid fa-users"></i></a></li>
                <li><a href="/admin/support"><i className="fa-regular fa-message"></i></a></li>
            </ul>
        </div>
    );
}