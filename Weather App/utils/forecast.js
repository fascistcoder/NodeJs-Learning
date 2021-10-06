const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=48e7c43876a233273cd35c2032a6a7f9&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback(`Unable to connect to weather service`, undefined);
    } else if (body.error) {
      callback(`Unable to find location`, undefined);
    } else {
      callback(
        undefined,
        `Weather is ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degree out. It feels like ${body.current.feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
