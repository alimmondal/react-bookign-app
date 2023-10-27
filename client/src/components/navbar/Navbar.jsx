import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  // console.log("user", user);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Asmbooking</span>
        </Link>

        {user ? (
          user.username
        ) : (
          <div className="navItem">
            <button className="navButton">Register</button>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
