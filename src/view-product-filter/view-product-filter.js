import React, { Component } from "react";
import "./view-product-filter.css";

class ViewProductFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataService: require("../data/data.service"),
      filterChar: props.filterChar
    };
    this.refreshList = this.refreshList.bind(this);
    this.changeFilterChar = this.changeFilterChar.bind(this);
    this.addToBill = this.addToBill.bind(this);
  }

  changeFilterChar(char) {
    this.setState({ filterChar: char });
  }

  refreshList() {
    this.forceUpdate();
  }

  addToBill(product) {
    console.log(product);
  }

  render() {
    let id = 0;
    let products = [];
    if (this.state.dataService.getProducts()) {
      if (this.state.filterChar !== "") {
        products = this.state.dataService
          .getProducts()
          .filter(d => d.name.includes(this.state.filterChar))
          .map((d, i) => {
            return (
              <tr key={i}>
                <th scope="row">{++id}</th>
                <td>{d.name}</td>
                <td>{d.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.addToBill.bind(this, d)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            );
          });
      } else {
        products = this.state.dataService.getProducts().map((d, i) => {
          return (
            <tr key={i}>
              <th scope="row">{++id}</th>
              <td>{d.name}</td>
              <td>{d.price}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.addToBill.bind(this, d)}
                >
                  Add
                </button>
              </td>
            </tr>
          );
        });
      }
    }
    return (
      <div className="col-md-12 col-xs-12 products">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Add</th>
            </tr>
          </thead>
          <tbody>{products}</tbody>
        </table>
      </div>
    );
  }
}

export default ViewProductFilter; // Don’t forget to use export default!
