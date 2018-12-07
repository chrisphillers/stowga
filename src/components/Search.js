import React, { Component } from "react";
import Select from "react-select";
// import StarRatingComponent from "react-star-rating-component";

import "../styles/Search.scss";

const temps = [
  { value: "chilled", label: "Chilled" },
  { value: "ambient", label: "Ambient" },
  { value: "frozen", label: "Frozen" },
  { value: "not_controlled", label: "Not Controlled" }
];

const ratings = [
  { value: 0, label: "All" },
  { value: 1, label: "1+" },
  { value: 2, label: "2+" },
  { value: 3, label: "3+" },
  { value: 4, label: "4+" }
];

const capacity = [
  { value: 5000, label: "Less than 5000" },
  { value: 10000, label: "0 - 10000" },
  { value: 50000, label: "0 - 50,000" },
  { value: 50001, label: "+ 50,000" }
];
const distance = [
  { value: 10000, label: "10 Km" },
  { value: 30000, label: "30 Km" },
  { value: 60000, label: "60 Km" },
  { value: 120000, label: "120 Km" }
];

class Search extends Component {
  componentDidMount() {}

  tempSelect = selectedTemp => {
    this.props.receiveTemp(selectedTemp);
  };

  ratingSelect = selectedRating => {
    this.props.receiveRating(selectedRating);
  };

  capacitySelect = selectedCapacity => {
    this.props.receiveCapacity(selectedCapacity);
  };

  distanceChange = selectedDistance => {
    this.props.receiveDistance(selectedDistance);
  };

  locationChange = (name, value) => {
    console.log(name, value);
    this.props.receiveLocation({ [name]: value });
  };

  locationSubmit = event => {
    event.preventDefault();
    this.props.receiveLocationSubmit();
  };

  render() {
    const {
      selectedTemp,
      selectedRating,
      selectedCapacity,
      selectedDistance,
      selectedLat,
      selectedLon
    } = this.props;

    return (
      <div className="search">
        Temperature:
        <Select
          value={selectedTemp}
          onChange={this.tempSelect}
          options={temps}
        />
        Ratings:
        <Select
          value={selectedRating}
          onChange={this.ratingSelect}
          options={ratings}
        />
        {/* <h2>Rating from state: {rating}</h2> */}
        {/* <StarRatingComponent
          name="rate1"
          starCount={10}
          value={rating}
          ratingSelect={this.ratingSelect.bind(this)}
        /> */}
        Capacity:
        <Select
          value={selectedCapacity}
          onChange={this.capacitySelect}
          options={capacity}
        />
        <form
          className="search__form"
          onSubmit={event => this.locationSubmit(event)}
          // onChange={console.log}
        >
          Location: All warehouses within
          <Select
            value={selectedDistance}
            onChange={this.distanceChange}
            options={distance}
          />
          <span className="search__lonlat">
            <label>of Longitude:</label>
            <input
              type="number"
              placeholder="Longitude"
              name="Lon"
              value={selectedLon}
              onChange={event => this.locationChange("Lon", event.target.value)}
            />
            <label>Latitude:</label>
            <input
              type="number"
              placeholder="Latitude"
              name="Lat"
              value={selectedLat}
              onChange={event => this.locationChange("Lat", event.target.value)}
            />
            <button>Calculate</button>
          </span>
        </form>
      </div>
    );
  }
}

export default Search;
