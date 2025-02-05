import React from "react";

const Navbar = () => {
  return (
    <div className="pb-5 backGround_cls">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark backGround_cls">
        <div className="container">
          <a className="navbar-brand im-fell-great-primer-sc-regular" href="#">
            <span style={{ fontSize: "32px" }}>I</span>
            <span>MMVERSE</span>
            <span style={{ fontSize: "32px" }}>AI</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item nav_text_f">
                <a className="nav-link " href="#">
                  Home
                </a>
              </li>
              <li className="nav-item text_f">
                <a className="nav-link" href="#">
                  Company
                </a>
              </li>
              <li className="nav-item text_f">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item ">
                <button className="sign_up_btn" style={{ marginLeft: "40px" }}>
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
