import React from "react";
import Logo from '../../Img/logo.png';
import '../Header/Header.css';
import HeadSection from "../HeadSection/HeadSection";

const Header = () => {
  return (
    <>
    <section id="navbar1">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          <a href="" className="navbar-brand">
            <img src={Logo} alt="logo" />
          </a>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="" className="nav-link navbar-text">Home</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link navbar-text">Merchant</a>
              </li>
              <li className="nav-item d-flex">
                <a href="">
                  <div className="nav-link navbar-text">Sign in</div>
                </a>
                <a href="">
                  <div className="nav-link navbar-text">/ Sign up</div>
                </a>
              </li>
            </ul>
            <button className="btn pod_btn">Become Pods</button>
          </div>
        </div>
      </nav>
    </section>  
    </>
  );
};

export default Header;
