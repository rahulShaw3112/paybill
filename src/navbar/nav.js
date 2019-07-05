import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Billing App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse navbar-right"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/products">
              <a className="nav-item nav-link">Add/View Products</a>
            </Link>
            <Link to="/bill">
              <a className="nav-item nav-link">Generate Bill</a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
