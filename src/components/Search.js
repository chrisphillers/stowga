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
  { value: 50001, label: "+50,000" }
];
const distance = [
  { value: 10, label: "10Kms" },
  { value: 30, label: "30Kms" },
  { value: 60, label: "60Kms" },
  { value: 120, label: "120Kms" }
];

class Search extends Component {
  state = {};

  componentDidMount() {
    // const tempCapacity = 10000;
    // fetchCapacity(tempCapacity);
  }

  tempSelect = selectedTemp => {
    this.props.receiveTemp(selectedTemp);
  };

  // onStarClick(nextValue, prevValue, name) {
  //   this.setState({ rating: nextValue });
  // }

  ratingSelect = selectedRating => {
    this.props.receiveRating(selectedRating);
  };

  capacitySelect = selectedCapacity => {
    this.props.receiveCapacity(selectedCapacity);
  };

  locationSubmit = event => {
    event.preventDefault();
    this.props.receiveLocation(event);
  };

  locationChange = event => {};

  render() {
    const selectedTemp = this.props.selectedTemp;
    // const selectedRating = this.props.selectedRating;
    const selectedRating = this.props.selectedRating;
    const selectedCapacity = this.props.selectedCapacity;
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
        <form onSubmit={event => this.props.locationSubmit(event)}>
          Location: All warehouses within
          <Select
            value={selectedDistance}
            onChange={this.locationChange}
            options={distance}
          />
          of Long:
          <input
            type="text"
            placeholder="Long"
            onChange={event => this.locationChange(event)}
          />
          Lat:
          <input
            type="text"
            placeholder="Lat"
            onChange={event => this.props.locationChange(event)}
          />
          <button />
        </form>
      </div>
    );
  }
}

export default Search;
