// src/components/ProfilePage.jsx

import React, { useState, useEffect } from 'react';
import './ProfilePage.css'; // Import the corresponding CSS file

const ProfilePage = () => {
  // Define state to store the profile data
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch the data from localStorage
    const storedUserInfo = localStorage.getItem('User');
    if (storedUserInfo) {
      // Parse the JSON data and set it in state
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>; // Show a loading state until data is fetched
  }

  const handleUpdateInfo = (event) => {
    // This is where you would handle updating user information, like submitting forms
    event.preventDefault();
    alert('Information updated');
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <h2>User Information</h2>
        <p ><strong>Name:</strong> <span className=' name'>{userInfo.email.split('@')[0]}</span></p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Admin:</strong> {userInfo.isAdmin ? 'Yes' : 'No'}</p>

        <h3>My Orders:</h3>
        {userInfo.orders.map((order, index) => (
          <div key={index}>
            <h3 className='text-start'>Order {index +1 }</h3>
            <p>Order Time : {new Date(order.createdAt).toUTCString()}</p>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Product Title</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {order.cartItems.map((prod, index) => (
                  <tr key={index}>
                    <td>
                        <img width={40} src={prod.imageUrl} alt="" />
                    </td>
                    <td>{prod.title}</td>
                    <td>{prod.price} INR</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProfilePage;
