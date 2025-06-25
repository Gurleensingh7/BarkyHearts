import React,{useState,useEffect} from 'react';
import './AdminOrders.css';

const AdminOrders = () => {
  // Sample order data
  const [orders,setOrders] = useState([]);

   const getAllUsers = async()=>{
    try {
      const res = await fetch('https://barkyhearts-1.onrender.com/api/getAllUsersWithOrders');
      const data = await res.json();
      console.log(data.users)
      setOrders(data.users)
    } catch (error) {
      console.log('Error at fetching users :',error)
    }
   }
   useEffect(()=>{
    getAllUsers();
   },[])

  return (
    <div className="admin-orders">
      <h1>Orders Management</h1>
      
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.orders.map((item)=><p>{item.cartItems.map((final)=>{
                  return <p>{final.title}</p>
                })}</p>)}</td>
                <td>{order.email}</td>
                <td>{new Date(order.date).toDateString()}</td>
                <td>{order.orders.map((item)=> <p>Rs{item.totalPrice}</p>)}</td>
                {/* <td className="actions">
                  <button className="view">View</button>
                  <button className="update">Update</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;