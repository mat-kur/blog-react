


export const SetAdminPermissions = ({ userId, username, isAdmin, setPopupType, handleAdminAccessClick }) => {


    return (
        <div>
            <button onClick={() => { setPopupType('admin'); handleAdminAccessClick(userId, username, isAdmin); }} className="admin-btn">Admin</button>
            {/*<button onClick={() => { setPopupType('admin'); handleAdminAccessClick(userId, username, isAdmin); }}>ACCES ADMIN</button>*/}
        </div>
    );
};