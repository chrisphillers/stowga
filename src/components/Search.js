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
  { value: 10, label: "10 Km" },
  { value: 30, label: "30 Km" },
  { value: 60, label: "60 Km" },
  { value: 120, label: "120 Km" }
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

  // locationSubmit = event => {
  //   event.preventDefault();
  //   this.props.receiveLocation(event);
  // };

  locationChange(event) {
    this.props.receiveLocation({ [event.target.name]: event.target.value });
  }

  render() {
    const selectedTemp = this.props.selectedTemp;
    // const selectedRating = this.props.selectedRating;
    const selectedRating = this.props.selectedRating;
    const selectedCapacity = this.props.selectedCapacity;
    const selectedLon = this.props.selectedLon;
    const selectedLat = this.props.selectedLat;
    const selectedDistance = this.props.selectedDistance;

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
          onSubmit={event => this.props.locationSubmit(event)}
        >
          Location: All warehouses within
          <Select
            value={selectedDistance}
            onChange={this.locationChange}
            options={distance}
          />
          <span className="search__lonlat">
            of Long:
            <input
              type="text"
              placeholder="Longitude"
              value={selectedLon}
              onChange={this.locationChange}
            />
            Lat:
            <input
              type="text"
              placeholder="Latitude"
              value={selectedLat}
              onChange={this.locationChange}
            />
            <button>Calculate</button>
          </span>
        </form>
      </div>
    );
  }
}

export default Search;
