const path = require("path");
const express = require("express");
const hbs = require("hbs");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and view location
app.set("views", viewPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// Setup static directory to routes
app.use(express.static(publicDirectoryPath));

// app.get("", (req, res) => {
//   res.send("<h1>Weather</h1>");
// });

// app.get("/help", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/help.html"));
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "Pulkit",
//     age: 23,
//   });
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/about.html"));
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About the Page</h1>");
// });

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Pulkit",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Pulkit",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some help text",
    title: "Help",
    name: "Pulkit",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is sunny",
    location: "rewari",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Pulkit",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Pulkit",
    errorMessage: "Page not found",
  });
});

app.listen(4000, () => {
  console.log("Server is starting on port 4000");
});
