import React from 'react';

const UserBan = ({ userId, username, isAdmin, isBanned, setPopupType, handleAdminAccessClick }) => {
    return (
        <div>
            <button onClick={() => { setPopupType('ban'); handleAdminAccessClick(userId, username, isAdmin, isBanned); }}>BAN USER</button>
        </div>
    );
};

export default UserBan;
