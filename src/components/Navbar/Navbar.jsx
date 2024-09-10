import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/pawprint.png";
import { Link } from "react-router-dom";
import profilelogo from "../Assets/profile-icon.png";



// UserStatus component to display login status and user information
const UserStatus = () => {
  // Sample user data to simulate a logged-in user
  const user = false;
  //{ name: 'Sample User', role: 'Pet Adopter' };

  return (
    <div className="user-status">
      {user ? (
        <>
          <div className="user-profile">
            <img src={profilelogo} alt="Profile" />
            <div className="user-details">
              <h4>{user.name}</h4>
              <h5>{user.role}</h5>
            </div>
            <div className="logout">
              <h4>Logout</h4>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Link to="/login">
            <button className="login-btn">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};


// Navbar component
export const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" className="logo" />
        <p>PAWSIBILITIES</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("Home")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>{" "}
          {menu === "Home" && <hr />}
        </li>
        <li onClick={() => setMenu("Pets")}>
          <Link style={{ textDecoration: "none" }} to="/Pets">
            Pets
          </Link>{" "}
          {menu === "Pets" && <hr />}
        </li>
        <li onClick={() => setMenu("Accessories Stores")}>
          <Link style={{ textDecoration: "none" }} to="/Accessories Stores">
            Accessories Stores
          </Link>{" "}
          {menu === "Accessories Stores" && <hr />}
        </li>
        <li onClick={() => setMenu("Wellness Guide")}>
          <Link style={{ textDecoration: "none" }} to="/WellnessGuide">
            Wellness Guide
          </Link>{" "}
          {menu === "Wellness Guide" && <hr />}
        </li>
      </ul>
      <UserStatus /> {/* Include the UserStatus component */}
    </div>
  );
};

export default Navbar;
