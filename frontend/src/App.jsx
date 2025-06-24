import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Veterinarian from './Pages/Veterinarian';
import Register from './Pages/Register';
import Booking from './Pages/Booking';
import Cart from './Pages/Cart';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import Dashboard from './Pages/Admin/Dashboard';
import AdminHome from './Pages/Admin/AdminHome';
import AdminOrders from './Pages/Admin/AdminOrders';
import AdminProducts from './Pages/Admin/AdminProducts';
import AdminUsers from './Pages/Admin/AdminUsers';
import ProfilePage from './Pages/ProfilePage';

const App = () => {
  const isAdmin = JSON.parse(localStorage.getItem('User'))?.isAdmin || false;
  const admin = useLocation().pathname.startsWith('/admin');
  return (
    <div>
      {

        !admin && <Navbar isAdmin={isAdmin}  />
      }

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/veterinarian' element={<Veterinarian />} />
        <Route path='booking' element={<Booking />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<ProfilePage />} />


        {/* {Admin Routes} */}

        {/* Admin Routes */}
        <Route path='/admin/' element={isAdmin ? <Dashboard /> : <Navigate to='/' replace={true} />}>
          <Route index element={<AdminHome />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='users' element={<AdminUsers />} />
        </Route>
      </Routes>

      {!admin && <Footer />}
    </div>
  );
};

export default App;
