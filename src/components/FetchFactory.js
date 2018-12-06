export function sendState(warehouseData) {}

export function fetchTemperature(tempCat) {
  return fetch(`/api/temperature/${tempCat.value}`)
    .then(res => res.json())
    .then(body => {
      return body;
    });
}

export function fetchCapacity(capacityCat) {
  return fetch(`/api/capacity/${capacityCat.value}`)
    .then(res => res.json())
    .then(body => {
      console.log(body);
      return body;
    });
}

export function fetchRating(ratingCat) {
  console.log(ratingCat);
  return fetch(`/api/rating/${ratingCat.value}`)
    .then(res => res.json())
    .then(body => {
      console.log(body);
      return body;
    });
}

export function fetchLocation(tempCat) {
  return fetch(`/api/location/${tempCat}`)
    .then(res => res.json())
    .then(body => {
      console.log(body);
      return body;
    });
}

export function fetchAll(tempCat) {
  return fetch(`/api/all/${tempCat}`)
    .then(res => res.json())
    .then(body => {
      console.log(body);
      return body;
    });
}
