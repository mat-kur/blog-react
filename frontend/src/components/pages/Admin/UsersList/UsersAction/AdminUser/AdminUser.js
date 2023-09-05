import React from 'react';

const UserAdmin = ({ userId, username, isAdmin, setPopupType, handleAdminAccessClick }) => {
    return (
        <div>
            <button onClick={() => { setPopupType('admin'); handleAdminAccessClick(userId, username, isAdmin); }}>ACCES ADMIN</button>
        </div>
    );
};

export default UserAdmin;
