import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Toronto, ON</h3>
          <p>
            A contemporary Mediterranean dining experience where classic
            recipes are served with a refined modern touch.
          </p>
          <Link to="/booking">
            <button aria-label="Reserve a table">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="Fresh restaurant dish" />
        </div>
      </section>
    </header>
  );
};

export default Header;
