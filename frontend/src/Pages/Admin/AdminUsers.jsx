import React, { useEffect, useState } from 'react';
import './AdminUsers.css';

const AdminUsers = () => {
  // Sample user data
   const [users,setUsers] = useState([]);

   const getAllUsers = async()=>{
    try {
      const res = await fetch('https://barkyhearts-1.onrender.com/api/getAllUsersWithOrders');
      const data = await res.json();
      console.log(data.users)
      setUsers(data.users)
    } catch (error) {
      console.log('Error at fetching users :',error)
    }
   }
   useEffect(()=>{
    getAllUsers();
   },[])

  return (
    <div className="admin-users">
      <h1>Users Management</h1>
      
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Orders</th>
              <th>Joined</th>
              <th>Role</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={user._id}>
                <td>{index + 1 }.</td>
                <td>{user.email}</td>
                <td>{user.orders.length}</td>
                <td>{new Date(user.date).toDateString()}</td>
                <td>
                  <span className={`role-badge ${user.role ? 'admin':'user'}`}>
                    {user.role ? 'Admin' : 'User'}
                  </span>
                </td>
                {/* <td className="actions">
                  <button className="delete">Delete</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;