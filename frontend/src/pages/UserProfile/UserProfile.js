import React, { useState, useEffect } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    // const [userData, setUserData] = useState(null);
    //
    // // Załóżmy, że 'fetchUserData' to funkcja, która pobiera dane użytkownika i jego komentarze
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // Pobierz dane użytkownika i jego komentarze
    //             const user = await fetchUserData();
    //             setUserData(user);
    //         } catch (error) {
    //             console.error('Wystąpił błąd podczas pobierania danych użytkownika:', error);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);
    //
    // if (!userData) {
    //     return <div>Ładowanie...</div>;
    // }

    return (
        <div className="user-profile">
            <div className="user-profile-action">
                <button className="edit-profile">EDIT</button>
            </div>
            <div className="user-info">
                <h2>Admin</h2>
                <img src="./DSC_0007.JPG" alt="avatar użytkownika" />
                <p><span className='span-userinfo'>Comments:</span> 51</p>
                <p><span className='span-userinfo'>Likes: </span>31</p>
            </div>
            <div className="user-comments">
                <h3>Last activity</h3>
                    <div className="comment">
                        <p>textfas fdsafsdafdsa fdsafdsafdsa fdsafdsafdsa </p>
                        <span>12.12.12</span>
                    </div>
                <div className="comment">
                    <p>textfas fdsafdsafdsa fdsafdsafdsa </p>
                    <span>12.12.12</span>
                </div>
                <div className="comment">
                    <p>t </p>
                    <span>12.12.12</span>
                </div>
                <div className="comment">
                    <p>textfas fdfsafdsa fdsafdsafasdsafdsafdsa fdsafdsafdsa </p>
                    <span>12.12.12</span>
                </div>
                <div className="comment">
                    <p>textfas fdsafdsa fdsafdsafsad fdsafdsafdsa </p>
                    <span>12.12.12</span>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
