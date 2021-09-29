const fs = require("fs");

// const book = {
//   title: "Ego is the Enemey",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// fs.writeFileSync("1-json.json", bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// Challenge
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Pulkit";
data.age = "23";

const infoJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", infoJSON);
