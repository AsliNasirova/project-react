import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <>
      <div id="esli">
        {/* navbar start */}
      <header className="cotainer_navbar">
        <div className="site_logo">
          <h2>Pulse.</h2>
        </div>
        <div className="home_part">
          <ul className="main_menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Resturant</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contant</a>
            </li>
          </ul>
        </div>
        <div className="navbar_right">
          <p>
            <span className="reservations">Reservations</span>
            <i class="fa-solid fa-phone"></i>
            +123 456 789
          </p>
        </div>
      </header>
      <div className="navbar_section">
        <div className="navbar_section_content">
          <h2>
            Food and more <span>.</span>
          </h2>
          <p>By Chef Francis Smith</p>
        </div>
      </div>
      {/* navbar section start */}
      </div>
    </>
  );
};

export default Navbar;
