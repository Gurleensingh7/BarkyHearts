import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-content">
        <Outlet name={'Hello'} />
      </div>
    </div>
  );
};

export default AdminDashboard;