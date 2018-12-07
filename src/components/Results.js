import React, { Component } from "react";
import "../styles/Results.scss";

class Results extends Component {
  render() {
    const warehouse = this.props.warehouseInfo;
    console.log(this.props.warehouseInfo);
    return (
      <div className="results">
        <ul className="results__wrap">
          <li>
            <b>Name:</b> {warehouse.name}
          </li>
          <li>
            <b>Location:</b> {warehouse.location}
          </li>
          <li>
            <b>Rating:</b> {warehouse.rating}
          </li>
          <li>
            <b>Temperature:</b> {warehouse.temperature}
          </li>
        </ul>
      </div>
    );
  }
}

export default Results;
