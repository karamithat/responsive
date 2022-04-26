import React from "react";
import "./navbar.scss";
import logo from "../../assets/img/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="right">
      <div className="toggle">
        <i class="fa-solid fa-bars">asds</i>
        
      </div>
        <div className="contact">
          <div className="contact-item">
            <span>
              <i class="fa-solid fa-location-dot"></i>1420 Sok. No:82 Azim apt.
              Kat:4 Daire:7 Alsancak - İZMİR
            </span>

            <span>
              <i class="fa-solid fa-envelope"></i>ilke@akyildiz.net
            </span>
          </div>

          <div className="contact-item">
            <div className="icon">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-google-plus-g"></i>
              <i class="fa-brands fa-instagram"></i>
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
