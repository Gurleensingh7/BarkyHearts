import React, { useEffect, useState } from 'react';
import './AdminHome.css';

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]); // Optional if you want order length

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await fetch('https://barkyhearts-1.onrender.com/api/getAllUsersWithOrders');
        const data = await res.json();
        setUsers(data.users || []);
        setOrders(data.orders || []); // If response includes orders
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await fetch('https://barkyhearts-1.onrender.com/api/products/Get_all_Products');
        const data = await res.json();
        console.log(data);
        setProducts(data.Data || []);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    getAllUsers();
    fetchProducts();
  }, []);

  const stats = [
    { title: 'Total Users', value: users.length, change: '+12%' },
    { title: 'Total Products', value: products.length, change: '+5%' },
    { title: 'Total Orders', value: 4, change: '+23%' },
    { title: 'Revenue', value: '$12,345', change: '+18%' } // Optional: calculate real revenue
  ];

  return (
    <div className="admin-home">
      <h1>Dashboard Overview</h1>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>{stat.title}</h3>
            <p className="value">{stat.value}</p>
            <p className="change">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <p>New order #1234 placed</p>
            <span>2 minutes ago</span>
          </div>
          <div className="activity-item">
            <p>User "john_doe" registered</p>
            <span>15 minutes ago</span>
          </div>
          <div className="activity-item">
            <p>Product "Dog Food" updated</p>
            <span>1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
