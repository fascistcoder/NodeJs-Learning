const request = require("postman-request");

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZGFyay1zaWRlLW9mLW1vb24iLCJhIjoiY2t1Yjk2M2N2MDc0dTJybzZydnd4YnZscyJ9.D12fOWYKx4Rmt-IoENs6iw&limit=1`;
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback(`Unable to connect to Geo Location service`, undefined);
    } else if (body.features.length === 0) {
      callback(`Unable to find location`, undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
