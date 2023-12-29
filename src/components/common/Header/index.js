import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };
  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile over ${
          showMobMenu ? "overlay" : ""
        }`}
      >
        <div className="mobile-navbar flex flex-col">
          <a href="/coupons" className="mobile-nav-item">
            Surprice for you!
          </a>
          <a href="/playlist" className="mobile-nav-item">
            Surprise for you!
          </a>
          <a href="/vid" className="mobile-nav-item">
            Surprise for you!
          </a>
        </div>
      </div>
      <div className="flex max-width header">
        <img
          src="https://i.postimg.cc/907LSmSB/christmas-2012-new-5895-removebg-preview.png"
          alt="M"
          className="header-logo"
        />
        <div className="only-mobile menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <a href="/coupons" className="header-nav-item">
          Surprice for you!
          </a>
          <a href="/playlist" className="header-nav-item">
          Surprice for you!
          </a>
          <a href="/vid" className="header-nav-item">
          Surprice for you!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
