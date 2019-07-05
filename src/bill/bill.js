import React, { Component } from "react";
import "./bill.css";
import AddBill from '../add-bill/add-bill'
import ViewBill from "../view-bill/view-bill";

class Bill extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <AddBill />
                <ViewBill />
            </div>

        </div>
    );
  }
}

export default Bill;
