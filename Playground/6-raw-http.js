const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=48e7c43876a233273cd35c2032a6a7f9&query=45,-75units=m";

const request = http.request(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  res.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (err) => {
  console.error("An error", err);
});

request.end();
