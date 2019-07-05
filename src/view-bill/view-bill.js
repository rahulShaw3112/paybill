import React, { Component } from "react";
import "./view-bill.css";

class ViewBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: require("../data/data.service")
    };
    this.refreshList = this.refreshList.bind(this);
  }

  refreshList() {
    this.forceUpdate();
  }

  render() {
    let id = 0;
    let products = [];
    if (this.state.dataService.getProductsBill()) {
      products = this.state.dataService.getProductsBill().map((d,i) => {
        return (
          <tr key={i}>
            <th scope="row">{++id}</th>
            <td>{d.name}</td>
            <td>{d.price}</td>
          </tr>
        );
      });
    }
    return (
      <div className="col-md-6 col-xs-12 products">
        <h3>Bill</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{products}</tbody>
        </table>
      </div>
    );
  }
}

export default ViewBill;
