import React from "react";
import small_logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={small_logo} alt="Little Lemon logo" />
          <p>
            Little Lemon is a family-owned restaurant delivering modern
            Mediterranean dishes with attentive service and elevated flavor.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/booking">Reservations</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>123 Town Street, Toronto</li>
            <li>+00 123 456 789</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Follow</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
