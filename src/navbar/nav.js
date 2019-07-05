import React, { Component } from "react";
import "./nav.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bill from '../bill/bill'; // Import a component from another file
import Product from '../product/product';

class Nav extends Component {
  render() {
    return (
      <Router>
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
                <span className="nav-item nav-link">Add/View Products</span>
              </Link>
              <Link to="/bill">
                <span className="nav-item nav-link" href="#">
                  Generate Bill
                </span>
              </Link>
            </div>
          </div>
        </nav>

        <Route path="/products/" component={Product} />
        <Route path="/bill/" component={Bill} />
      </Router>
    );
  }
}

export default Nav;
