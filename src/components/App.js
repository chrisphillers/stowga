import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import {
  fetchTemperature,
  fetchCapacity,
  fetchRating,
  fetchLocation,
  fetchAll
} from "./FetchFactory";

import "../styles/App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      warehouses: [],
      selectedOption: null
    };
    this.receiveTemp = this.receiveTemp.bind(this);
    this.fetchTemp = this.fetchTemp.bind(this);
  }

  receiveTemp(temperature) {
    this.setState({ selectedOption: temperature }, () => {
      this.fetchTemp();
    });
  }

  fetchTemp() {
    this.setState({ warehouses: fetchTemperature(this.state.selectedOption) });
  }

  render() {
    const warehouseArr = [
      {
        id: "3E431DDF",
        name: "Warehouse one",
        location: "Leeds",
        latitude: 53.77,
        longitude: -1.55,
        rating: 0,
        temperature: "chilled",
        capacity_sq_ft: "32073",
        geom: "0101000020E6100000000000C0CCCCF8BF000000608FE24A40"
      },
      {
        id: "FDA79DB3",
        name: "Warehouse two",
        location: "Kilkeel",
        latitude: 53.35,
        longitude: -6.26,
        rating: 3.3,
        temperature: "chilled",
        capacity_sq_ft: "26509",
        geom: "0101000020E6100000000000803D0A19C0000000C0CCAC4A40"
      },
      {
        id: "D92036DF",
        name: "Warehouse three",
        location: "Northolt",
        latitude: 51.55,
        longitude: -0.35,
        rating: 2,
        temperature: "chilled",
        capacity_sq_ft: "51084",
        geom: "0101000020E6100000000000606666D6BF0000006066C64940"
      },
      {
        id: "B3A5D0C5",
        name: "Warehouse ten",
        location: "Doncaster",
        latitude: 53.52,
        longitude: -1.13,
        rating: 4.3,
        temperature: "chilled",
        capacity_sq_ft: "53698",
        geom: "0101000020E6100000000000E07A14F2BF000000608FC24A40"
      },
      {
        id: "EC480F67",
        name: "Warehouse fifteen",
        location: "Water Orton",
        latitude: 52.52,
        longitude: -1.71,
        rating: 3.1,
        temperature: "chilled",
        capacity_sq_ft: "17047",
        geom: "0101000020E610000000000000295CFBBF000000608F424A40"
      },
      {
        id: "72D39518",
        name: "Warehouse twenty",
        location: "Bonnybridge",
        latitude: 56,
        longitude: -3.89,
        rating: 4,
        temperature: "chilled",
        capacity_sq_ft: "86579",
        geom: "0101000020E610000000000060B81E0FC00000000000004C40"
      },
      {
        id: "71F6FDD7",
        name: "Warehouse twenty-four",
        location: "Liverpool",
        latitude: 53.44,
        longitude: -2.93,
        rating: 2.7,
        temperature: "chilled",
        capacity_sq_ft: "31327",
        geom: "0101000020E6100000000000E0A37007C0000000E051B84A40"
      },
      {
        id: "25D52F57",
        name: "Warehouse thirty-three",
        location: "Blaby",
        latitude: 52.57,
        longitude: -1.18,
        rating: 3.1,
        temperature: "chilled",
        capacity_sq_ft: "17804",
        geom: "0101000020E6100000000000A047E1F2BF000000C0F5484A40"
      },
      {
        id: "98314B7A",
        name: "Warehouse thirty-four",
        location: "Basingstoke",
        latitude: 51.27,
        longitude: -1.09,
        rating: 3.4,
        temperature: "chilled",
        capacity_sq_ft: "35378",
        geom: "0101000020E6100000000000E0A370F1BF000000608FA24940"
      },
      {
        id: "93ED6E8B",
        name: "Warehouse thirty-six",
        location: "Halesowen",
        latitude: 52.45,
        longitude: -2.05,
        rating: 3.8,
        temperature: "chilled",
        capacity_sq_ft: "92525",
        geom: "0101000020E610000000000060666600C0000000A099394A40"
      },
      {
        id: "1359036A",
        name: "Warehouse thirty-nine",
        location: "Pilsley",
        latitude: 53.19,
        longitude: -1.35,
        rating: 0,
        temperature: "chilled",
        capacity_sq_ft: "90905",
        geom: "0101000020E6100000000000A09999F5BF000000E051984A40"
      },
      {
        id: "B0B33D27",
        name: "Warehouse forty-three",
        location: "Harwich",
        latitude: 51.95,
        longitude: 1.32,
        rating: 3.4,
        temperature: "chilled",
        capacity_sq_ft: "73754",
        geom: "0101000020E610000000000060B81EF53F000000A099F94940"
      },
      {
        id: "67354114",
        name: "Warehouse forty-one",
        location: "Corby",
        latitude: 52.5,
        longitude: -0.65,
        rating: 0,
        temperature: "chilled",
        capacity_sq_ft: "54396",
        geom: "0101000020E6100000000000C0CCCCE4BF0000000000404A40"
      },
      {
        id: "4923AA37",
        name: "Warehouse forty-two",
        location: "Yaxley",
        latitude: 52.54,
        longitude: -0.31,
        rating: 3.5,
        temperature: "chilled",
        capacity_sq_ft: "70601",
        geom: "0101000020E6100000000000400AD7D3BF000000C01E454A40"
      },
      {
        id: "6B2EEFFA",
        name: "Warehouse forty-four",
        location: "Harwich",
        latitude: 51.95,
        longitude: 1.32,
        rating: 3,
        temperature: "chilled",
        capacity_sq_ft: "49669",
        geom: "0101000020E610000000000060B81EF53F000000A099F94940"
      },
      {
        id: "CFC13C50",
        name: "Warehouse forty-five",
        location: "Longfield",
        latitude: 51.41,
        longitude: 0.26,
        rating: 3.2,
        temperature: "chilled",
        capacity_sq_ft: "93512",
        geom: "0101000020E610000000000000D7A3D03F000000E07AB44940"
      },
      {
        id: "5C6E473F",
        name: "Warehouse fifty-five",
        location: "Northampton",
        latitude: 52.26,
        longitude: -0.95,
        rating: 2.7,
        temperature: "chilled",
        capacity_sq_ft: "7226",
        geom: "0101000020E6100000000000606666EEBF000000A047214A40"
      },
      {
        id: "DF3136D6",
        name: "Warehouse sixteen",
        location: "Aylesford",
        latitude: 51.31,
        longitude: 0.45,
        rating: 0,
        temperature: "chilled",
        capacity_sq_ft: "74322",
        geom: "0101000020E6100000000000C0CCCCDC3F00000020AEA74940"
      },
      {
        id: "BB66E8D4",
        name: "Warehouse twenty-seven",
        location: "Cannock",
        latitude: 52.7,
        longitude: -2.02,
        rating: 3,
        temperature: "chilled",
        capacity_sq_ft: "37503",
        geom: "0101000020E6100000000000C0F52800C0000000A099594A40"
      },
      {
        id: "F55381AF",
        name: "Warehouse fifty-two",
        location: "Woolwich",
        latitude: 51.49,
        longitude: 0.08,
        rating: 4.1,
        temperature: "chilled",
        capacity_sq_ft: "82475",
        geom: "0101000020E610000000000040E17AB43F00000060B8BE4940"
      }
    ];

    return (
      <div className="App">
        <img className="App__logo" src="/img/logo.png" alt="logo" />
        <Search receiveTemp={this.receiveTemp} />
        {this.state.warehouses.map(warehouse => (
          <Results warehouseInfo={warehouse} key={warehouse.name} />
        ))}
      </div>
    );
  }
}

export default App;
