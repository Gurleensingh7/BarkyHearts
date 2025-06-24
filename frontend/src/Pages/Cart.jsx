import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Import the CSS file

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const fetchCartData = async () => {
    const user = JSON.parse(localStorage.getItem('User'));
    if (user?.email) {
      try {
        const res = await fetch('http://localhost:8000/api/Getcart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: user.email }),
        });
        const data = await res.json();
        console.log(data)
        const cart = data.cart || [];
        setCartItems(cart);
        const total = cart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
        setTotalPrice(total);
      } catch (err) {
        console.error('Cart fetch error:', err);
      }
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const handleDelete = async (productId) => {
    const user = JSON.parse(localStorage.getItem('User'));
    if (!user?.email) return;

    try {
      const res = await fetch('http://localhost:8000/api/Removecartitem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, productId }),
      });

      if (res.ok) {
        fetchCartData();
      } else {
        console.error("Failed to delete item from cart");
      }
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;

    const user = JSON.parse(localStorage.getItem('User'));
    if (!user?.email) return;

    try {
      const res = await fetch('http://localhost:8000/api/updateCartQuantity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, productId, quantity }),
      });

      if (res.ok) {
        fetchCartData();
      } else {
        console.error("Failed to update quantity");
      }
    } catch (err) {
      console.error("Quantity update error:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    const { name, address, city, zip, country } = shippingInfo;

    if (!name || !address || !city || !zip || !country) {
      alert("Please fill in all shipping fields before proceeding.");
      return;
    }

    const user = JSON.parse(localStorage.getItem('User'));
    if (!user?.email) {
      alert("User not logged in.");
      return;
    }

    const formattedTotalPrice = totalPrice.toLocaleString();

    const orderPayload = {
      email: user.email,
      cartItems,
      totalPrice: formattedTotalPrice,
      shippingInfo,
    };

    try {
      const response = await fetch('http://localhost:8000/api/placeorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        setShippingInfo({
          name: '', address: '', city: '', zip: '', country: '',
        });
        setCartItems([]);
        setTotalPrice(0);
        navigate("/");
      } else {
        alert("Failed to place order. Try again.");
      }
    } catch (err) {
      console.error("Order submission failed:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-grid">
          <div className="cart-items">
            <h2 className="cart-heading">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p className="cart-empty">Your cart is empty. Go grab something!</p>
            ) : (
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td><img src={item.imageUrl} alt={item.title} className="cart-img" /></td>
                      <td>1{item.title}</td>
                      <td>
                        <div className="qty-controls">
                          <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.productId, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                      <td>${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                      <td>
                        <button onClick={() => handleDelete(item.productId)} title="Remove item">
                          <TrashIcon className="trash-icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="checkout-summary">
            <div>
              <h2 className="summary-heading">Cart Summary</h2>
              <div className="summary-details">
                <div><span>Total Items:</span><span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span></div>
                <div><span>Total Price:</span><span>${totalPrice.toFixed(2)}</span></div>
              </div>
            </div>

            <div className="shipping-form">
              <h3>Shipping Address</h3>
              <form>
                <input type="text" name="name" value={shippingInfo.name} onChange={handleInputChange} placeholder="Full Name" />
                <input type="text" name="address" value={shippingInfo.address} onChange={handleInputChange} placeholder="Street Address" />
                <div className="city-zip">
                  <input type="text" name="city" value={shippingInfo.city} onChange={handleInputChange} placeholder="City" />
                  <input type="text" name="zip" value={shippingInfo.zip} onChange={handleInputChange} placeholder="ZIP Code" />
                </div>
                <input type="text" name="country" value={shippingInfo.country} onChange={handleInputChange} placeholder="Country" />
              </form>
            </div>

            <div className="payment-method">
              <h3>Payment Method</h3>
              <select>
                <option value="">Select Payment Method</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>

            <button className="pay-btn" onClick={handlePayment}>
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
