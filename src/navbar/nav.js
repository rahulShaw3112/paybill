import React, { Component } from "react";
import './nav.css'

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Billing App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Add/View Products</a>
            <a className="nav-item nav-link" href="#">Generate Bill</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
