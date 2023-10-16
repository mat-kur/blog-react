


export const BanUser = ({ userId, username, isAdmin, isBanned, setPopupType, handleAdminAccessClick }) => {


    return (
        <>
            <button onClick={() => { setPopupType('ban'); handleAdminAccessClick(userId, username, isAdmin, isBanned); }}className="ban-btn">Ban</button>
            {/*<button onClick={() => { setPopupType('ban'); handleAdminAccessClick(userId, username, isAdmin, isBanned); }}>BAN USER</button>*/}
        </>
    );
};