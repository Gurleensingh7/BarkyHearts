import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Logs,
  LogOut,
  MoveLeft
} from 'lucide-react';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('User');
    window.location.href = '/';
  };

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/admin/">
              <LayoutDashboard className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/products">
              <ShoppingBag className="icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/orders">
              <Logs className="icon"/>
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <Users className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <MoveLeft className="icon"  />
              <span>Go Back</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button onClick={handleLogout}>
          <LogOut className="icon" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;