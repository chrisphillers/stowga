import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import {
  fetchTemperature,
  fetchCapacity,
  fetchRating,
  fetchLocation
} from "./FetchFactory";

import "../styles/App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      warehouses: [],
      selectedTemp: null,
      selectedRating: null,
      selectedCapacity: null,
      selectedDistance: null,
      selectedLon: null,
      selectedLat: null,
      allSelected: null
    };
    this.receiveTemp = this.receiveTemp.bind(this);
    this.receiveRating = this.receiveRating.bind(this);
  }

  receiveTemp(temperature) {
    this.setState({ selectedTemp: temperature }, () => {
      fetchTemperature(this.state.selectedTemp).then(body => {
        this.setState({ warehouses: body });
      });
    });
  }

  receiveCapacity(capacity) {
    this.setState({ selectedCapacity: capacity }, () => {
      fetchCapacity(this.state.selectedCapacity).then(body => {
        this.setState({ warehouses: body });
      });
    });
  }

  receiveRating(rating) {
    this.setState({ selectedRating: rating }, () => {
      fetchRating(this.state.selectedRating).then(body => {
        this.setState({ warehouses: body });
      });
    });
  }

  receiveLocation(name, value) {
    this.setState(
      { [name]: value }
      // , () => {
      // fetchLocation(this.state.selectedRating).then(body => {
      //   this.setState({ warehouses: body });
      // });
      // }
    );
  }

  render() {
    return (
      <div className="App">
        <img className="App__logo" src="/img/logo.png" alt="logo" />
        <Search
          receiveTemp={this.receiveTemp}
          receiveRating={this.receiveRating}
          receiveCapacity={this.receiveCapacity}
          receiveLocation={this.receiveLocation}
          // receiveLocationStates={this.receiveLocationStates}
          selectedTemp={this.state.selectedTemp}
          selectedRating={this.state.selectedRating}
          selectedCapacity={this.state.selectedCapacity}
          selectedDistance={this.state.selectedDistance}
          selectedLon={this.state.selectedLon}
          selectedLat={this.state.selectedLat}
        />
        {this.state.warehouses.map(warehouse => (
          <Results warehouseInfo={warehouse} key={warehouse.name} />
        ))}
      </div>
    );
  }
}

export default App;
