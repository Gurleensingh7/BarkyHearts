import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar({isAdmin}) {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user?.email) {
      setUserEmail(user.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("User");
    setUserEmail(null);
   window.location.href="/Login";
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed start-0 end-0 top-0" style={{ zIndex: 50 }}>
        <div className="container-fluid">
          <img src="barkyimages/doglogo.png" className="logoofdog" />
          <a className="navbar-brand fw-bold fs-2" href="#">Barky Hearts</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 gap-4 fw-bold ">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/veterinarian">Veterinarian</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/blog">Blog</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/contact">Contact</Link></li>
              {
                isAdmin && 
                <li className="nav-item"><Link className="nav-link active" to="/admin/">Admin</Link></li>
              }
            </ul> &nbsp;

            {userEmail ? (
              <div className="profile-container">
                <div className="profile-icon" onClick={toggleDropdown}>
                  <i className="fa-solid fa-user"></i> &nbsp;
                  <span>{userEmail}</span>
                </div>
                {dropdownVisible && (
                  <div className="dropdown-menu-custom">
                    <Link to="/profile" className="dropdown-item">Profile</Link>
                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <button className="login_button">
                <Link className="button-linkcolor" to="/login">Log in</Link>
              </button>
            )}

            <ul className="list-unstyled">
              <li className="fw-bold fs-4">
                <i className="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;|&nbsp;&nbsp;
                <i className="fa-regular fa-heart"></i>&nbsp;&nbsp;
                <i className="fa-solid fa-basket-shopping" onClick={() => navigate("/cart")}></i>
             
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br /><br />
    </div>
  );
}
