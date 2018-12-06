import React, { Component } from "react";
// import "./Results.scss";

class Results extends Component {
  render() {
    const warehouse = this.props.warehouseInfo;
    console.log(this.props.warehouseInfo);
    return (
      <ul className="Results">
        <li>Name: {warehouse.name}</li>
        <li>Location: {warehouse.location}</li>
        <li>Rating: {warehouse.rating}</li>
        <li>Temperature: {warehouse.temperature}</li>
      </ul>
    );
  }
}

export default Results;
