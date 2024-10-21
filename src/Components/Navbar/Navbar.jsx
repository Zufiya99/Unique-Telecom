import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <>
      <nav className="navbar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1djBWak0nLQKna5TcMrq_xHmY8pBvbOASbg&s"
          alt="Logo"
          className="logo"
        />
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenu("About")}
            className={menu === "About" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/mobile-app"
            onClick={() => setMenu("Mobile App")}
            className={menu === "Mobile App" ? "active" : ""}
          >
            Mobile App
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenu("Contact")}
            className={menu === "Contact" ? "active" : ""}
          >
            Contact
          </Link>
        </ul>
        <div className="navbar-right">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/652/218/non_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
            alt="search_icon"
            width={30}
          />
          <div className="navbar-search-icon">
            <img
              src="https://i.pinimg.com/564x/90/0a/85/900a8509ada5da27791d286287f062a2.jpg"
              alt="Order history"
              width={30}
            />
            <div className="dot"></div>
          </div>
          <button>Sign in</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
