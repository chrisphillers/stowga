import React, { Component } from "react";
import Select from "react-select";
// import "./Search.scss";

const options = [
  { value: "chilled", label: "Chilled" },
  { value: "ambient", label: "Ambient" },
  { value: "frozen", label: "Frozen" },
  { value: "not_controlled", label: "Not Controlled" }
];

class Search extends Component {
  state = {};

  componentDidMount() {
    // const tempCapacity = 10000;
    // fetchCapacity(tempCapacity);
  }

  // tempSelect = selectedOption => {
  //   this.setState({ selectedOption }, () =>
  //     // this.props.receiveTemp(fetchTemperature(this.state.selectedOption))
  //     fetchTemperature(this.state.selectedOption)
  //   );
  // };

  tempSelect = selectedOption => {
    this.props.receiveTemp(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.tempSelect}
        options={options}
      />
    );
  }
}

export default Search;
