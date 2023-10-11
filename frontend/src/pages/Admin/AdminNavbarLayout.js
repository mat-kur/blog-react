// AdminNavbarLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminNavBar } from "../../components/Admin/NavBar/AdminNavBar";
import './AdminNavbarLayout.css'; // Załóżmy, że tutaj znajdują się Twoje style

function AdminNavbarLayout() {
    return (
        <div className="admin-layout">
            <AdminNavBar/>
            <div className="admin-content">
                <Outlet />  {/* Zagnieżdżone trasy będą renderowane tutaj */}
            </div>
        </div>
    );
}

export default AdminNavbarLayout;
