"use strict";

/*
////////////////////////////////////////////////////////////////////////////
// Lecture 30

console.log("starting");

setTimeout(() => {
  console.log("2 second timer");
}, 2000);

setTimeout(() => {
  console.log("0 second timer");
}, 0);

console.log("Stopping");

////////////////////////////////////////////////////////////////////////////
*/

/*
////////////////////////////////////////////////////////////////////////////
// Lecture 31,32

const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=48e7c43876a233273cd35c2032a6a7f9&query=28.183332,76.616669&units=f";

request({ url: url, json: true }, (err, res) => {
  if (err) {
    console.log(`Unable to connect to weather service`);
  } else if (res.body.error) {
    console.log(`Unable to find location`);
  } else {
    console.log(
      `${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degree out. It feels like ${res.body.current.feelslike} degrees out`
    );
  }
  //   const data = JSON.parse(res.body);
  //   console.log(data.current);

  //   console.log(res.body.current);

  //   console.log(
  //     `${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degree out. It feels like ${res.body.current.feelslike} degrees out`
  //   );
});

////////////////////////////////////////////////////////////////////////////
*/

/*
////////////////////////////////////////////////////////////////////////////
// Lecture 33,34,35

// Geocoding service
// Address -> Lat/Long -> Weather

const geoUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFyay1zaWRlLW9mLW1vb24iLCJhIjoiY2t1Yjk2M2N2MDc0dTJybzZydnd4YnZscyJ9.D12fOWYKx4Rmt-IoENs6iw&limit=1";

request({ url: geoUrl, json: true }, (err, res) => {
  if (err) {
    console.log(`Unable to connect to Geo Location service`);
  } else if (res.body.features.length === 0) {
    console.log(`Unable to find location`);
  } else {
    const latitude = res.body.features[0].center[1];
    const longitude = res.body.features[0].center[0];
    const city = res.body.features[0].text;
    console.log(
      `${city} latitude is ${latitude} and longitude is ${longitude}`
    );
  }
});

////////////////////////////////////////////////////////////////////////////
*/

/*
////////////////////////////////////////////////////////////////////////////
// Lecture 36,37

const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geoCode("rewari", (err, data) => {
  console.log("Error", err);
  console.log("Data", data);
});

forecast(44.1545, -75.7088, (err, data) => {
  console.log("Error", err);
  console.log("Data", data);
});

////////////////////////////////////////////////////////////////////////////
*/

const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide a valid address");
} else {
  geoCode(address, (err, { latitude, longitude, location } = {}) => {
    if (err) {
      return console.log(err);
    }

    forecast(latitude, longitude, (err, forcastData) => {
      if (err) {
        return console.log(err);
      }
      console.log(location);
      console.log(forcastData);
    });
  });
}
