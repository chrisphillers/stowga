// import App from "./App";

export function sendState(warehouseData) {}

export function fetchTemperature(tempCat) {
  console.log("fetching temp", tempCat);
  fetch(`/api/temperature/${tempCat.value}`)
    .then(res => res.json())
    .then(body => {
      console.log(body);
      // <App sendState={body}
      // receiveState(body);
      return body;
    });
}

export function fetchCapacity(tempCat) {
  fetch(`/api/capacity/${tempCat}`)
    .then(res => res.json())
    .then(body => {
      console.log(body);
    });
}

export function fetchRating(tempCat) {
  fetch(`/api/rating/${tempCat}`)
    .then(res => res.json())
    .then(body => {
      console.log(body);
      // return this.props.receiveState(body);
    });
}

export function fetchLocation(tempCat) {
  fetch(`/api/location/${tempCat}`)
    .then(res => res.json())
    .then(body => {
      console.log(body);
      // return this.props.receiveState(body);
    });
}

export function fetchAll(tempCat) {
  fetch(`/api/all/${tempCat}`)
    .then(res => res.json())
    .then(body => {
      console.log(body);
      // return this.props.receiveState(body);
    });
}
