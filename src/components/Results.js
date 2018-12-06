import React, { Component } from "react";
import "../styles/Results.scss";

class Results extends Component {
  render() {
    const warehouse = this.props.warehouseInfo;
    console.log(this.props.warehouseInfo);
    return (
      <div className="results">
        <ul className="results__wrap">
          <li>Name: {warehouse.name}</li>
          <li>Location: {warehouse.location}</li>
          <li>Rating: {warehouse.rating}</li>
          <li>Temperature: {warehouse.temperature}</li>
        </ul>
      </div>
    );
  }
}

export default Results;
