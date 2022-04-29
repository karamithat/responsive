import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/img/logo.svg";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="navbar">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          <li href="#">Anasayfa</li>
          <li href="#">Hakkımda</li>
          <li href="#">Uzmanlık Alanları</li>
          <li href="#">Hastalar İçin Bilgiler</li>
          <li href="#">Akademik Etkinlikler</li>
          <li href="#">İletişim</li>
          <button>Randevu Alın</button>
        </ul>
      </div>
      <div className="right">
        <div className="contact">
          <div className="contact-item">
            <span>
              <i className="fa-solid fa-location-dot"></i>1420 Sok. No:82 Azim
              apt. Kat:4 Daire:7 Alsancak - İZMİR
            </span>

            <span>
              <i className="fa-solid fa-envelope"></i>ilke@akyildiz.net
            </span>
          </div>

          <div className="contact-item">
            <div className="icon">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-google-plus-g"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu-item">
            <a href="#">Anasayfa</a>
            <a href="#">Hakkımda</a>
            <a href="#">Uzmanlık Alanları</a>
            <a href="#">Hastalar İçin Bilgiler</a>
            <a href="#">Akademik Etkinlikler</a>
            <a href="#">İletişim</a>
          </div>
          <button>Randevu Alın</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
